import { Engine } from "json-rules-engine";
import { premiumRule } from "../constants/rules";
import { Facts, RuleEvent } from "../types/rule.types";

export class RulesService {
  async executePremiumRule(facts: Facts): Promise<number> {
    const engine = new Engine();
    engine.addRule(premiumRule);

    const results = await engine.run(facts);
    const event = results.events[0] as RuleEvent | undefined;

    return event ? event.params.baseRate * (1 - event.params.discount) : 1000;
  }
}
