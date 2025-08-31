# 文档目录

本目录包含 AI 协作协议与工作流程框架的所有配置文档、工作流程文档和参考资料。

## 📁 目录结构

```
docs/
├── configs/                                    # 系统配置文档
│   ├── axiom-os-v1.0.zh.md                   # AxiomOS 版本 1.0 配置（基础版本）
│   ├── axiom-os-v3.7.2.zh.md                 # AxiomOS 版本 3.7.2 配置（最新版本）
│   ├── axiom-os-v6.1.en.md                   # AxiomOS 版本 6.1 配置（英文版）
│   ├── axiom-os-v6.1.zh.md                   # AxiomOS 版本 6.1 配置（中文版）
│   ├── claude-protocol-v1.0.en.md            # Claude 协议 v1.0（英文版）
│   ├── claude-protocol-v1.0.zh.md            # Claude 协议 v1.0（中文版）
│   ├── claude-protocol-v2.0.zh.md            # Claude 协议 v2.0（中文版）
│   └── claude-python-integration.zh.md       # Claude Python 集成指南
├── rules/                                      # 协议规则文档
│   ├── cognitive-copilot-protocol-v6.3.en.md # 认知副驾协作协议 v6.3（英文版）
│   ├── cognitive-copilot-protocol-v6.3.zh.md # 认知副驾协作协议 v6.3（中文版）
│   ├── cognitive-copilot-protocol-v7.3.zh.md # 认知副驾协作协议 v7.3（中文版）
│   ├── cognitive-copilot-protocol-v8.0.zh.md # 认知副驾协作协议 v8.0（中文版）
│   ├── cognitive-copilot-protocol-v8.1.zh.md # 认知副驾协作协议 v8.1（中文版）
│   ├── cognitive-copilot-protocol-v9.0.zh.md # AxiomOS Cognitive Co-pilot 协议 v9.0（中文版）
│   ├── cognitive-copilot-protocol-v9.1.zh.md # AxiomOS Cognitive Co-pilot 协议 v9.1（中文版）
│   └── cognitive-copilot-protocol-v9.2.zh.md # AxiomOS Cognitive Co-pilot Protocol v9.2（中文版，最新版本）
├── workflows/                                  # 工作流程文档
│   ├── trae-workflow-v6a.zh.md               # TRAE 6A 工作流实践
│   ├── trae-workflow-v7a.zh.md               # TRAE 7A 认知工作流
│   └── trae-workflow-v7a-v2.zh.md            # TRAE 7A 认知工作流 v2.0
├── references/                                 # 参考文档
│   ├── mcp-tools-reference.md                # MCP 工具参考手册
│   ├── mcp-config-template.json              # MCP 配置文件模板
│   ├── mcp-config-guide.md                   # MCP 配置指南
│   └── mcp.json                              # MCP 服务器配置文件
├── README.md                                   # 本文件
└── RENAMING_LOG.md                             # 文件重命名日志
```

## 📋 文档说明

### 配置文档 (configs/)
- **axiom-os-v1.0.zh.md** - AxiomOS 系统版本 1.0 的完整配置文档（基础版本，包含核心协议和工作流）
- **axiom-os-v3.7.2.zh.md** - AxiomOS 系统版本 3.7.2 的完整配置文档（最新版本，优化蓝图协议和质量门控）
- **axiom-os-v6.1.en.md** - AxiomOS 版本 6.1 配置文档（英文版）
- **axiom-os-v6.1.zh.md** - AxiomOS 版本 6.1 配置文档（中文版）
- **claude-protocol-v1.0.en.md** - Claude 协作协议 v1.0（英文版）
- **claude-protocol-v1.0.zh.md** - Claude 协作协议 v1.0（中文版）
- **claude-protocol-v2.0.zh.md** - Claude 协作协议 v2.0（中文版）
- **claude-python-integration.zh.md** - Claude Python 集成指南

### 协议规则文档 (rules/)
- **cognitive-copilot-protocol-v6.3.en.md** - Claude 4 Sonnet 认知副驾协作协议 v6.3（英文版）
- **cognitive-copilot-protocol-v6.3.zh.md** - Claude 4 Sonnet 认知副驾协作协议 v6.3（中文版）
- **cognitive-copilot-protocol-v7.3.zh.md** - Claude 4 Sonnet 认知副驾协作协议 v7.3（中文版）
- **cognitive-copilot-protocol-v8.0.zh.md** - Claude 4 Sonnet 认知副驾协作协议 v8.0（中文版）
- **cognitive-copilot-protocol-v8.1.zh.md** - Claude 4 Sonnet 认知副驾协作协议 v8.1（中文版）
- **cognitive-copilot-protocol-v9.0.zh.md** - AxiomOS Cognitive Co-pilot 协议 v9.0（中文版）
- **cognitive-copilot-protocol-v9.1.zh.md** - AxiomOS Cognitive Co-pilot 协议 v9.1（中文版）
- **cognitive-copilot-protocol-v9.2.zh.md** - AxiomOS Cognitive Co-pilot Protocol v9.2（中文版，最新版本）

### 工作流程文档 (workflows/)
- **trae-workflow-v6a.zh.md** - TRAE 6A 工作流配置与实践经验（适合中等复杂度任务）
- **trae-workflow-v7a.zh.md** - TRAE 7A 认知工作流程（适合复杂系统开发任务）
- **trae-workflow-v7a-v2.zh.md** - TRAE 7A 认知工作流程 v2.0（优化版本）

### 参考文档 (references/)
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
- **v9.2** - AxiomOS Cognitive Co-pilot Protocol，最新版本（推荐）

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
