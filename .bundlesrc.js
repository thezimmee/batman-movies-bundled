module.exports = {
  bundles: [
    {
      id: 'index',
      input: ['src/index.html'],
      bundlers: [
        {
          run: '@bundles/bundles-output',
          options: {
            to: 'dist',
            root: 'src/',
            incremental: false
          }
        }
      ]
    }
  ]
}
