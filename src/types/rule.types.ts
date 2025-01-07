export interface Facts {
  age: number;
  drivingExperience: number;
  [key: string]: any;
}

export interface RuleEvent {
  type: string;
  params: {
    baseRate: number;
    discount: number;
  };
}

export interface ExecuteRequest {
  facts: Facts;
}

export interface ExecuteResponse {
  premium: number;
}
