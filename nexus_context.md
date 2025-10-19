# Nexus Context: AI Collaboration Protocol Framework
# 全局上下文：AI 协作协议框架

> **文档版本**: v1.0  
> **最后更新**: 2025-09-30  
> **维护者**: AxiomOS Team

---

## 📋 项目概述 (Project Overview)

### 核心使命 (Core Mission)
构建一个专为 AI 助手（特别是 Claude）设计的结构化协作协议和工作流程框架，旨在提升人机协作效率和代码质量。

### 项目特性 (Project Characteristics)
- **类型**: 开源文档框架项目
- **主语言**: Markdown + JSON配置
- **许可证**: MIT License
- **目标用户**: AI工程师、开发者、研究人员
- **技术栈**: Model Context Protocol (MCP), Claude Desktop

---

## 🏗️ 架构概览 (Architecture Overview)

### 核心协议系列 (Core Protocol Series)

#### 1. AxiomOS 系列 - 企业级认知引擎
- **v20.2** (🟢 最新) - 完整性协议增强版
  - 文件: `docs/current/axiom-os-v20.2-001.md`
  - 特性: 交付物完整性协议、Ultrathink增强、回归防止机制、L类质量门禁
  - 适用: 生产环境、企业级项目、高标准质量保障

- **v19.1** (🟡 维护) - 11大类质量门禁增强版
  - 文件: `docs/current/axiom-os-v19.1.md`
  - 特性: SFAM全自动模式、MTM微任务模式、指令增强模式
  - 适用: 企业级项目、AI代理开发、生产环境

- **v19.0** (🟡 维护) - 六大操作模式统一框架
  - 文件: `docs/current/axiom-os-v19.0.md`
  - 特性: 标准开发、审计优化、安全渗透、调试、审查、项目引导
  - 适用: 标准化开发流程、系统性项目管理

- **v18.5** (📦 归档) - 核心思维原则增强版
  - 文件: `docs/current/axiom-os-v18.5.md`
  - 历史版本: v18.3, v18.0, v17.x, v16.x, v15.0, v14.0 (均已归档)

#### 2. Nexus Protocol 系列 - 精英级自主任务执行
- **v4.0** (🚀 前沿) - Archon协议
  - 文件: `docs/protocols/nexus-protocol-v4.0.md`
  - 特性: RIPER+执行框架、MCP协同协议、OODA循环
  - 适用: 自主任务执行、精英AI代理

#### 3. 工作流协议 - 实用开发流程
- **TRAE 6A Workflow** - 六阶段认知工作流
  - 文件: `docs/workflows/trae-workflow-v6.md`
  - 阶段: Align → Architect → Atomize → Approve → Automate → Assess

---

## 📁 目录结构规范 (Directory Structure Standards)

```
prompt/
├── nexus_context.md          # 全局上下文（本文件）
├── README.md                  # 项目主文档
├── CHANGELOG.md               # 完整更新日志
├── CONTRIBUTING.md            # 贡献指南
├── LICENSE                    # MIT许可证
├── docs/                      # 📚 核心文档目录
│   ├── INDEX.md              # 文档导航索引
│   ├── README.md             # 文档目录说明
│   ├── current/              # 当前活跃版本
│   │   ├── axiom-os-v19.1.md
│   │   ├── axiom-os-v19.0.md
│   │   ├── VERSION_TRACKING.md
│   │   └── README.md
│   ├── archive/              # 历史版本存档
│   ├── protocols/            # 协议框架文档
│   ├── workflows/            # 工作流程文档
│   ├── guides/               # 用户指南
│   ├── references/           # MCP配置与工具参考
│   ├── examples/             # 实际应用示例
│   ├── internal/             # 内部开发文档
│   └── troubleshooting/      # 故障排除指南
└── scripts/                   # 自动化脚本
    └── validate-config.js    # 配置验证器
```

---

## 🎯 核心设计原则 (Core Design Principles)

