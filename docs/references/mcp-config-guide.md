# MCP 配置指南

本文档提供了完整的 Model Context Protocol (MCP) 配置文件模板和详细的配置说明。

## 📁 配置文件位置

### Claude Desktop
- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`

### 其他 MCP 客户端
请参考相应客户端的文档了解配置文件位置。

## 🔧 配置文件模板

完整的配置文件模板位于：[`mcp-config-template.json`](./mcp-config-template.json)

## 📋 工具配置说明

### 1. Sequential Thinking (分析工具)
```json
"sequential-thinking": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 复杂问题分析和深度思考
- **配置**: 无需额外配置

### 2. Context7 (库文档查询)
```json
"context7": {
  "command": "npx",
  "args": [
    "-y",
    "@upstash/context7-mcp@latest"
  ],
  "env": {
    "NODE_ENV": "production",
    "CONTEXT7_API_KEY": "${CONTEXT7_API_KEY}"
  }
}
```
- **功能**: 库文档查询和API助手
- **配置**: 需要 `CONTEXT7_API_KEY` 环境变量

### 3. Desktop Commander (桌面操作)
```json
"desktop-commander": {
  "command": "npx",
  "args": [
    "-y",
    "@wonderwhy-er/desktop-commander"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 桌面文件系统操作工具
- **配置**: 无需额外配置

### 4. DeepWiki (深度知识查询)
```json
"deepwiki": {
  "command": "npx",
  "args": [
    "-y",
    "mcp-deepwiki@latest"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 深度知识库查询工具
- **配置**: 无需额外配置

### 5. Chrome MCP Server (浏览器自动化)
```json
"chrome-mcp-server": {
  "command": "npx",
  "args": [
    "-y",
    "mcp-chrome-bridge"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: Chrome浏览器自动化工具
- **配置**: 需要安装Chrome浏览器

### 6. Codebase MCP (代码库分析)
```json
"codebase-mcp": {
  "command": "codebase-mcp",
  "args": [
    "start"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 代码库分析和检索工具
- **配置**: 需要安装 `codebase-mcp` 包

### 7. AST Aware Editor (语法树编辑)
```json
"ast-aware-editor": {
  "command": "npx",
  "args": [
    "-y",
    "ast-aware-editor"
  ],
  "env": {
    "NODE_ENV": "production",
    "AST_SERVER_PATH": "${AST_SERVER_PATH:-./ast-mcp-server}"
  }
}
```
- **功能**: 抽象语法树感知的代码编辑器
- **配置**: 可选 `AST_SERVER_PATH` 环境变量

## 🔒 安全配置建议

### 1. 环境变量管理
- 使用 `.env` 文件管理敏感信息
- 不要在配置文件中硬编码 API 密钥
- 定期轮换 API 密钥

### 2. 浏览器安全
- 确保Chrome浏览器已更新到最新版本
- 配置适当的浏览器权限
- 避免访问不信任的网站

### 3. API密钥安全
- 使用 `.env` 文件管理 API 密钥
- 定期轮换 Context7 API 密钥
- 不要在配置文件中硬编码敏感信息

## 📝 配置步骤

### 1. 复制统一配置
```bash
# Windows
copy "docs\references\mcp-unified-config.json" "%APPDATA%\Claude\claude_desktop_config.json"

# macOS/Linux
cp docs/references/mcp-unified-config.json ~/.config/claude/claude_desktop_config.json
```

### 2. 设置环境变量
创建 `.env` 文件并设置：
```bash
# 必需的��境变量
CONTEXT7_API_KEY=your-context7-api-key-here

# 可选的环境变量
AST_SERVER_PATH=./ast-mcp-server
```

### 3. 验证配置
- 重启 Claude Desktop
- 检查 MCP 服务器状态指示器
- 在配置中验证工具是否正确加载

## 🔧 故障排除

### 常见问题
1. **服务器未启动**: 检查 Node.js 安装和网络连接
2. **权限错误**: 验证文件路径和访问权限
3. **API 密钥错误**: 检查环境变量配置

### 日志查看
- **macOS**: `~/Library/Logs/Claude/mcp*.log`
- **Windows**: `%APPDATA%\Claude\logs\mcp*.log`

## 📚 相关资源

- [MCP 工具参考手册](./mcp-tools-reference.md)
- [MCP 官方文档](https://modelcontextprotocol.io/)
- [MCP 服务器集合](https://github.com/modelcontextprotocol/servers)
