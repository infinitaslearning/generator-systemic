const expressJSDocSwagger = require('express-jsdoc-swagger');

module.exports = () => {
  const start = async ({ manifest = {}, app, config }) => {
    const { swaggerOptions } = config;
    const expressSwagger = expressSwaggerGenerator(app);
    expressJSDocSwagger(app)(swaggerOptions);

    /**
     * GET /__/manifest
     * @summary This endpoint serves the manifest
     * @tags Admin - Everything about admin routes
     * @return {object} 200 - Sucessful response
    */
    app.get('/__/manifest', (req, res) => res.json(manifest));

    return Promise.resolve();
  };

  return { start };
};