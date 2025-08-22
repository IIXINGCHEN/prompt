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

### 2. Task Manager (任务管理)
```json
"task-manager": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-task-manager"],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 任务分解和项目管理
- **配置**: 无需额外配置

### 3. Context7 (上下文查询)
```json
"context7": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-context7"],
  "env": {
    "NODE_ENV": "production",
    "CONTEXT7_API_KEY": "your-context7-api-key-here"
  }
}
```
- **功能**: 库文档和API查询
- **配置**: 需要 Context7 API 密钥

### 4. DeepWiki (知识查询)
```json
"deepwiki": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-deepwiki"],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 深度知识库查询
- **配置**: 无需额外配置

### 5. Chrome Browser (网络访问)
```json
"chrome-browser": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-chrome"],
  "env": {
    "NODE_ENV": "production",
    "CHROME_EXECUTABLE_PATH": "/path/to/chrome/executable"
  }
}
```
- **功能**: 浏览器自动化和网页访问
- **配置**: 需要指定 Chrome 可执行文件路径

### 6. Codebase Retrieval (代码检索)
```json
"codebase-retrieval": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-codebase-retrieval",
    "/path/to/your/project"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 代码库分析和检索
- **配置**: 需要指定项目路径

### 7. AST Aware Editor (代码编辑)
```json
"ast-aware-editor": {
  "command": "npx",
  "args": ["-y", "@modelcontextprotocol/server-ast-editor"],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 语法树感知的代码编辑
- **配置**: 无需额外配置

### 8. Filesystem (文件系统)
```json
"filesystem": {
  "command": "npx",
  "args": [
    "-y",
    "@modelcontextprotocol/server-filesystem",
    "/Users/username/Desktop",
    "/Users/username/Documents",
    "/Users/username/Downloads"
  ],
  "env": {
    "NODE_ENV": "production"
  }
}
```
- **功能**: 文件系统操作
- **配置**: 需要指定允许访问的目录路径

## 🔒 安全配置建议

### 1. 环境变量管理
- 使用 `.env` 文件管理敏感信息
- 不要在配置文件中硬编码 API 密钥
- 定期轮换 API 密钥

### 2. 文件系统访问
- 只授权必要的目录访问权限
- 避免授权系统关键目录
- 定期审查访问权限

### 3. 网络访问
- 配置防火墙规则
- 监控网络请求
- 使用 HTTPS 连接

## 📝 配置步骤

### 1. 复制模板
```bash
cp docs/references/mcp-config-template.json ~/.config/claude/claude_desktop_config.json
```

### 2. 修改配置
- 替换所有 `your-*-here` 占位符
- 更新文件路径为实际路径
- 配置必要的环境变量

### 3. 验证配置
- 重启 Claude Desktop
- 检查 MCP 服务器状态指示器
- 测试各项功能

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
