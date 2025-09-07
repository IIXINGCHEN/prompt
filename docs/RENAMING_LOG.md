# 文件重命名日志

## 📋 重命名概述

为了提升项目的专业性和规范性，我们对 docs 目录下的所有文件进行了重命名，采用统一的命名规范。

## 🎯 命名规范

### 格式标准
- **基本格式**: `{category}-{name}-{version}.{language}.md`
- **分隔符**: 统一使用连字符 (-)
- **大小写**: 全部小写
- **版本号**: 使用 v 前缀，如 v1.0, v3.7.2
- **语言标识**: zh (中文), en (英文)

### 类别定义
- **axiom-os**: AxiomOS 系统配置
- **claude-protocol**: Claude 协作协议
- **trae-workflow**: TRAE 工作流程
- **cognitive-copilot-protocol**: 认知副驾协议

## 📝 重命名记录

### configs/ 目录
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `axiom-os-v1.0.md` | `axiom-os-v1.0.zh.md` | 添加语言标识 |
| `axiom-os-v3.7.2.md` | `axiom-os-v3.7.2.zh.md` | 添加语言标识 |
| `axiom-os-6.1-en.md` | `axiom-os-v6.1.en.md` | 规范版本号格式 |
| `axiom-os-6.1-zh.md` | `axiom-os-v6.1.zh.md` | 规范版本号格式 |
| `claude.md` | `claude-protocol-v1.0.en.md` | 规范化命名和版本 |
| `claude-cn.md` | `claude-protocol-v1.0.zh.md` | 规范化命名和版本 |
| `claude-cn-2.0.md` | `claude-protocol-v2.0.zh.md` | 规范化命名和版本 |
| `python2-CLAUDE.md` | `claude-python-integration.zh.md` | 规范化命名和大小写 |

### rules/ 目录
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `oovs.6.3_en.md` | `cognitive-copilot-protocol-v6.3.en.md` | 规范化命名和分隔符 |
| `oovs.6.3_zh.md` | `cognitive-copilot-protocol-v6.3.zh.md` | 规范化命名和分隔符 |

### workflows/ 目录
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `trae-workflow-6a.md` | `trae-workflow-v6a.zh.md` | 规范版本号和添加语言标识 |
| `trae-workflow-7a.md` | `trae-workflow-v7a.zh.md` | 规范版本号和添加语言标识 |
| `trae-workflow-7a-v2.md` | `trae-workflow-v7a-v2.zh.md` | 添加语言标识 |

### RIPER/ 目录 (2024-12-XX 新增)
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `001.md` | `riper-protocol-v2.1.md` | 规范化命名，添加版本和协议类型 |
| `002.md` | `nexus-protocol-v3.0.md` | 规范化命名，添加版本和协议类型 |
| - | `axiom-os-integration-v4.0.md` | 新创建的 AxiomOS 集成协议 |

### user/ 目录 (2024-12-XX 新增)
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `001.md` | `user-guide-v1.md` | 规范化命名，添加描述性名称和版本 |
| `002.md` | `user-guide-v2.md` | 规范化命名，添加描述性名称和版本 |

### guides/ 目录 (2024-12-XX 新增)
| 原文件名 | 新文件名 | 说明 |
|---------|---------|------|
| `user-prompt-01.md` | `user-prompt-guide-v1.md` | 规范化命名，统一版本格式 |
| `user-prompt-02.md` | `user-prompt-guide-v2.md` | 规范化命名，统一版本格式 |

## ✅ 重命名效果

### 改进点
1. **一致性**: 所有文件名现在遵循统一的命名规范
2. **可读性**: 文件名更加清晰，易于理解和查找
3. **国际化**: 明确区分中英文版本
4. **版本管理**: 统一的版本号格式便于版本控制
5. **专业性**: 符合企业级文档管理标准

### 目录结构（重命名后）
```
docs/
├── configs/
│   ├── axiom-os-v1.0.zh.md
│   ├── axiom-os-v3.7.2.zh.md
│   ├── axiom-os-v6.1.en.md
│   ├── axiom-os-v6.1.zh.md
│   ├── claude-protocol-v1.0.en.md
│   ├── claude-protocol-v1.0.zh.md
│   ├── claude-protocol-v2.0.zh.md
│   └── claude-python-integration.zh.md
├── rules/
│   ├── cognitive-copilot-protocol-v6.3.en.md
│   └── cognitive-copilot-protocol-v6.3.zh.md
├── workflows/
│   ├── trae-workflow-v6a.zh.md
│   ├── trae-workflow-v7a.zh.md
│   └── trae-workflow-v7a-v2.zh.md
└── references/
    ├── mcp-tools-reference.md
    ├── mcp-config-template.json
    └── mcp-config-guide.md
```

## 📚 相关更新

以下文件已同步更新以反映新的文件名：
- `docs/README.md` - 更新了目录结构和文件说明
- `README.md` - 更新了项目结构说明
- 内部链接和引用（如有）

## 🔄 后续维护

为保持命名规范的一致性，请在添加新文档时遵循以下原则：
1. 使用已定义的类别前缀
2. 遵循版本号格式规范
3. 明确标识文档语言
4. 使用连字符作为分隔符
5. 保持全小写命名

---

**重命名完成时间**: 2025-01-27  
**执行者**: AI Assistant  
**影响范围**: docs/ 目录下所有配置、规则和工作流程文档
