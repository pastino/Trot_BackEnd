"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Video",
    embedded: false
  },
  {
    name: "GenerationVideo",
    embedded: false
  },
  {
    name: "MainView",
    embedded: false
  },
  {
    name: "ProgramBox",
    embedded: false
  },
  {
    name: "SingerBox",
    embedded: false
  },
  {
    name: "PlayListBox",
    embedded: false
  },
  {
    name: "Information",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
exports.prisma = new exports.Prisma();
