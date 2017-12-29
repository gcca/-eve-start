SystemJS.config({
  map: Object.assign([
    'animations',
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
  ].reduce((map, module) => Object.assign(map, {
    [`@angular/${module}`]: `ng:${module}/bundles/${module}.umd.js`,
  }), {}), {
    'app': 'app',
    'rxjs': 'npm:rxjs',
  }),
  packages: [
    'app',
    'rxjs',
  ].reduce((packages, module) => Object.assign(packages, {
    [module]: {
      defaultExtension: 'js',
    }
  }), {}),
  paths: {
    'ng:': 'npm:@angular/',
    'npm:': 'node_modules/',
  },
});
