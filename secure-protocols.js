module.exports = {

    meta: {
        messages: {
          http: 'Use a secure protocol (https) instead of an insecure protocol (http).',
          ftp: 'Use a secure protocol (ftps) instead of an insecure protocol (ftp).',
        },
        fixable: "code",
        schema: []
      },
    create: function (context) {
      return {
        Literal: function (node) {
          if (typeof node.value === 'string') {
            if (node.value.startsWith('http:')) {
              context.report({
                node: node,
                messageId: 'http',
                fix: function (fixer) {
                  return fixer.replaceText(node, node.value.replace('http:', 'https:'));
                },
              });
            } else if (node.value.startsWith('ftp:')) {
              context.report({
                node: node,
                messageId: 'ftp',
                fix: function (fixer) {
                  return fixer.replaceText(node, node.value.replace('ftp:', 'ftps:'));
                },
              });
            }
          }
        },
      };
    },
  };
  
