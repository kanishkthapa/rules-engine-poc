import fastify from "fastify";
import swagger from "@fastify/swagger";
import swaggerUI from "@fastify/swagger-ui";
import { swaggerConfig } from "./config/swagger";
import { registerRoutes } from "./routes/endpoints";

export const buildServer = () => {
  const server = fastify({ logger: true });

  server.register(swagger, swaggerConfig);
  server.register(swaggerUI);
  server.register(registerRoutes);

  return server;
};
