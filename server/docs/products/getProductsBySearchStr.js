module.exports = {
  // method of operation
  get: {
    tags: ["Products"], // operation's tag.
    description: "Get products by Search String", // operation's desc.
    summary: "Get all products by Search String",
    operationId: "getProductsBySearchStr", // unique operation id.
    parameters: [
      {
        name: "searchStr", // name of the param
        in: "path", // location of the param
        schema: {
          $ref: "#/components/schemas/searchStr", // data model of the param
        },
        required: true, // Mandatory param
        description: "Search String", // param desc.
      }
    ], // expected params.
    // expected responses
    // expected responses
    responses: {
      // response code
      200: {
        description: "Products obtained By Search String", // response desc.
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
