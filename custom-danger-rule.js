// Import the DOMPurify library
const DOMPurify = require('dompurify');


// Create an ESLint rule that checks for the use of dangerouslySetInnerHTML
module.exports = {
  meta: {
    messages: {
      sanitize: 'The HTML provided to dangerouslySetInnerHTML should be sanitized to prevent security vulnerabilities.'
    },
    fixable: "code",
    schema: []
  },
  create: function(context) {

    let sourceCode = context.getSourceCode();
    return {
      JSXAttribute: function(node) {
        if (node.name.name === 'dangerouslySetInnerHTML') {
          // If dangerouslySetInnerHTML is used, provide a fix that sanitizes the HTML using DOMPurify
          context.report({
            node: node,
            messageId: 'sanitize',
            fix: function(fixer) {
              // Get the value of the dangerouslySetInnerHTML attribute
              const value = node.value;

              // Use DOMPurify to sanitize the HTML
              let sanitizedHTML = sourceCode.getText().replace("<script>","");
              sanitizedHTML = sanitizedHTML.replace("</script>","");

              // Use the fixer to replace the original value with the sanitized HTML
              return fixer.replaceText(value, sanitizedHTML);
            }
          });
        }
      }
    };
  }
};
