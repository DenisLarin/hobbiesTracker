module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 'off',
    'react-native/no-inline-styles': 'off',
    'require-jsdoc': [
      'warn',
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
  },
}
