module.exports = {
  "root": true,
  "extends": "airbnb-base",
  "globals": {
    $: true,
    "window": true,
    "document": true
  },
  env: {
    browser: true,
  },
  "plugins": [
    "import",
    "html"
  ],
  "rules": {
    "no-console": "off",
    "import/newline-after-import": "off",
    "global-require": "off",
    "import/no-unresolved": "off",
    "no-param-reassign": "off",
    "no-shadow": "off",
    "import/extensions": "off",
    "no-multi-assign": "off",
    "no-alert": "off",
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": true
      }
    ],
    "no-unused-vars": 0,
    "max-len": 0
  }
};