### 1. 规范驱动开发 (Specification-Driven Development)
- **原则**: 严禁在没有明确设计规范前生成实现代码
- **流程**: RFC文档 → 设计评审 → 原子任务 → 实现验证

### 2. 生产级交付标准 (Production-Grade Standards)
- **11大类质量门禁** (AxiomOS v19.1):
  - A. 领域对齐 | B. 零信任安全 | C. 可靠性与弹性
  - D. 可观测性 | E. 可测试性 | F. 性能与效率
  - G. 可维护性 | H. 精确性与完整性 | I. 遵守既有模式
  - J. 简洁与聚焦 | K. 跨平台兼容性

### 3. 全局上下文核心 (Global Context Core)
- **单一事实来源**: `.arc/` 目录（项目级）或 `nexus_context.md`（框架级）
- **上下文同步协议**: 强制读取最新上下文后再执行任务

### 4. 自我诊断与质量保障 (Self-Diagnostic & Quality Assurance)
- **强制自我报告**: 每次响应前生成实时诊断报告
- **协议遵守度检查**: PASS/PENDING/FAIL三级评估

---

## 🔧 技术约束与规范 (Technical Constraints & Standards)

### 文件命名规范 (File Naming Convention)
```
格式: {category}-{name}-v{version}.{language}.md
示例: axiom-os-v19.1.md
     nexus-protocol-v4.0.md
     trae-workflow-v6.md
规则: kebab-case, 小写, 使用连字符
```

### 版本管理规范 (Version Management)
- **语义化版本**: v{major}.{minor}.{patch}
- **状态标记**:
  - 🟢 生产就绪 (Production-Ready)
  - 🟡 维护模式 (Maintenance)
  - 📦 已归档 (Archived)
  - ⚠️ 已废弃 (Deprecated)

### Markdown编写规范 (Markdown Standards)
- 编码: UTF-8 without BOM
- 换行: LF (`\n`)
- 标题: 按层级使用 `#` - `######`
- 代码块: 必须指定语言
- 链接: 优先使用相对路径
- 表格: 对齐使用管道符 `|`

---

## 🔐 安全与权限 (Security & Permissions)

### API密钥管理 (API Key Management)
- **存储**: `.env` 文件（已在 `.gitignore` 中排除）
- **原则**: 零信任安全架构
- **验证**: 所有外部输入必须严格验证和净化

### 依赖管理 (Dependency Management)
- **Node.js**: >= 18.0.0
- **MCP工具**: 参考 `docs/references/mcp-unified-config.json`
- **更新策略**: 定期检查安全更新

---

## 📖 MCP工具集成 (MCP Tools Integration)

### 核心工具清单 (Core Tools List)
1. **Desktop Commander** - 文件系统操作与进程管理
2. **Sequential Thinking** - 深度战略分析
3. **Context 7** - 库文档查询
4. **Chrome MCP Server** - 浏览器自动化
5. **Codebase MCP** - 代码库分析（RepoMix）
6. **Spec Workflow** - 规范工作流管理
7. **AST Aware Editor** - 代码语法树分析

### 配置文件位置 (Configuration File Location)
```
Windows: %APPDATA%\Claude\claude_desktop_config.json
macOS:   ~/.config/claude/claude_desktop_config.json
Linux:   ~/.config/claude/claude_desktop_config.json
```

---

## 🚀 快速开始指引 (Quick Start Guide)

### 新用户推荐路径 (Recommended Path for New Users)
1. 📖 阅读 [项目主README](README.md)
2. 🎯 选择协议版本: [axiom-os-v20.2-001.md](docs/current/axiom-os-v20.2-001.md)
3. ⚙️ 配置MCP工具: [mcp-config-guide.md](docs/references/mcp-config-guide.md)
4. ✅ 验证配置: `node scripts/validate-config.js`
5. 🎬 激活协议: 在Claude Desktop中输入激活指令

