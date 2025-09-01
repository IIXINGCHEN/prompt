# 贡献指南 (Contributing Guide)

感谢您对 AI 协作协议与工作流程框架项目的关注！我们欢迎所有形式的贡献。

## 🤝 如何贡献

### 报告问题 (Reporting Issues)

如果您发现了 bug 或有功能建议，请：

1. 检查 [Issues](https://github.com/IIXINGCHEN/prompt/issues) 确保问题未被报告
2. 使用清晰的标题和详细的描述创建新 issue
3. 包含复现步骤（如果是 bug）
4. 添加相关的标签

### 提交代码 (Submitting Code)

1. **Fork 仓库**
   ```bash
   git clone https://github.com/YOUR_USERNAME/prompt.git
   cd prompt
   ```

2. **创建特性分支**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **进行更改**
   - 遵循项目的编码规范
   - 添加必要的测试
   - 更新相关文档

4. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add your feature description"
   ```

5. **推送分支**
   ```bash
   git push origin feature/your-feature-name
   ```

6. **创建 Pull Request**
   - 使用清晰的标题和描述
   - 链接相关的 issues
   - 确保所有检查通过

## 📝 编码规范

### 文件命名
- 使用 kebab-case：`my-file-name.md`
- 版本号格式：`v1-0`, `v2-1-3`
- 语言后缀：`.zh.md`, `.en.md`

### 文档结构
```
docs/
├── configs/          # 系统配置文档
├── rules/           # 协议规则文档
├── workflows/       # 工作流程文档
├── references/      # 参考文档和配置
├── guides/          # 用户指南
└── internal/        # 内部文档
```

### Markdown 规范
- 使用标准的 Markdown 语法
- 代码块必须指定语言
- 链接使用相对路径
- 图片存放在 `docs/assets/` 目录

### 提交信息规范
使用 [Conventional Commits](https://www.conventionalcommits.org/) 格式：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

类型包括：
- `feat`: 新功能
- `fix`: 修复 bug
- `docs`: 文档更新
- `style`: 格式调整
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建过程或辅助工具的变动

## 🔍 代码审查

所有的 Pull Request 都需要经过代码审查：

1. **自动检查**
   - 文档格式检查
   - 链接有效性验证
   - 文件命名规范检查

2. **人工审查**
   - 内容质量和准确性
   - 与现有文档的一致性
   - 是否遵循项目规范

## 📋 发布流程

1. 更新版本号
2. 更新 CHANGELOG.md
3. 创建 release tag
4. 发布 GitHub Release

## 🆘 获取帮助

如果您在贡献过程中遇到问题：

1. 查看 [文档](docs/)
2. 搜索现有的 [Issues](https://github.com/IIXINGCHEN/prompt/issues)
3. 创建新的 issue 寻求帮助
4. 加入我们的讨论区

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT License](LICENSE) 下授权。

---

再次感谢您的贡献！🎉
