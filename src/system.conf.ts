SystemJS.config({
  map: {
    '@angular/common': 'ng:common/bundles/common.umd.js',
    '@angular/compiler': 'ng:compiler/bundles/compiler.umd.js',
    '@angular/core': 'ng:core/bundles/core.umd.js',
    '@angular/platform-browser': 'ng:platform-browser/bundles/platform-browser.umd.js',
    '@angular/platform-browser-dynamic': 'ng:platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
    'app': 'app',
    'rxjs': 'npm:rxjs'
  },
  packages: {
    'app': {
      defaultExtension: 'js',
    },
    'rxjs': {
      defaultExtension: 'js',
    }
  },
  paths: {
    'ng:': 'npm:@angular/',
    'npm:': 'node_modules/',
  }
});
