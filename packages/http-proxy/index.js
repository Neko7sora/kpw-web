const Fastify = require("fastify");
const server = Fastify();
const proxy = require("@fastify/http-proxy");

server.register(proxy, {
  upstream: "http://127.0.0.1:1313",
  prefix: "/",
  rewritePrefix: "/",
  http2: false,
});

server.register(proxy, {
  upstream: "http://127.0.0.1:8000",
  prefix: "/docs",
  rewritePrefix: "/docs",
  http2: false,
});

server.register(proxy, {
  upstream: "http://127.0.0.1:8000",
  prefix: "/livereload",
  rewritePrefix: "/livereload",
  http2: false,
});

server.listen({ port: 3000 });

console.log("http-proxy: http://127.0.0.1:3000");
