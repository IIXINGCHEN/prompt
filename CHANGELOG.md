# 更新日志 (Changelog)

本文件记录了项目的所有重要变更。

格式基于 [Keep a Changelog](https://keepachangelog.com/zh-CN/1.0.0/)，
并且本项目遵循 [语义化版本](https://semver.org/lang/zh-CN/)。

## [Unreleased]

## [20.0.0] - 2025-09-30

### Added
- MCP工具生态集成 (Model Context Protocol Integration)
  - 新增第9节：工具集成与外部数据协议 (Tool Integration & External Data Protocol)
  - 9.1 Web搜索协议：自动搜索激活机制、引用协议
  - 9.2 引用协议：强制引用标记格式 `[cite:INDEX]`
  - 9.3 分析工具协议 (REPL)：数学计算、日志分析、算法验证
- Artifact交付协议增强 (Section 5.1)
  - 代码Artifact：`application/vnd.ant.code` 类型
  - 文档Artifact：`text/markdown` 类型
  - 可视化Artifact：`text/html`, `image/svg+xml`, `application/vnd.ant.mermaid` 类型
  - 强制要求所有重要交付物使用结构化Artifact格式
- 跨平台兼容性标准完善 (Section 5.K)
  - 文件编码：强制UTF-8无BOM
  - 换行符：强制LF格式
  - 文件路径：禁止硬编码路径分隔符
  - 大小写敏感：强制精确匹配
  - Shell脚本：POSIX兼容语法

### Changed
- 自我诊断报告格式优化 (Section 8)
  - 强制动态生成真实数据
  - 严禁占位符（如`[Dynamically Generated]`、`[Dynamically Retrieved]`）
  - 所有字段必须为实时真实值
- 生产级交付标准完善 (Section 5)
  - 更严格的代码质量要求
  - 零容忍占位符政策
  - 完整性和精确性要求提升

### Enhanced
- 工具调用能力大幅提升
  - 支持MCP服务器工具调用 (`use_mcp_tool`)
  - 支持MCP资源访问 (`access_mcp_resource`)
  - 集成context7文档检索
  - 集成sequentialthinking深度思考
- 外部数据源整合能力增强
  - Web搜索自动激活
  - 引用溯源机制
  - 知识库动态更新支持
- 合规与安全协议增强 (Section 1.1)
  - 版权尊重：禁止直接引用外部源
  - 有害内容规避：优先用户安全

### Security
- 零信任安全原则强化
  - 所有外部输入严格验证
  - 敏感数据通过密钥管理器注入
  - 安全日志结构化输出

## [19.1.0] - 2025-09-28

### Added
- 11大类生产级交付物标准（A到K的完整质量门禁）
  - K. 跨平台兼容性（文件编码、换行符、路径处理、大小写敏感、Shell脚本）
- 新增第6.0节：指令分诊协议 (Instruction Triage Protocol)
  - 智能路由机制：微任务、调试、审查、复杂开发、默认路由
- 新增第6.1节：监督式全自动模式 (SFAM - Supervised Full-Automation Mode)
  - 端到端开发效率最大化
  - 一次性集中决策机制
- 新增第6.8节：微任务模式 (MTM - Micro-Task Mode Protocol)
  - 三阶段快速执行：范围确认 → 自动化执行 → 交付
- 新增第6.9节：指令增强模式 (Instruction Enhancement Mode)
  - 元模式：用于优化用户指令本身
  - 隔离执行，暂停所有其他协议
- 新增第7.1节：会话状态管理协议 (Session State Management Protocol)
  - 状态序列化/反序列化机制
  - AxiomOS_Session_State XML块格式
  - 无损上下文会话延续

### Changed
- 重构第6.2节：标准开发模式升级为SDM-RFC协议
  - 更严格的质量门控流程
  - 契约化授权机制
- 升级第6.3节：审计模式为审计与优化模式
  - 多维度分析框架（空间、立体、逆向思维）
  - 强制性修复与验证标准
- 强化第6.4节：安全渗透模式为PENTEST-ADVANCED
  - 完整的威胁建模流程
  - 五阶段执行协议
- 重构第6.7节：项目引导模式
  - 新增部署兼容性守卫（.editorconfig, .gitattributes）
  - 跨平台一致性工具层强制执行
- 优化第8节：自我诊断与交互协议
  - 强制动态生成真实数据
  - 严禁占位符（如[动态生成]、[动态获取]等）
- 全面修正第1.2节：不可变身份协议
  - 明确要求动态获取底层模型真实名称
  - 移除可能引起混淆的身份声明

### Enhanced
- 新增英文版文档 `axiom-os-v19.1_en.md`
- 完整保留v19.0和v18.5的所有功能
- 文档格式一致性改进（标题层级、水平线分隔符）

## [19.0.0] - 2025-09-27

### Added
- 六大核心操作模式统一框架
- 新增第6.1节：标准开发模式 (Standard Development Mode - SDM)
  - 六阶段质量门控：Scope → Architect → Atomize → Approve → Automate → Assess
  - RFC文档驱动开发
- 新增第6.2节：审计与优化模式 (Audit & Optimization Mode)
  - 多维度代码审查框架
  - 强制性修复验证机制
- 新增第6.3节：安全渗透模式 (Security Penetration Mode)
  - PENTEST-ADVANCED执行协议
  - 五阶段威胁建模与攻击向量分析
  - 机构级安全渗透测试报告
- 新增第6.4节：调试模式 (Debug Mode)
  - 根因分析流程
  - 测试驱动修复
- 新增第6.5节：审查模式 (Review Mode)
  - 专业代码审查
  - 结构化审查报告
- 新增第6.6节：项目引导模式 (Project Onboarding Mode)
  - .arc目录初始化
  - 跨平台兼容性配置
- 新增第7.2节：Ultrathink协议
  - 深度战略分析
  - 四阶段思维框架（系统、辩证、批判、决策）
  - 自主专家模式与协作蓝图模式
- 新增第7.1节：上下文压缩与状态管理
  - AxiomOS_Session_State序列化机制

### Changed
- 重构核心操作模式体系
  - 统一六大模式入口
  - 明确模式触发条件和路由规则
- 升级自我诊断报告
  - 新增上下文同步状态字段
  - 新增上下文压缩状态字段
- 强化安全内核协议
  - 更严格的身份验证
  - 增强的注入攻击检测

### Enhanced
- 完整保留v18.5的所有核心功能
- 文档结构优化，模式化组织
- 质量门控标准提升

## [18.5.0] - 2025-09-26

### Added
- 新增核心思维原则 (Core Thinking Principles) - Section 3.1
  - 系统思维 (Systems Thinking)
  - 辩证思维 (Dialectical Thinking)
  - 创新思维 (Creative Thinking)
  - 批判思维 (Critical Thinking)
- 新增指令增强模式 (Instruction Enhancement Mode) - Section 6.6
  - 元模式协议，用于优化用户指令本身
  - 三阶段流程：分析、增强、执行

### Changed
- 审计模式重大升级：从 Audit & Repair Mode 改为 Audit & Optimization Mode
  - 新增三维分析框架：空间思维、立体思维、逆向思维
  - 增强的问题识别和优化能力
- 上下文压缩协议国际化支持
  - 新增多语言摘要结构选项
- Ultrathink 协议结构化增强
  - 更明确的思考模块分类

### Enhanced
- 生产标准更严格
  - 第89行：从"禁止占位符"升级为"禁止任何非生产代码"
  - 强调所有代码必须立即可部署
- 自我诊断报告增强
  - 新增思维模式状态追踪

## [18.3.0] - 2025-09-26

### Added
- 添加了 AxiomOS v18.3 - 安全内核增强版
- 核心启动加载程序与安全内核 (Core Bootloader & Security Kernel)
- 增强的指令边界定义和注入攻击检测
- 不可变身份协议
- Ultrathink 深度战略分析协议
- 新增 VERSION_TRACKING.md 版本追踪记录

### Fixed
- 修复了 v18.1 中的错误身份声明问题
- 更新了所有文档引用至最新版本

## [18.1.0] - 2025-09-26 [已废弃]

### Deprecated
- **警告**: 此版本包含错误的身份声明（错误地声称"由Google训练"）
- 请勿使用此版本，请直接使用 v18.3

## [18.0.0] - 2025-09-19

### Added
- 添加了 AxiomOS v18.0 - 统一核心指令框架
- 新增项目引导模式 (Project Onboarding Mode)
- 统一核心指令框架升级
- 完整的专家模式框架 (Expert Mode Framework)
- 新增 Nexus OS v4.0 Archon 协议精英级自主任务执行框架
- SDM 6A 协议 (6阶段标准开发流程)
- 完整的生产级交付物标准 (8大类)
- 零信任安全架构

### Changed
- 升级主推荐版本从 v17.2 到 v18.0
- 更新项目文档结构，添加 RIPER 协议系列

## [17.2.0] - 2025-09-10

### Added
- 添加了 AxiomOS v17.2 - 统一核心指令 (Unified Core Instructions)
- 添加了 AxiomOS v17.1 - 结构化指令 (Structured Instructions)
- 引入 SDM 6A 协议 (6阶段标准开发流程)
- 完整的专家模式框架 (Expert Mode Framework)
- 审计修复专家、安全渗透专家、规范与文档自动化专家

### Changed
- 升级主推荐版本从 v17.0 到 v17.2
- 更新所有文档引用到最新版本
- 优化协议版本管理，增加更多维护版本
- 重构快速开始指南，支持最新协议
- 更新示例文档使用最新版本协议

### Fixed
- 修复了版本引用不一致的问题
- 更新了项目结构描述以反映最新状态
- 统一了文档中的版本号引用

## [17.0.0] - 2025-01-22

### Added
- 添加了 AxiomOS v17.0 - 卓越领域架构认知引擎
- 完整的专家模式框架
- 认知核心机制与状态管理协议
- 零信任安全架构
- 生产级交付物标准

## [16.5.0] - 2025-01-22

### Added
- 添加了 AxiomOS v16.5 - 卓越领域架构认知引擎
- 增强的自我诊断报告系统
- 审计修复专家模式

## [14.0.0] - 2024-12-XX

### Added
- AxiomOS v14.0 - Dynamic Protocol & Generative Mandate
- 动态协议版本演进机制
- 生成式使命授权 (Generative Session Mandate)
- 认知自治领域架构师 (Cognitive & Autonomous Domain Architect)
- 首席领域架构师、预测性SRE及认知工程 swarm lead 三位一体身份
- 七大支柱运作体系
- ADAPT 工作流程（Align → Deconstruct → Architect → Prototype → Transmit）

### Changed
- 重大架构升级为动态协议框架
- 支持自适应学习和协议自我演进
- 增强业务成果驱动规范和预测性质量门控
- 优化为顶尖工程组织设计的认知架构师协议

## [13.2.0] - 2024-12-XX

### Added
- AxiomOS v13.2 - Production-Grade Hardening
- 生产级强化机制
- 增强的质量门控和安全机制

### Changed
- 专注于生产就绪的代码输出
- 强化企业级开发标准

## [12.0.0] - 2024-12-XX

### Added
- AxiomOS 统一协议 v12.0 - Keystone-Enforced
- 首席工程子系统 (Principal Engineering Subsystem)
- SEEP 安全工程与演进协议

### Changed
- 重大架构重构，统一所有协议为单一框架
- 专为企业级开发团队设计

## [11.0.0] - 2024-12-XX

### Added
- AxiomOS 系统协议 v11.0 - Conductor
- SEEP 实现协议
- 首席工程子系统架构

### Changed
- 全面重构的协议架构和工具集成
- 优化的交互协议和状态管理

---

## 历史版本 (已归档)

本项目已重构为企业级协议框架，历史版本已归档。如需查看完整历史记录，请参考 Git 提交历史。

---

## 版本说明

- **Major**: 重大架构变更或不兼容的 API 变更
- **Minor**: 新功能添加，向后兼容
- **Patch**: Bug 修复和小的改进

## 链接

- [Unreleased]: https://github.com/IIXINGCHEN/prompt/compare/v19.1.0...HEAD
- [19.1.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v19.1.0
- [19.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v19.0.0
- [18.5.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v18.5.0
- [18.3.0]: https://github.com/IIXINGCHEN/prompt/compare/v18.1.0...v18.3.0
- [18.1.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v18.1.0
- [18.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v18.0.0
- [17.2.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v17.2.0
- [17.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v17.0.0
- [16.5.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v16.5.0
- [14.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v14.0.0
- [13.2.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v13.2.0
- [12.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v12.0.0
- [11.0.0]: https://github.com/IIXINGCHEN/prompt/releases/tag/v11.0.0
