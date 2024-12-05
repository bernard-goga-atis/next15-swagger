import { createSwaggerSpec } from 'next-swagger-doc';

import 'server-only';

export const getApiDocs = async () => {
  const spec = createSwaggerSpec({
    apiFolder: 'app/api',
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Next Swagger API Example',
            version: '1.0',
        },
        components: {
            securitySchemes: {
                BearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT',
                },
            },
            schemas: {
                postData: {
                    type: "object",
                    properties: {
                        id: {
                            type: "integer",
                            format: "int64",
                            example: 10
                        },
                        price: {
                            type: "string",
                            description: "The price selected",
                            example: "10$"
                        },
                        title: {
                            type: "string",
                            description: "The title of the tier",
                            example: "Tier 1"
                        }
                    },
                    xml: {
                        name: "postdata"
                    }
                },
                postDataResponse: {
                    type: "object",
                    properties: {
                        status: {
                            type: "string"
                        },
                        request: {
                            type: "object",
                            properties: {
                                id: {
                                    type: "integer",
                                    format: "int64",
                                    example: 10
                                },
                                price: {
                                    type: "string",
                                    description: "The price selected",
                                    example: "10$"
                                },
                                title: {
                                    type: "string",
                                    description: "The title of the tier",
                                    example: "Tier 1"
                                }
                            }
                        },
                    },
                    xml: {
                        name: "postdata"
                    }
                },
            },
        },
        security: [],
    },
  });
  return spec;
};