module.exports = {
  create: function (context) {
    return {
      JSXAttribute: function (node) {
        if (node.name.name === 'dangerouslyInsertInnerHTML') {
          context.report({
            node: node,
            message: 'Use `dangerouslySetInnerHTML` instead of `dangerouslyInsertInnerHTML`.',
            fix: function (fixer) {
              return fixer.replaceText(node.name, 'dangerouslySetInnerHTML');
            },
          });
        }
      },
    };
  },
};
