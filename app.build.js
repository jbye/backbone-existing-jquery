({
  baseUrl: './app/js',
  mainConfigFile: 'app/js/main.js',
  name: 'main',
  optimizeCss: 'standard',
  out: 'dist/app.min.js',
  paths: {
    requirejs: 'vendor/requirejs/require'
  },
  include: ['requirejs']
})