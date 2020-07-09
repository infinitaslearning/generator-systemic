const System = require('systemic');
const initMetrics = require('systemic-azure-metrics');
const { join } = require('path');

module.exports = () =>
  new System({ name: '<%= name %>' })
    // metrics need initialising before systems related to connections start
    .add('metrics', initMetrics())
    .dependsOn('config')
    .bootstrap(join(__dirname, 'components'));

