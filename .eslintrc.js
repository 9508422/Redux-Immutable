module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "parser": "babel-eslint",
    "env": {
      "browser": true,
      "node": true
    },
    "rules": {
      "react/no-did-mount-set-state": "off",
    }
};
