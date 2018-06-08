# Fractal Module Resolver Webpack Plugin

A Webpack resolver plugin that resolves component imports through Fractal API.

Requires Webpack 4.x.x.

## Installation
```
npm install @gotoandplay/fractal-module-resolver-webpack-plugin --save-dev
```

## Usage
Require the plugin in your Webpack configuration file:
```
const FractalModuleResolver = require('@gotoandplay/fractal-module-resolver-webpack-plugin');
```

Add the plugin to your resolve plugins array:
```
resolve: {
    plugins: [
        // resolve fractal component imports automatically
        new FractalModuleResolver({
            fractal: fractal,
        }),
    ],
}
```

Pass it your Fractal instance as an option.
