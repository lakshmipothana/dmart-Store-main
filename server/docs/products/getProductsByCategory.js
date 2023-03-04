module.exports = {
  // method of operation
  get: {
    tags: ["Products"], // operation's tag.
    description: "Get products by Category", // operation's desc.
    summary: "Get all products by Category",
    operationId: "getProductsByCategory", // unique operation id.
    parameters: [
      {
        name: "category", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/category", // data model of the param
        },
        required: true, // Mandatory param
        description: "Product Category", // param desc.
      }
    ],
    // expected responses
    responses: {
      // response code
      200: {
        description: "Products obtained", // response desc.
        content: {
          // content-type
          "application/json": {
            schema: {
              type: "array",
              items: {
                $ref: "#/components/schemas/Product",
              },
            },
          },
        },
      },
      500: {
        description: "Internal server error", // response desc.
      },
    },
  },
};