### 激活指令示例 (Activation Command Examples)
```
# AxiomOS v20.2 (推荐)
请加载 AxiomOS v20.2 协议，并启动自检程序。

# Nexus OS v4.0
启动 Nexus OS v4.0 Archon协议，开始精英级任务执行。
```

---

## 📚 关键文档快速索引 (Key Documents Quick Index)

### 核心协议 (Core Protocols)
- [AxiomOS v20.2 最新版](docs/current/axiom-os-v20.2-001.md) ⭐
- [AxiomOS v19.1 维护版](docs/current/axiom-os-v19.1.md)
- [AxiomOS v19.0 标准版](docs/current/axiom-os-v19.0.md)
- [Nexus Protocol v4.0](docs/protocols/nexus-protocol-v4.0.md)

### 配置与参考 (Configuration & References)
- [MCP统一配置](docs/references/mcp-unified-config.json)
- [MCP配置指南](docs/references/mcp-config-guide.md)
- [MCP工具参考](docs/references/mcp-tools-reference.md)

### 开发流程 (Development Workflows)
- [TRAE 6A工作流](docs/workflows/trae-workflow-v6.md)
- [版本迁移指南](docs/current/migration-guide.md)

### 支持资源 (Support Resources)
- [故障排除指南](docs/troubleshooting/README.md)
- [贡献指南](CONTRIBUTING.md)
- [完整文档索引](docs/INDEX.md)

---

## 🔄 持续演进策略 (Continuous Evolution Strategy)

### 版本发布周期 (Release Cycle)
- **Major版本**: 重大架构变更（半年-1年）
- **Minor版本**: 新功能添加（1-3个月）
- **Patch版本**: Bug修复和小幅改进（按需）

### 社区贡献流程 (Community Contribution Process)
1. Fork仓库 → 创建feature分支
2. 遵循[贡献指南](CONTRIBUTING.md)进行开发
3. 提交Pull Request并等待代码审查
4. 合并后自动触发文档更新

### 反馈渠道 (Feedback Channels)
- **Bug报告**: [GitHub Issues](https://github.com/IIXINGCHEN/prompt/issues)
- **功能请求**: [GitHub Discussions](https://github.com/IIXINGCHEN/prompt/discussions)
- **安全问题**: 私密联系维护者

---

## 📊 项目状态指标 (Project Status Metrics)

### 当前状态 (Current Status)
- **最新协议版本**: AxiomOS v20.2 (2025-01-19)
- **文档完整度**: 95%+
- **MCP工具集成**: 7个核心工具
- **支持语言**: 中文、英文
- **License**: MIT
- **活跃维护**: ✅ Yes

### 里程碑 (Milestones)
- ✅ v19.1 企业级质量门禁完成
- ✅ Nexus v4.0 Archon协议发布
- ✅ MCP工具完整集成
- 🚧 多语言文档扩展 (进行中)
- 📅 v20.0 路线图规划 (Q1 2025)

---

## 🔗 外部链接与资源 (External Links & Resources)

### 官方资源 (Official Resources)
- **GitHub仓库**: https://github.com/IIXINGCHEN/prompt
- **MCP官方文档**: https://modelcontextprotocol.io/
- **MCP服务器集合**: https://github.com/modelcontextprotocol/servers
- **Claude Desktop**: https://claude.ai/desktop

### 相关项目 (Related Projects)
- **RepoMix**: 代码库聚合工具
- **Tree-sitter**: 语法树解析器
- **Mermaid**: 图表生成工具

---

## 📝 维护日志 (Maintenance Log)

| 日期 | 版本 | 更新内容 | 维护者 |
|------|------|---------|--------|
| 2025-09-30 | v1.0 | 创建全局上下文文档 | AxiomOS Team |

---

**注意**: 本文档是项目的**单一事实来源 (Single Source of Truth)**，所有AI协作任务在执行前必须首先读取并同步此上下文。

---

**维护承诺**: 本文档将随项目演进持续更新，确保始终反映最新的架构决策、技术约束和最佳实践。
