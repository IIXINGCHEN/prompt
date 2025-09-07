# 文档目录

本目录包含 AxiomOS 动态协议框架的所有配置文档、执行协议、工作流程文档和参考资料。

## 📁 目录结构

```
docs/
├── configs/                                    # 系统配置文档
│   ├── axiom-os-v1.0.zh.md                   # AxiomOS 版本 1.0 配置（基础版本）
│   ├── claude-protocol-v2.0.zh.md            # Claude 协议 v2.0（中文版）
│   └── claude-python-integration.zh.md       # Claude Python 集成指南
├── guides/                                     # 用户指南文档
│   ├── user-prompt-guide-v1.md              # 用户提示指南 v1
│   ├── user-prompt-guide-v2.md              # 用户提示指南 v2
│   └── user-prompt-guide.md                  # 用户提示完整指南
├── internal/                                   # 内部开发文档
│   ├── prompt-optimization-guide.md          # 提示优化指南
│   └── protocol-architect-guide.md           # 协议架构师指南
├── references/                                 # 参考文档和配置
│   ├── mcp-tools-reference.md                # MCP 工具参考手册
│   ├── mcp-config-template.json              # MCP 配置文件模板
│   ├── mcp-config-guide.md                   # MCP 配置指南
│   └── mcp.json                              # MCP 服务器配置文件
├── RIPER/                                      # RIPER 执行框架协议
│   ├── riper-protocol-v2.1.md               # AGENT-OS v2.1 - RIPER+ Protocol
│   ├── nexus-protocol-v3.0.md               # AGENT-OS v3.0 - Nexus Protocol
│   ├── nexus-protocol-v3.6.md               # AGENT-OS v3.6 - Nexus Protocol Enhanced
│   └── axiom-os-integration-v4.0.md         # AGENT-OS v4.0 - AxiomOS Integration（最新版本）
├── rules/                                      # 协议规则文档
│   ├── cognitive-copilot-protocol-v11.0.md   # AxiomOS 系统协议 v11.0 - Conductor
│   ├── cognitive-copilot-protocol-v12.0.md   # AxiomOS 统一协议 v12.0 - Keystone
│   ├── cognitive-copilot-protocol-v13.2.md   # AxiomOS v13.2 - Production-Grade Hardening
│   └── cognitive-copilot-protocol-v14.0.md   # AxiomOS v14.0 - Dynamic Protocol（最新版本）
├── user/                                       # 用户相关文档
│   ├── user-guide-v1.md                     # 用户文档 v1
│   └── user-guide-v2.md                     # 用户文档 v2
├── workflows/                                  # 工作流程文档
│   ├── trae-workflow-v6.md                   # TRAE 6A 工作流配置
│   ├── trae-workflow-v7-v3.md               # TRAE 7A 工作流 v3
│   └── trae-workflow-v7-v4.md               # TRAE 7A 工作流 v4（最新版本）
├── README.md                                   # 本文件
└── RENAMING_LOG.md                             # 文件重命名日志
```

## 📋 文档说明

### 🔧 配置文档 (configs/)
- **axiom-os-v1.0.zh.md** - AxiomOS 系统版本 1.0 的完整配置文档（基础版本）
- **claude-protocol-v2.0.zh.md** - Claude 协作协议 v2.0（中文版）
- **claude-python-integration.zh.md** - Claude Python 集成指南

### 📚 用户指南 (guides/)
- **user-prompt-guide-v1.md** - 用户提示指南 v1
- **user-prompt-guide-v2.md** - 用户提示指南 v2
- **user-prompt-guide.md** - 用户提示完整指南

### 🔒 内部文档 (internal/)
- **prompt-optimization-guide.md** - 提示优化指南
- **protocol-architect-guide.md** - 协议架构师指南

### 🚀 RIPER 执行框架 (RIPER/)
- **riper-protocol-v2.1.md** - AGENT-OS v2.1: RIPER+ Protocol for Elite Task Execution
- **nexus-protocol-v3.0.md** - AGENT-OS v3.0: Nexus Protocol for Elite Autonomous Task Execution
- **nexus-protocol-v3.6.md** - AGENT-OS v3.6: Nexus Protocol Enhanced
- **axiom-os-integration-v4.0.md** - AGENT-OS v4.0: AxiomOS Integration Protocol（最新版本，推荐）

### 🧠 协议规则文档 (rules/)
- **cognitive-copilot-protocol-v11.0.md** - AxiomOS 系统协议 v11.0 - Conductor
- **cognitive-copilot-protocol-v12.0.md** - AxiomOS 统一协议 v12.0 - Keystone
- **cognitive-copilot-protocol-v13.2.md** - AxiomOS v13.2 - Production-Grade Hardening
- **cognitive-copilot-protocol-v14.0.md** - AxiomOS v14.0 - Dynamic Protocol（最新版本，推荐）

