import "./env";
import logger from "morgan";
import { GraphQLServer } from "graphql-yoga";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";
import { uploadMiddleware, uploadController } from "./uploadPhoto";

const PORT = process.env.PORT || 80;

const server = new GraphQLServer({
  schema,
  context: ({ request }) => ({ request }),
});

// const http = require("http");
// setInterval(function() {
//   http.get("http://trot-trot-f77c916dae.herokuapp.com");
// }, 600000);

// setInterval(function() {
//   http.get("http://trot-backend.herokuapp.com");
// }, 600000);

server.express.use(logger("dev"));
server.express.use(authenticateJwt);
server.express.post("/api/upload", uploadMiddleware, uploadController);

const handleRunning = () =>
  console.log(`Server is running on: http://localhost:${PORT}`);

server.start({ port: PORT }, handleRunning());
