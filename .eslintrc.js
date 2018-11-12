module.exports = {
  "root": true,
  extends: ["plugin:vue/essential", "@vue/prettier"],
  "globals": {
    $: true,
    "window": true,
    "document": true
  },
  "plugins": ["import", "html"],
  "rules": {
    "no-console": "off",
    "import/newline-after-import": "off",
    "global-require": "off",
    "no-undef": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "no-multi-assign": "off",
    "import/no-dynamic-require": "off",
    "prefer-destructuring": "off",
    "no-alert": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-unused-vars": 0,
    "max-len": 0
  },
};
