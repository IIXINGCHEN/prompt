# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is the **AxiomOS** framework repository - a comprehensive AI collaboration protocol and workflow framework designed specifically for AI assistants (particularly Claude). The project provides structured collaboration protocols, cognitive workflow frameworks, and MCP (Model Context Protocol) tool configurations to enhance human-AI collaboration efficiency and code quality.

## Key Components

### AxiomOS Protocol System
- **Current Version**: v20.2 (Integrity Protocol Enhancement) - Production Ready 🟢
- **Previous Versions**: v20.0 (MCP Tool Integration), v19.1 (Enterprise Quality Gates)
- **Alternative Protocol**: Nexus OS v4.0 (Archon Protocol for elite autonomous task execution)

### Core Architecture
- **SEEP Workflow**: 6A cognitive workflow (Align → Architect → Atomize → Approve → Act → Assess)
- **Ultrathink Framework**: Four-phase cognitive processing (Systems Thinking → Dialectical & Innovative → Critical Thinking → Decision Making)
- **Production Standards**: 11 categories of strict quality gates (A-K)
- **Context Management**: Global context synchronization through `.arc/` directory

## Common Commands

### Configuration Validation
```bash
# Validate MCP configuration
node scripts/validate-config.js

# Validate with custom config path
node scripts/validate-config.js path/to/config.json
```

### MCP Tool Setup
```bash
# Windows - Copy unified configuration
copy "docs\references\mcp-unified-config.json" "%APPDATA%\Claude\claude_desktop_config.json"

# macOS/Linux - Copy unified configuration
cp docs/references/mcp-unified-config.json ~/.config/claude/claude_desktop_config.json
```

### Protocol Activation
In Claude Desktop, use:
```
请加载 AxiomOS v20.2 协议，并启动自检程序。
```

Or for advanced autonomous execution:
```
启动 Nexus OS v4.0 Archon协议，开始精英级任务执行。
```

## Repository Structure

### Documentation Organization
- **`docs/current/`** - Active protocol versions (v20.2, v20.0, v19.1, etc.)
- **`docs/archive/`** - Historical versions for reference
- **`docs/protocols/`** - Protocol specifications (Nexus OS, RIPER, SEEP)
- **`docs/references/`** - MCP configurations and tool references
- **`docs/examples/`** - Practical implementation examples
- **`docs/guides/`** - User guides and optimization tutorials

### Key Files
- **`docs/current/axiom-os-v20.2-001.md`** - Latest production protocol
- **`docs/protocols/nexus-protocol-v4.0.md`** - Advanced autonomous execution protocol
- **`docs/references/mcp-unified-config.json`** - Complete MCP server configuration
- **`scripts/validate-config.js`** - Configuration validation utility

## Development Workflow

### Protocol Selection Guidelines
- **v20.2**: Use for production projects requiring integrity protocols and regression prevention
- **v20.0**: Use for projects with heavy MCP tool integration needs
- **Nexus OS v4.0**: Use for advanced autonomous task execution scenarios

### Quality Standards
All code generation must meet 11 categories of production-grade standards:
- **A. Domain Alignment**: Map to `.arc/` domain model
- **B. Zero-Trust Security**: Deny-by-default endpoints
- **C. Reliability**: Idempotent operations with error handling
- **D. Observability**: Structured logging and metrics
- **E. Testability**: >95% test coverage, test-first development
- **F. Performance**: Efficient algorithms and database patterns
- **G. Maintainability**: SOLID principles, English code/comments
- **H. Precision**: No placeholder or mock code
- **I. Pattern Consistency**: Follow existing architectural patterns
- **J. Scoped Changes**: Limit modifications to task scope
- **K. Cross-Platform**: UTF-8, LF line endings, platform-agnostic paths

### Operating Modes
The framework supports multiple specialized modes:
- **SDM-RFC**: Standard development with 6-phase workflow
- **SFAM**: Supervised full-automation for complete project generation
- **Audit & Optimization**: Comprehensive code review and improvement
- **Debug**: Systematic bug diagnosis and fixing
- **Security Penetration**: Adversarial security analysis
- **Micro-Task**: Focused execution of well-scoped minor tasks

## MCP Tool Integration

### Required Environment Variables
- `CONTEXT7_API_KEY`: For library documentation queries
- Optional: `AST_SERVER_PATH`: For AST-aware editor functionality

### Core MCP Servers
- **sequential-thinking**: Complex problem analysis
- **context7**: Library documentation and API assistance
- **desktop-commander**: File system operations
- **deepwiki**: Deep knowledge base queries
- **chrome-mcp-server**: Browser automation
- **codebase-mcp**: Codebase analysis and retrieval
- **ast-aware-editor**: AST-aware code editing

## Context Management

### Global Context Protocol
- The `.arc/` directory serves as the single source of truth
- Context synchronization is required before background-knowledge tasks
- Use `CONTEXT_REQUEST` XML blocks to request necessary information

### Session State Management
- Session state can be serialized/deserialized for continuity
- Use `AxiomOS_Session_State` XML blocks for state persistence

## File Standards

### Naming Conventions
- **Version documents**: `{name}-v{major}.{minor}.md`
- **Protocol documents**: `{protocol}-protocol-v{version}.md`
- **Workflow documents**: `{workflow}-workflow-v{version}.md`

### Status Indicators
- ✅ **Current** - Recommended latest version
- 🟢 **Production Ready** - Stable for production use
- 🟡 **Maintenance** - Supported but not recommended for new projects
- 📦 **Archived** - Reference only, no longer maintained
- ⚠️ **Deprecated** - Contains known issues, avoid usage

## Important Notes

- This is a protocol and documentation repository - no traditional build/test processes
- Content is primarily in Chinese with code elements in English
- All protocols emphasize security, quality, and production readiness
- The framework is designed for AI-assisted development workflows
- Version tracking follows semantic versioning with clear deprecation paths