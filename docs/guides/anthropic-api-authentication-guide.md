# Anthropic API x-api-key 认证完整指南

## 概述
Anthropic API 使用 `x-api-key` 作为 HTTP 请求头进行身份验证。这是调用所有 Anthropic API 端点的必需参数。

## API 端点
- **基础 URL**: `https://api.anthropic.com`
- **Messages API**: `https://api.anthropic.com/v1/messages`

## 认证格式

### 1. HTTP Headers 结构
```http
x-api-key: sk-ant-api03-xxxxxxxxxxxxxxxxxxxxx
anthropic-version: 2023-06-01
content-type: application/json
```

### 2. cURL 调用示例

#### 基础调用
```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [
      {"role": "user", "content": "Hello, Claude!"}
    ]
  }'
```

#### 带系统提示的调用
```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 2048,
    "system": "You are a helpful assistant.",
    "messages": [
      {"role": "user", "content": "What is the capital of France?"}
    ]
  }'
```

#### 流式响应
```bash
curl https://api.anthropic.com/v1/messages \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "stream": true,
    "messages": [
      {"role": "user", "content": "Tell me a story"}
    ]
  }'
```

### 3. Python 调用示例

#### 使用 requests 库
```python
import requests
import os

api_key = os.environ.get("ANTHROPIC_API_KEY")
url = "https://api.anthropic.com/v1/messages"

headers = {
    "x-api-key": api_key,
    "anthropic-version": "2023-06-01",
    "content-type": "application/json"
}

data = {
    "model": "claude-3-5-sonnet-20241022",
    "max_tokens": 1024,
    "messages": [
        {"role": "user", "content": "Hello, Claude!"}
    ]
}

response = requests.post(url, headers=headers, json=data)
print(response.json())
```

#### 使用 Anthropic SDK
```python
from anthropic import Anthropic

# 方法1：通过环境变量（推荐）
# 设置环境变量：ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
client = Anthropic()

# 方法2：直接传递 API key
client = Anthropic(api_key="sk-ant-api03-xxxxx")

message = client.messages.create(
    model="claude-3-5-sonnet-20241022",
    max_tokens=1024,
    messages=[
        {"role": "user", "content": "Hello, Claude!"}
    ]
)

print(message.content)
```

### 4. JavaScript/Node.js 调用示例

#### 使用 fetch
```javascript
const apiKey = process.env.ANTHROPIC_API_KEY;
const url = 'https://api.anthropic.com/v1/messages';

const response = await fetch(url, {
  method: 'POST',
  headers: {
    'x-api-key': apiKey,
    'anthropic-version': '2023-06-01',
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    model: 'claude-3-5-sonnet-20241022',
    max_tokens: 1024,
    messages: [
      { role: 'user', content: 'Hello, Claude!' }
    ]
  })
});

const data = await response.json();
console.log(data);
```

#### 使用 Anthropic SDK
```javascript
import Anthropic from '@anthropic-ai/sdk';

// 方法1：通过环境变量
const anthropic = new Anthropic();

// 方法2：直接传递 API key
const anthropic = new Anthropic({
  apiKey: 'sk-ant-api03-xxxxx',
});

const message = await anthropic.messages.create({
  model: 'claude-3-5-sonnet-20241022',
  max_tokens: 1024,
  messages: [
    { role: 'user', content: 'Hello, Claude!' }
  ],
});

console.log(message.content);
```

## 重要注意事项

### 1. API Key 格式
- Anthropic API keys 通常以 `sk-ant-api03-` 开头
- 完整格式：`sk-ant-api03-<随机字符串>`
- 长度约为 108 个字符

### 2. 必需的 Headers
- **x-api-key**: 你的 API 密钥（必需）
- **anthropic-version**: API 版本（必需，推荐使用 `2023-06-01`）
- **content-type**: 必须是 `application/json`

### 3. 常见错误

