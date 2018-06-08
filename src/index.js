const path = require('path');

class FractalModuleResolver {
    constructor(options) {
        this.options = options;
        this.fractal = this.options.fractal;
    }

    apply(resolver) {
        resolver.getHook('described-resolve').tapAsync('FractalModuleResolver', (request, resolveContext, callback) => {
            return this.fractal.components.load().then(() => {
                try {
                    const component = this.fractal.components.find(request.request);

                    if (component) {
                        const parsedPath = path.parse(component.viewPath);
                        const resolvedPath = path.resolve(parsedPath.dir, parsedPath.name);
                        const newRequest = {
                            ...request,
                            request: resolvedPath
                        };

                        return resolver.doResolve(resolver.ensureHook('resolve'), newRequest, `resolve ${request.request} to ${resolvedPath}`, resolveContext, callback);
                    } else {
                        return callback();
                    }
                } catch (e) {
                    return callback();
                }
            });
        });
    }
}

module.exports = FractalModuleResolver;
