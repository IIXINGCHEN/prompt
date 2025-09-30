# 🔧 故障排除指南

---

本目录包含 AxiomOS 使用过程中常见问题的解决方案。

## 📋 问题分类

### 🚀 启动和配置问题
- [MCP工具连接失败](mcp-connection-issues.md)
- [配置文件格式错误](config-format-errors.md)
- [环境变量设置问题](environment-variables.md)

### ⚙️ 运行时问题
- [协议执行异常](protocol-execution-errors.md)
- [工具调用失败](tool-invocation-failures.md)
- [性能问题诊断](performance-issues.md)

### 🔒 安全相关问题
- [权限配置错误](permission-errors.md)
- [API密钥问题](api-key-issues.md)
- [网络连接问题](network-connectivity.md)

## 🆘 快速诊断

### 第1步：检查基础环境
```bash
# 检查 Node.js 版本
node --version  # 应该 >= 18.0.0

# 检查 Claude Desktop 状态
# 查看 MCP 服务器指示器是否为绿色

# 验证配置文件
node scripts/validate-config.js
```

### 第2步：查看日志
```bash
# Windows
type "%APPDATA%\Claude\logs\mcp*.log"

# macOS/Linux
cat ~/Library/Logs/Claude/mcp*.log
```

### 第3步：重置配置
如果问题持续，尝试重置到默认配置：
```bash
cp docs/references/mcp-unified-config.json ~/.config/claude/claude_desktop_config.json
```

## 📞 获取帮助

---

如果以上方法无法解决问题：

1. **搜索已知问题**: 查看 [GitHub Issues](https://github.com/IIXINGCHEN/prompt/issues)
2. **提交新问题**: 使用问题模板创建详细的问题报告
3. **社区讨论**: 参与 [Discussions](https://github.com/IIXINGCHEN/prompt/discussions)

---

**最后更新**: 2025-01-22