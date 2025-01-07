import { FastifyReply, FastifyRequest } from "fastify";
import { ExecuteRequest } from "../types/rule.types";
import { RulesService } from "../services/rules.service";

export class RulesController {
  constructor(private rulesService: RulesService) {}

  async executeRule(
    request: FastifyRequest<{ Body: ExecuteRequest }>,
    reply: FastifyReply
  ) {
    const premium = await this.rulesService.executePremiumRule(
      request.body.facts
    );
    return { premium };
  }
}
