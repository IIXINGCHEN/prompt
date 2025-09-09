#!/usr/bin/env node

/**
 * AxiomOS MCP 配置验证器
 * 验证 MCP 配置文件的完整性和正确性
 */

const fs = require('fs');
const path = require('path');

class MCPConfigValidator {
  constructor() {
    this.errors = [];
    this.warnings = [];
  }

  validateConfig(configPath) {
    console.log(`🔍 验证配置文件: ${configPath}`);
    
    try {
      // 检查文件是否存在
      if (!fs.existsSync(configPath)) {
        this.errors.push(`配置文件不存在: ${configPath}`);
        return false;
      }

      // 解析 JSON
      const configContent = fs.readFileSync(configPath, 'utf8');
      const config = JSON.parse(configContent);

      // 验证基本结构
      this.validateStructure(config);
      
      // 验证服务器配置
      this.validateServers(config.mcpServers || {});
      
      // 验证环境变量
      this.validateEnvironment(config);

      return this.errors.length === 0;
    } catch (error) {
      this.errors.push(`解析配置文件失败: ${error.message}`);
      return false;
    }
  }  validateStructure(config) {
    if (!config.mcpServers) {
      this.errors.push('缺少 mcpServers 配置');
    }
    
    if (config.version && !this.isValidVersion(config.version)) {
      this.warnings.push('版本号格式不标准');
    }
  }

  validateServers(servers) {
    const requiredServers = [
      'sequential-thinking',
      'context7', 
      'desktop-commander',
      'deepwiki',
      'codebase-mcp'
    ];

    for (const serverName of requiredServers) {
      if (!servers[serverName]) {
        this.warnings.push(`推荐的服务器未配置: ${serverName}`);
      }
    }

    for (const [name, config] of Object.entries(servers)) {
      this.validateServerConfig(name, config);
    }
  }

  validateServerConfig(name, config) {
    if (!config.command) {
      this.errors.push(`服务器 ${name} 缺少 command 配置`);
    }

    if (!config.args || !Array.isArray(config.args)) {
      this.errors.push(`服务器 ${name} 缺少或格式错误的 args 配置`);
    }

    if (config.env && typeof config.env !== 'object') {
      this.errors.push(`服务器 ${name} 的 env 配置格式错误`);
    }
  }

  validateEnvironment(config) {
    // 检查必需的环境变量
    const requiredEnvVars = this.extractRequiredEnvVars(config);
    
    for (const envVar of requiredEnvVars) {
      if (!process.env[envVar] && !envVar.includes('${')) {
        this.warnings.push(`环境变量未设置: ${envVar}`);
      }
    }
  }

  extractRequiredEnvVars(config) {
    const envVars = [];
    const servers = config.mcpServers || {};
    
    for (const [name, serverConfig] of Object.entries(servers)) {
      if (serverConfig.required_env) {
        envVars.push(...serverConfig.required_env);
      }
    }
    
    return envVars;
  }

  isValidVersion(version) {
    return /^\d+\.\d+\.\d+$/.test(version);
  }

  printResults() {
    console.log('\n📊 验证结果:');
    
    if (this.errors.length > 0) {
      console.log('\n❌ 错误:');
      this.errors.forEach(error => console.log(`  - ${error}`));
    }
    
    if (this.warnings.length > 0) {
      console.log('\n⚠️  警告:');
      this.warnings.forEach(warning => console.log(`  - ${warning}`));
    }
    
    if (this.errors.length === 0 && this.warnings.length === 0) {
      console.log('✅ 配置文件验证通过！');
    }
    
    return this.errors.length === 0;
  }
}

// 主执行逻辑
if (require.main === module) {
  const configPath = process.argv[2] || 
    path.join(__dirname, '..', 'docs', 'references', 'mcp-unified-config.json');
  
  const validator = new MCPConfigValidator();
  const isValid = validator.validateConfig(configPath);
  validator.printResults();
  
  process.exit(isValid ? 0 : 1);
}

module.exports = MCPConfigValidator;