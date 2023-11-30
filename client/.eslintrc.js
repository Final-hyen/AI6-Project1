module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: [
    "airbnb-base",
    "plugin:prettier/recommended",
    "plugin:react/recommended",
  ],
  rules: {
    endOfLine: "auto", // 엔드라인 시퀀스 자동
    "react/jsx-filename-extenstion": [1, { extensions: [".js", ".jsx"] }],
    "no-var": "error", //var 금지
    "no-console": "off", //console.log() 금지
  },
};
