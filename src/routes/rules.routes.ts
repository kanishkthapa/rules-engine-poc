import { FastifyInstance } from "fastify";
import { RulesController } from "../controllers/rules.controller";
import { RulesService } from "../services/rules.service";
import { executeSchema } from "../schemas/rules.schema";

export async function rulesRoutes(fastify: FastifyInstance) {
  const rulesService = new RulesService();
  const rulesController = new RulesController(rulesService);

  fastify.post(
    "/execute",
    { schema: executeSchema },
    rulesController.executeRule.bind(rulesController)
  );
}
