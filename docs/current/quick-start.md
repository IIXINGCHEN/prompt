# AxiomOS 快速入门指南

> **版本**: v20.2
> **更新日期**: 2025-01-19
> **目标读者**: 新用户、快速评估用户

---

## 🚀 5分钟快速上手

### 前置要求
- Claude Desktop (最新版本)
- Node.js 18+
- 基础的命令行操作知识

---

## 📋 快速步骤

### 1. 选择并激活协议

**推荐使用最新版本 v20.2**：

在 Claude Desktop 中输入以下指令：
```
请加载 AxiomOS v20.2 协议，并启动自检程序。
```

### 2. 配置 MCP 工具（可选但推荐）

复制统一配置文件：

**Windows**:
```cmd
copy "docs\references\mcp-unified-config.json" "%APPDATA%\Claude\claude_desktop_config.json"
```

**macOS/Linux**:
```bash
cp docs/references/mcp-unified-config.json ~/.config/claude/claude_desktop_config.json
```

设置环境变量（创建 `.env` 文件）：
```bash
CONTEXT7_API_KEY=your-api-key-here
```

### 3. 重启 Claude Desktop

重启应用以加载新的配置和协议。

### 4. 验证安装

在 Claude Desktop 中询问：
```
显示当前系统状态和诊断报告
```

应该看到类似以下的响应：
- ✅ AxiomOS v20.2 已加载
- ✅ 自我诊断通过
- ✅ 核心原则遵守度: PASS

---

## 🎯 基本使用模式

### 标准开发任务流程

1. **启动任务**: 直接描述您需要完成的任务
   ```
   我需要创建一个用户管理系统，包含注册、登录、个人资料管理功能
   ```

2. **遵循流程**: AxiomOS 会自动启动 SDM-RFC 六阶段工作流：
   - **Scope**: 需求对齐
   - **Architect**: 架构设计
   - **Atomize**: 任务分解
   - **Approve**: 等待您的确认
   - **Automate**: 生成代码
   - **Assess**: 质量验证

3. **提供反馈**: 在每个阶段提供必要的反馈和确认

---

## 🛠️ 常见任务示例

### 创建新项目
```
创建一个 Node.js + Express 的 REST API 项目，使用 MongoDB 作为数据库
```

### 代码审查
```
请审查以下代码的质量和安全性：[粘贴代码]
```

### 架构设计
```
设计一个微服务架构的电商系统，包含用户、商品、订单、支付服务
```

### 问题诊断
```
我的应用在高并发下出现性能问题，帮我分析和优化
```

---

## 🔧 故障排除

### 常见问题

**Q: 协议没有正确加载**
- 确保使用了正确的激活指令
- 检查网络连接
- 重启 Claude Desktop

**Q: MCP 工具无法工作**
- 验证配置文件路径是否正确
- 检查 Node.js 版本是否 >= 18
- 确认环境变量设置正确

**Q: 自我诊断失败**
- 检查是否使用了完整的激活指令
- 尝试重新激活协议
- 查看 Claude Desktop 的日志文件

### 获取帮助

1. **内置帮助**: 在 Claude Desktop 中询问 `显示帮助信息`
2. **详细文档**: 查看 [AxiomOS v20.2 完整文档](./axiom-os-v20.2-001.md)
3. **社区支持**: [GitHub Issues](https://github.com/IIXINGCHEN/prompt/issues)

---

## 📚 下一步

### 进阶学习
- 阅读 [完整协议文档](./axiom-os-v20.2-001.md)
- 了解 [MCP 工具配置](../references/mcp-config-guide.md)
- 探索 [Nexus OS v4.0](../protocols/nexus-protocol-v4.0.md)

### 最佳实践
- 始终提供清晰的上下文信息
- 在关键节点提供明确的确认
- 利用生成的测试用例验证代码质量
- 定期更新 MCP 工具配置

---

## 💡 专业技巧

1. **明确需求**: 在开始时提供尽可能详细的需求描述
2. **迭代改进**: 不要追求一次完美，采用迭代方式
3. **质量优先**: 利用内置的 11 类质量门禁确保代码质量
4. **文档驱动**: 让 AxiomOS 为您生成完整的技术文档

---

**🎉 恭喜！您已经掌握了 AxiomOS 的基本使用方法。**

现在可以开始您的第一个项目了！如有任何问题，请参考完整文档或社区支持。

---
*最后更新: 2025-01-19*