### 👤 用户文档 (user/)
- **user-guide-v1.md** - 用户文档 v1
- **user-guide-v2.md** - 用户文档 v2

### 🔄 工作流程文档 (workflows/)
- **trae-workflow-v6.md** - TRAE 6A 工作流配置（适合中等复杂度任务）
- **trae-workflow-v7-v3.md** - TRAE 7A 工作流 v3（适合复杂系统开发任务）
- **trae-workflow-v7-v4.md** - TRAE 7A 工作流 v4（最新版本，推荐）

### 📖 参考文档 (references/)
- **mcp-tools-reference.md** - MCP 工具参考手册：包含所有 Model Context Protocol 工具的详细信息和官方仓库链接
- **mcp-config-template.json** - MCP 配置文件模板：完整的 JSON 格式配置文件，包含所有工具配置
- **mcp-config-guide.md** - MCP 配置指南：详细的配置说明、安全建议和故障排除指南
- **mcp.json** - MCP 服务器配置文件：实际可用的服务器配置示例

## 🔄 版本管理

### AxiomOS 配置文档版本历史
- **v1.0** - 基础版本，包含核心协议和基础工作流程
- **v3.5** - 增强版本，添加了更多 MCP 工具集成和优化
- **v3.7.2** - 最新版本，优化了蓝图协议和质量门控机制
- **v6.1** - 英文版本，支持国际化使用
- **v6.3** - 认知副驾协作协议，专注于人机协作优化
- **v7.3** - 认知副驾协作协议增强版，优化协作流程
- **v8.0** - 认知副驾协作协议重大更新，增强智能化程度
- **v8.1** - 认知副驾协作协议，完善功能和性能
- **v9.0** - AxiomOS Cognitive Co-pilot 协议，全面重构版本
- **v9.1** - AxiomOS Cognitive Co-pilot 协议，优化版本
- **v9.2** - AxiomOS Cognitive Co-pilot Protocol，稳定版本
- **v11.0** - AxiomOS 系统协议，Conductor 代号版本
- **v12.0** - AxiomOS 统一协议，Keystone-Enforced 版本
- **v13.2** - AxiomOS Production-Grade Hardening，生产级强化版本
- **v14.0** - AxiomOS Dynamic Protocol & Generative Mandate，动态协议版本（推荐）

### TRAE 工作流程版本
- **6A 工作流** - 六阶段工作流程（Align → Architect → Atomize → Approve → Act → Assess）
- **7A 工作流** - 七阶段认知工作流程（Context → Specify → Architect → Atomize → Approve → Act → Assess）
- **7A v2.0** - 优化版本，增强了质量门控和文档驱动机制

### 文档规范
- 所有文档遵循 kebab-case 命名规范
- 版本号采用语义化版本控制
- 配置文档包含完整的变更日志

## 📝 贡献指南

添加新文档时请遵循以下规范：

1. **命名规范**: 使用 kebab-case 命名格式
2. **目录结构**: 将文档放置在对应的功能目录下
3. **文档更新**: 修改文档时同步更新相关的 README 文件
4. **格式统一**: 确保文档内容完整且格式统一
5. **版本管理**: 重大更新时创建新版本文档

### 文档模板

每个新文档应包含：
- 清晰的标题和版本信息
- 详细的功能说明
- 配置示例和使用指南
- 相关链接和参考资料

## 🔗 快速导航

- **新手入门**: 建议从 [AxiomOS v3.7.2](configs/axiom-os-v3.7.2.zh.md) 开始
- **工作流程**: 查看 [TRAE 7A 工作流 v2.0](workflows/trae-workflow-v7a-v2.zh.md)
- **工具配置**: 参考 [MCP 配置指南](references/mcp-config-guide.md)
- **问题排查**: 查看 [MCP 工具参考手册](references/mcp-tools-reference.md)

## 📋 文件命名规范

本项目采用以下专业文件命名规范：

### 命名格式
- **基本格式**: `{category}-{name}-{version}.{language}.md`
- **分隔符**: 统一使用连字符 (-)
- **大小写**: 全部小写
- **版本号**: 使用 v 前缀，如 v1.0, v3.7.2
- **语言标识**: zh (中文), en (英文)

### 示例
- `axiom-os-v3.7.2.zh.md` - AxiomOS 版本 3.7.2 中文配置
- `trae-workflow-v7a.zh.md` - TRAE 7A 工作流中文文档
- `cognitive-copilot-protocol-v6.3.en.md` - 认知副驾协议英文版

### 类别说明
- **axiom-os**: AxiomOS 系统配置
- **claude-protocol**: Claude 协作协议
- **trae-workflow**: TRAE 工作流程
- **cognitive-copilot-protocol**: 认知副驾协议
- **mcp**: Model Context Protocol 相关
