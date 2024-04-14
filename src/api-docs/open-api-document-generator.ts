import {
	OpenApiGeneratorV3,
	OpenAPIRegistry
} from '@asteasolutions/zod-to-openapi'

import { userRegistry } from '@/api/user/user-api.doc'

export function generateOpenAPIDocument() {
	const registry = new OpenAPIRegistry([userRegistry])
	const generator = new OpenApiGeneratorV3(registry.definitions)

	return generator.generateDocument({
		openapi: '3.0.0',
		info: {
			version: '1.0.0',
			title: 'Swagger API'
		},
		externalDocs: {
			description: 'View the raw OpenAPI Specification in JSON format',
			url: '/swagger.json'
		}
	})
}