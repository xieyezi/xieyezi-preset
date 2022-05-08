// "off" 或 0 - 关闭规则
// "warn" 或 1 - 开启规则，并提示警告
// "error" 或 2 - 开启规则，直接提示错误

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
    browser: true,
    commonjs: true,
  },
  extends: ["plugin:vue/vue3-recommended", "@xieyezi/eslint-config-typescript"],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-undef": "off",
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  rules: {
    // off
    "vue/no-v-html": "off",
    "vue/html-self-closing": "off",
    "vue/require-default-prop": "off",
    "vue/attribute-hyphenation": "off",
    "vue/one-component-per-file": "off",
    "vue/max-attributes-per-line": "off",
    "vue/custom-event-name-casing": "off",
    "vue/multi-word-component-names": "off",
    "vue/html-closing-bracket-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    "vue/singleline-html-element-content-newline": "off",

    // warning
    "vue/attributes-order": "warn",
    "vue/require-prop-types": "warn",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",
    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  },
};
