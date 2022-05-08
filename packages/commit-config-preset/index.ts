// https://github.com/leoforfree/cz-customizable/blob/master/cz-config-EXAMPLE.js

module.exports = {
  types: [
    { value: "feat", name: "feat: 一个新的特性" },
    { value: "fix", name: "fix: 修复一个Bug" },
    { value: "docs", name: "docs: 变更文档" },
    { value: "style", name: "style: 代码格式修复" },
    { value: "refactor", name: "refactor: 代码重构" },
    { value: "perf", name: "perf: 提升性能" },
    { value: "test", name: "test: 添加一个测试" },
    { value: "revert", name: "revert: 代码回退" },
    { value: "chore", name: "chore: 配置文件变动" }
  ],
  messages: {
    type: "选择一种你的提交类型:",
    customScope: "请输入修改范围(可选):",
    subject: "短说明:",
    body: '长说明，使用"|"换行(可选)：',
    footer: "关联关闭的issue，例如：#31, #34(可选):",
    confirmCommit: "确定提交说明?"
  },
  allowCustomScopes: true,
  allowBreakingChanges: ["feat", "fix"],
  subjectLimit: 100
};
