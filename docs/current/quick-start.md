# ⚡ AxiomOS 快速开始指南

> 5分钟快速上手 AxiomOS v15.0 - 卓越领域架构认知引擎

## 🎯 开始之前

**你将学会**：
- 在5分钟内配置并运行 AxiomOS
- 理解核心工作流程
- 执行第一个实际任务

**前置要求**：
- Claude Desktop 已安装
- Node.js 18+ 已安装
- 基本的命令行操作能力

## 📋 第1步：配置 MCP 工具 (2分钟)

### 1.1 复制配置文件
```bash
# Windows
copy "docs\references\mcp-unified-config.json" "%APPDATA%\Claude\claude_desktop_config.json"

# macOS/Linux  
cp docs/references/mcp-unified-config.json ~/.config/claude/claude_desktop_config.json
```

### 1.2 设置环境变量 (可选)
```bash
# 如果需要使用 Context7 工具
export CONTEXT7_API_KEY="your-api-key-here"
```

### 1.3 重启 Claude Desktop
重启应用以加载新配置。

## 🚀 第2步：激活 AxiomOS (1分钟)

在 Claude Desktop 中输入以下激活指令：

```
请加载 AxiomOS v15.0 协议，并启动自检程序。
```

你应该看到类似这样的响应：
```yaml
Self-Diagnostic Report:
  Date: 2025-01-22T10:45:32Z
  context_sync_status: "READY"
  CorePrinciplesAdherence: "ACTIVE"
```

## 💡 第3步：执行第一个任务 (2分钟)

### 示例任务：创建一个简单的项目架构

**输入**：
```
我需要设计一个用户管理系统的架构，包括用户注册、登录和权限管理功能。
```

**AxiomOS 将会**：
1. 🔍 **分析阶段** - 理解业务需求
2. 🏗️ **架构阶段** - 设计系统架构  
3. ⚡ **原子化阶段** - 分解为具体任务
4. ✅ **批准阶段** - 请求确认
5. 🛠️ **执行阶段** - 生成代码和文档
6. 📊 **评估阶段** - 质量检查

## 🎉 恭喜！你已经成功启动 AxiomOS

## 📚 下一步学习

### 🔧 深入配置
- [完整配置指南](../references/mcp-config-guide.md)
- [工具参考手册](../references/mcp-tools-reference.md)

### 📖 核心概念
- [AxiomOS v15.0 完整协议](axiom-os-v15.0.md)
- [工作流程详解](../workflows/)

### 🛠️ 实际应用
- [企业级项目示例](../examples/enterprise-project.md)
- [最佳实践集合](../examples/best-practices.md)