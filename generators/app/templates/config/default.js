module.exports = {
	server: {
		host: '0.0.0.0',
		port: 4000,
	},
	routes: {
		admin: {
			swaggerOptions: {
        info: {
          description: 'Documentation for <%= name %>',
          title: '<%= name %>',
          version: '1.0.0',
          contact: {
            name: 'Contact name',
            email: 'contact email',
          },
        },
        servers: [],
        security: {
          JWT: {
            type: 'apiKey',
            in: 'header',
            name: 'Authorization',
          },
        },
        baseDir: process.cwd(),
        swaggerUIPath: '/docs/api',
        filesPattern: './**/**-routes.js',
      },
		},
	},
	metrics: {
		key: process.env.APPINSIGHTS_INSTRUMENTATIONKEY,
		internalLogging: false,
		context: {
			tags: {
				'ai.cloud.role': process.env.npm_package_name,
				'ai.cloud.roleInstance': process.env.HOSTNAME || 'local',
			},
		},
		autoCollect: {
			requests: true,
			performance: true,
			exceptions: true,
			dependencies: true,
			console: false,
		},
	},
	logger: {
		transport: 'console',
		include: [
			'tracer',
			'timestamp',
			'level',
			'message',
			'error.message',
			'error.code',
			'error.stack',
			'request.url',
			'request.headers',
			'request.params',
			'request.method',
			'response.statusCode',
			'response.headers',
			'response.time',
			'process',
			'system',
			'package.name',
			'service',
		],
		exclude: ['password', 'secret', 'token', 'request.headers.cookie', 'dependencies', 'devDependencies'],
	},
};
