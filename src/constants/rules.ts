export const premiumRule = {
  conditions: {
    all: [
      {
        fact: "age",
        operator: "greaterThanInclusive",
        value: 25,
      },
      {
        fact: "drivingExperience",
        operator: "greaterThanInclusive",
        value: 5,
      },
    ],
  },
  event: {
    type: "calculatePremium",
    params: {
      baseRate: 1000,
      discount: 0.1,
    },
  },
};
