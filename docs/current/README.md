# 当前版本协议 (Current Protocols)

本目录包含 AxiomOS 的当前活跃版本，建议优先使用。

## 🚀 推荐版本

### AxiomOS v20.2 - 完整性协议增强版 ⭐
- **文件**: `axiom-os-v20.2-001.md`
- **发布日期**: 2025-01-05
- **特性**:
  - 新增交付物完整性协议（Deliverable Integrity Protocol）
  - 增强的通用认知框架（Ultrathink）
  - 回归防止机制（L类质量门禁）
  - 严格的在位修改原则
  - 临时工件排除协议
  - 保留v20.0所有功能并优化
- **状态**: 🟢 最新版本
- **推荐用途**: 生产环境、企业级项目、高标准质量保障

### AxiomOS v20.0 - MCP工具生态集成版
- **文件**: `axiom-os-v20.md`  
- **发布日期**: 2025-09-30
- **特性**:
  - 完整MCP工具生态集成
  - Artifact交付协议增强
  - 工具调用能力优化
  - 跨平台兼容性标准(K类)
  - 保留v19.1所有功能
- **状态**: 🟡 维护模式
- **推荐用途**: 标准开发项目、MCP工具集成

### AxiomOS v19.1 - 11大类质量门禁增强版
- **文件**: `axiom-os-v19.1.md` (中文) | `axiom-os-v19.1_en.md` (English)
- **发布日期**: 2025-09-28
- **特性**: 11大类质量门禁(A-K)、SFAM模式、MTM模式、指令增强
- **状态**: 📦 已归档
- **推荐用途**: 历史参考

### AxiomOS v19.0 - 六大操作模式统一框架
- **文件**: `axiom-os-v19.0.md`
- **发布日期**: 2025-09-27
- **特性**: 六大核心操作模式、Ultrathink协议
- **状态**: 📦 已归档
- **推荐用途**: 历史参考

### AxiomOS v18.5 - 核心思维原则增强版
- **文件**: `axiom-os-v18.5.md`
- **发布日期**: 2025-09-26
- **特性**:
  - 新增核心思维原则 (Core Thinking Principles) - Section 3.1
  - 升级审计模式：从 Audit & Repair 到 Audit & Optimization
  - 新增指令增强模式 (Instruction Enhancement Mode) - Section 6.6
  - 多维度分析框架：空间思维、立体思维、逆向思维
  - 上下文压缩协议国际化支持
  - Ultrathink协议结构化增强
  - 生产标准更严格（禁止任何非生产代码）
  - 保留v18.3的所有功能
- **状态**: 📦 已归档
- **推荐用途**: 历史参考

### AxiomOS v18.3 - 安全内核增强版
- **文件**: `axiom-os-v18.3.md`
- **发布日期**: 2025-09-26
- **特性**:
  - 核心启动加载程序与安全内核 (Core Bootloader & Security Kernel)
  - 增强的指令边界定义和注入攻击检测
  - 不可变身份协议
  - 强制性自我诊断与交互协议升级
  - Ultrathink 深度战略分析协议
  - 完整保留v18.0的所有功能
  - 修复了v18.1中的身份声明错误
- **状态**: 📦 已归档
- **推荐用途**: 历史参考

### AxiomOS v18.1 - 过渡版本 ⚠️
- **文件**: `axiom-os-v18.1.md`
- **发布日期**: 2025-09-26
- **问题**: 包含错误的身份声明（声称"由Google训练"）
- **状态**: ⚠️ 已废弃 - 请勿使用
- **说明**: 此版本包含严重错误，已被v18.3取代

### AxiomOS v18.0 - 统一核心指令框架
- **文件**: 已移至 [`../archive/axiom-os-v18.0.md`](../archive/axiom-os-v18.0.md)
- **状态**: 📦 已归档

### AxiomOS v17.2 - 统一核心指令
- **文件**: 已移至 [`../archive/axiom-os-v17.2.md`](../archive/axiom-os-v17.2.md)
- **状态**: 📦 已归档

### AxiomOS v17.1 - 结构化指令
- **文件**: 已移至 [`../archive/axiom-os-v17.1.md`](../archive/axiom-os-v17.1.md)
- **状态**: 📦 已归档

### AxiomOS v17.0 - 卓越领域架构认知引擎
- **文件**: 已移至 [`../archive/axiom-os-v17.0.md`](../archive/axiom-os-v17.0.md)
- **状态**: 📦 已归档

### AxiomOS v16.x 系列 - 卓越领域架构认知引擎
- **文件**: 已移至 [`../archive/`](../archive/)
- **包含版本**: v16.5, v16.1, v16.0
- **状态**: 📦 已归档

### AxiomOS v15.0 - 卓越领域架构认知引擎
- **文件**: 已移至 [`../archive/axiom-os-v15.0.md`](../archive/axiom-os-v15.0.md)
- **状态**: 📦 已归档

### AxiomOS v14.0 - Dynamic Protocol & Generative Mandate
- **文件**: 已移至 [`../archive/axiom-os-v14.0.md`](../archive/axiom-os-v14.0.md)
- **状态**: 📦 已归档

## 📖 快速开始

1. **新用户**: 建议直接阅读 `axiom-os-v20.2-001.md`
2. **现有用户**: 如需从旧��升级，请查看 [迁移指南](./migration-guide.md)
3. **快速上手**: 查看 [快速入门指南](./quick-start.md)

## 🔧 配置要求

- **MCP工具**: 参考 [../references/mcp-config-guide.md](../references/mcp-config-guide.md)
- **环境要求**: Node.js 18+, Claude Desktop
- **依赖工具**: 详见各协议文档

## 📋 版本选择指南

| 项目类型 | 推荐版本 | 理由 |
|---------|---------|------|
| 企业级系统 | v20.2 | 最完整的协议与质量保障 |
| 生产环境 | v20.2 | 最严格的生产级标准 |
| MCP集成 | v20.2 | 完整MCP工具生态支持 |
| 学习研究 | v20.2 | 最新特性和最佳实践 |
| 旧项目迁移 | v20.2 | 向后兼容，提供迁移指南 |

## 🆘 获取帮助

- **文档问题**: 查看 [故障排除指南](../troubleshooting/)
- **配置问题**: 参考 [MCP配置指南](../references/mcp-config-guide.md)
- **功能建议**: 提交 [GitHub Issue](https://github.com/IIXINGCHEN/prompt/issues)

---

**最后更新**: 2025-01-05
**维护者**: AxiomOS Team
