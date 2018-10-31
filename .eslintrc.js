module.exports = {
  "extends": "airbnb-base",
  "globals": {
    $: true,
    "window": true,
    "document": true
  },
  "plugins": [
    "import"
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
