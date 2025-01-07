export const executeSchema = {
  body: {
    type: "object",
    required: ["facts"],
    properties: {
      facts: {
        type: "object",
        required: ["age", "drivingExperience"],
        properties: {
          age: { type: "number" },
          drivingExperience: { type: "number" },
        },
      },
    },
  },
  response: {
    200: {
      type: "object",
      properties: {
        premium: { type: "number" },
      },
    },
  },
};