#### 401 Unauthorized
```json
{
  "error": {
    "type": "authentication_error",
    "message": "Invalid API key provided"
  }
}
```
**解决方案**: 检查 API key 是否正确，是否包含完整的前缀

#### 400 Bad Request
```json
{
  "error": {
    "type": "invalid_request_error",
    "message": "anthropic-version header is required"
  }
}
```
**解决方案**: 添加 `anthropic-version` header

### 4. 安全最佳实践

1. **永远不要硬编码 API key**
   ```python
   # 错误 ❌
   api_key = "sk-ant-api03-xxxxx"
   
   # 正确 ✅
   api_key = os.environ.get("ANTHROPIC_API_KEY")
   ```

2. **使用环境变量**
   ```bash
   # .env 文件
   ANTHROPIC_API_KEY=sk-ant-api03-xxxxx
   
   # 加载环境变量
   source .env
   ```

3. **在版本控制中忽略密钥文件**
   ```gitignore
   # .gitignore
   .env
   *.key
   config/secrets.json
   ```

## 测试连接

### 简单测试脚本
```bash
# 保存 API key 到环境变量
export ANTHROPIC_API_KEY="sk-ant-api03-你的密钥"

# 测试连接
curl -s -o /dev/null -w "%{http_code}" \
  -H "x-api-key: $ANTHROPIC_API_KEY" \
  -H "anthropic-version: 2023-06-01" \
  -H "content-type: application/json" \
  -d '{"model":"claude-3-5-sonnet-20241022","max_tokens":10,"messages":[{"role":"user","content":"Hi"}]}' \
  https://api.anthropic.com/v1/messages

# 返回 200 表示成功
```

### Python 测试脚本
```python
import os
import requests

def test_anthropic_api():
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("错误: 请设置 ANTHROPIC_API_KEY 环境变量")
        return False
    
    url = "https://api.anthropic.com/v1/messages"
    headers = {
        "x-api-key": api_key,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json"
    }
    
    data = {
        "model": "claude-3-5-sonnet-20241022",
        "max_tokens": 10,
        "messages": [{"role": "user", "content": "Hi"}]
    }
    
    try:
        response = requests.post(url, headers=headers, json=data)
        if response.status_code == 200:
            print("✅ API 连接成功!")
            return True
        else:
            print(f"❌ API 错误: {response.status_code}")
            print(response.json())
            return False
    except Exception as e:
        print(f"❌ 连接失败: {e}")
        return False

if __name__ == "__main__":
    test_anthropic_api()
```

## 常用参数说明

| 参数 | 类型 | 必需 | 说明 |
|------|------|------|------|
| model | string | ✅ | 模型名称，如 `claude-3-5-sonnet-20241022` |
| messages | array | ✅ | 消息数组，包含 role 和 content |
| max_tokens | integer | ✅ | 最大生成 token 数 |
| system | string | ❌ | 系统提示词 |
| temperature | float | ❌ | 温度参数 (0-1)，默认 1 |
| stream | boolean | ❌ | 是否流式输出，默认 false |
| stop_sequences | array | ❌ | 停止序列 |
| top_p | float | ❌ | nucleus 采样参数 |
| top_k | integer | ❌ | top-k 采样参数 |

## 故障排查清单

1. ✅ 检查 API key 是否正确设置
2. ✅ 确认 API key 格式正确（以 `sk-ant-api03-` 开头）
3. ✅ 验证所有必需的 headers 都已添加
4. ✅ 检查 `anthropic-version` 是否为支持的版本
5. ✅ 确认 content-type 是 `application/json`
6. ✅ 验证请求体 JSON 格式正确
7. ✅ 确认使用的模型名称正确
8. ✅ 检查网络连接和防火墙设置

## 更多资源

- [Anthropic 官方文档](https://docs.anthropic.com)
- [API 参考](https://docs.anthropic.com/claude/reference/messages_post)
- [SDK 文档](https://github.com/anthropics/anthropic-sdk-python)
- [定价信息](https://www.anthropic.com/pricing)