import { FastifyInstance } from "fastify";
import { rulesRoutes } from "./rules.routes";

export async function registerRoutes(fastify: FastifyInstance) {
  await fastify.register(rulesRoutes);
}
