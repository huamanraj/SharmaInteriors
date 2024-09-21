module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser for TypeScript
  extends: [
    'next/core-web-vitals',
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    'react/no-unescaped-entities': 'off',
    // Add more custom rules if needed
  },
};
