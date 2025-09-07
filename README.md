# AI 协作协议与工作流程框架

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/IIXINGCHEN/prompt.svg)](https://github.com/IIXINGCHEN/prompt/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/IIXINGCHEN/prompt.svg)](https://github.com/IIXINGCHEN/prompt/network)

一个专为 AI 助手（特别是 Claude）设计的结构化协作协议和工作流程框架，旨在提升人机协作效率和代码质量。

## 🎯 项目概述

本项目提供了一套完整的 AI 协作框架，包括：

- **AxiomOS 系统配置** - 多版本的 AI 协作协议配置文档
- **TRAE 工作流程** - 7A 认知工作流程的实践指南
- **MCP 工具集成** - Model Context Protocol 工具的配置和使用指南

## 🚀 核心特性

### 📋 AxiomOS 协作协议
- **最新版本**: v14.0 Dynamic Protocol & Generative Mandate
- **动态协议**: 支持自适应学习和协议版本演进
- **生成式使命**: 动态生成任务导向的使命授权
- **企业级**: 专为顶尖工程组织设计的认知架构师协议

### 🔄 SEEP 工作流程
- **6A 工作流**: Align → Architect → Atomize → Approve → Act → Assess
- **SEEP 协议**: 安全工程与演进协议 (Secure Engineering & Evolution Protocol)
- **任务分解**: 将复杂任务分解为可执行的原子任务
- **文档驱动**: 每个阶段都有对应的文档产出

### 🧠 AxiomOS 动态协议
- **v11.0**: Conductor - 系统协议与SEEP实现
- **v12.0**: Keystone-Enforced - 统一协议
- **v13.2**: Production-Grade Hardening - 生产级强化
- **v14.0**: Dynamic Protocol & Generative Mandate（推荐）
- **认知架构师**: 首席领域架构师与预测性SRE混合体

### 🛠️ MCP 工具集成
- **完整工具清单**: 涵盖分析、任务管理、知识查询等多个领域
- **配置模板**: 提供开箱即用的配置文件模板
- **服务器配置**: 实际可用的MCP服务器配置文件
- **安全指南**: 详细的安全配置建议和故障排除指南

### 🎯 协议优化指南
- **prompt.md**: AI协议架构师优化指南，提供协议设计和优化的专业建议
- **结构化方法**: 系统性的协议优化流程和最佳实践
- **质量提升**: 帮助构建更高效、智能的AI协作框架

## 📁 项目结构

```
prompt/
├── docs/                                       # 文档目录
│   ├── configs/                                # 系统配置文档
│   │   ├── axiom-os-v1.0.zh.md                # AxiomOS 版本 1.0 配置（基础版本）
│   │   ├── claude-protocol-v2.0.zh.md         # Claude 协议 v2.0（中文版）
│   │   └── claude-python-integration.zh.md    # Claude Python 集成指南
│   ├── rules/                                  # 协议规则文档
│   │   ├── cognitive-copilot-protocol-v11.0.md  # AxiomOS 系统协议 v11.0 - Conductor
│   │   ├── cognitive-copilot-protocol-v12.0.md  # AxiomOS 统一协议 v12.0 - Keystone
│   │   ├── cognitive-copilot-protocol-v13.2.md  # AxiomOS v13.2 - Production-Grade Hardening
│   │   └── cognitive-copilot-protocol-v14.0.md  # AxiomOS v14.0 - Dynamic Protocol（最新版本）
│   ├── workflows/                              # 工作流程文档
│   │   ├── trae-workflow-v6a.zh.md            # TRAE 6A 工作流
│   │   └── trae-workflow-v7a-v3.md            # SEEP 安全工程与演进协议 v3.0
│   ├── references/                             # 参考文档和配置
│   │   ├── mcp-tools-reference.md             # MCP 工具参考手册
│   │   ├── mcp-config-template.json           # MCP 配置文件模板
│   │   ├── mcp-config-guide.md                # MCP 配置指南
│   │   └── mcp.json                           # MCP 服务器配置文件
│   ├── guides/                                 # 用户指南
│   │   └── user-prompt-guide.md               # 用户提示词指南
│   ├── internal/                               # 内部文档
│   │   ├── prompt-optimization-guide.md       # Prompt 优化指南
│   │   └── protocol-architect-guide.md        # 协议架构师指南
│   ├── README.md                               # 文档目录说明
│   └── RENAMING_LOG.md                         # 文件重命名日志
├── .gitignore                                  # Git 忽略文件
├── CHANGELOG.md                                # 更新日志
├── CONTRIBUTING.md                             # 贡献指南
├── LICENSE                                     # MIT 许可证
└── README.md                                   # 项目说明（本文件）
```

## 🔧 快速开始

### 1. 选择协议版本

根据您的需求选择合适的协议版本：

**AxiomOS 动态协议系列**：
- **v11.0**: Conductor - 系统协议与SEEP实现协议
- **v12.0**: Keystone-Enforced - 统一协议
- **v13.2**: Production-Grade Hardening - 生产级强化协议
- **v14.0**: Dynamic Protocol & Generative Mandate - 动态协议（推荐）

**核心特性**：
- **动态协议**: 支持自适应学习和版本演进
- **生成式使命**: 动态生成任务导向的使命授权
- **认知架构师**: 首席领域架构师与预测性SRE混合体
- **ADAPT 工作流**: Align → Deconstruct → Architect → Prototype → Transmit

### 2. 配置 MCP 工具

1. 复制配置模板：
```bash
cp docs/references/mcp-config-template.json ~/.config/claude/claude_desktop_config.json
```

2. 根据 [MCP 配置指南](docs/references/mcp-config-guide.md) 修改配置

3. 重启 Claude Desktop 并验证配置

### 3. 应用工作流程

选择适合的工作流程：

- **6A 工作流**: 六阶段工作流程（Align → Architect → Atomize → Approve → Act → Assess）
- **SEEP v3.0**: 安全工程与演进协议，专为企业级开发设计

## 📖 使用指南

### 协议配置

1. **选择版本**: 根据项目复杂度选择合适的 AxiomOS 版本
2. **自定义配置**: 根据项目特点调整协议参数
3. **团队对齐**: 确保团队成员理解并遵循协议

### 工作流程执行

1. **启动流程**: 使用 `[AXIOM::WORKFLOW::SEEP]` 启动安全工程协议
2. **阶段执行**: 按照 SEEP 流程依次执行各个阶段
3. **质量门控**: 每个阶段都要通过相应的质量检查

### MCP 工具使用

1. **工具配置**: 按照配置指南设置 MCP 工具
2. **功能调用**: 通过 `T.MCP.{ToolName}` 格式调用工具
3. **故障排除**: 参考故障排除指南解决问题

## 🤝 贡献指南

我们欢迎社区贡献！请遵循以下规范：

1. **命名规范**: 使用 kebab-case 命名格式
2. **文档结构**: 将文档放置在对应的功能目录下
3. **更新说明**: 修改文档时同步更新相关的 README 文件
4. **格式统一**: 确保文档内容完整且格式统一

### 提交流程

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🔗 相关链接

- [MCP 官方文档](https://modelcontextprotocol.io/)
- [MCP 服务器集合](https://github.com/modelcontextprotocol/servers)
- [Claude Desktop](https://claude.ai/desktop)

## 📞 联系方式

如有问题或建议，请通过以下方式联系：

- 创建 [Issue](https://github.com/IIXINGCHEN/prompt/issues)
- 提交 [Pull Request](https://github.com/IIXINGCHEN/prompt/pulls)

---

⭐ 如果这个项目对您有帮助，请给我们一个 Star！
