# MCP 工具参考手册

本文档列出了 AxiomOS 系统中使用的所有 Model Context Protocol (MCP) 工具及其官方仓库信息。

## 📋 工具清单

### 核心交互工具

#### 1. T.MCP.Interaction
- **工具名称**: 寸止
- **功能**: 与用户进行交互、请求确认和收集反馈
- **心智模型**: 对话伙伴 (Dialogue Partner)
- **官方仓库**: *内置工具，无独立仓库*
- **说明**: 系统内置的交互机制

#### 2. T.MCP.Analysis  
- **工具名称**: sequential-thinking
- **功能**: 复杂问题分析、深度思考和制定策略
- **心智模型**: 白板推演 (Whiteboarding Session)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: MCP 官方服务器集合中的思维链工具

### 任务管理工具

#### 3. T.MCP.TaskManager
- **工具名称**: mcp-shrimp-task-manager
- **功能**: 拆分复杂任务、管理子任务依赖关系并生成执行计划
- **心智模型**: JIRA Ticket 分解 (JIRA Breakdown)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 任务管理和项目规划工具

### 知识查询工具

#### 4. T.MCP.ContextQuery
- **工具名称**: context7-mcp
- **功能**: 查询最新的库文档、API示例和项目内部的符号定义
- **心智模型**: IDE 智能提示 (IDE IntelliSense)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 上下文感知的代码查询工具

#### 5. T.MCP.KnowledgeQuery
- **工具名称**: deepwiki-mcp
- **功能**: 获取通用背景知识、领域概念或技术最佳实践
- **心智模型**: 技术书籍/文档库 (Technical Library)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 深度知识库查询工具

### 网络访问工具

#### 6. T.MCP.WebAccess
- **工具名称**: chrome-mcp-server
- **功能**: 与Chrome浏览器交互，实现网页访问、内容提取和自动化操作
- **心智模型**: 自动化研究助理 (Automated Research Assistant)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: Chrome 浏览器自动化工具

### 代码处理工具

#### 7. T.MCP.CodeRetrieval
- **工具名称**: codebase-retrieval
- **功能**: 分析现有代码的结构、依赖关系和控制流
- **心智模型**: 代码静态分析器 (Static Code Analyzer)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 代码库分析和检索工具

#### 8. T.MCP.CodeEditor
- **工具名称**: ast-aware-editor
- **功能**: 对文件进行精确的、结构感知的代码修改、插入和删除
- **心智模型**: 带重构工具的智能编辑器 (Smart Editor with Refactoring Tools)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 抽象语法树感知的代码编辑器

### 系统操作工具

#### 9. T.MCP.FileSystem
- **工具名称**: desktop-commander
- **功能**: 执行系统文件操作(读、写、创建、删除)和执行命令行指令
- **心智模型**: 集成终端 (Integrated Terminal)
- **官方仓库**: https://github.com/modelcontextprotocol/servers
- **说明**: 桌面文件系统操作工具

## 🔗 相关资源

### MCP 官方资源
- **MCP 规范**: https://spec.modelcontextprotocol.io/
- **MCP 官方文档**: https://modelcontextprotocol.io/
- **MCP 服务器集合**: https://github.com/modelcontextprotocol/servers
- **MCP Python SDK**: https://github.com/modelcontextprotocol/python-sdk
- **MCP TypeScript SDK**: https://github.com/modelcontextprotocol/typescript-sdk

### 社区资源
- **MCP 社区**: https://github.com/modelcontextprotocol/community
- **示例项目**: https://github.com/modelcontextprotocol/examples
- **最佳实践**: https://modelcontextprotocol.io/docs/best-practices

## 📝 使用说明

1. **工具调用**: 在 AxiomOS 系统中，这些工具通过 `T.MCP.{ToolName}` 的格式进行引用
2. **配置要求**: 确保相应的 MCP 服务器已正确安装和配置
3. **版本兼容**: 建议使用最新版本的 MCP 工具以获得最佳性能和功能

## 🔄 更新日志

- **2025-01-22**: 初始版本，提取自 AxiomOS v3.5 和 v3.7.2 配置文档
