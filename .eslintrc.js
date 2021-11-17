module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    semi: 'off',
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
