#!/usr/bin/env node

const fs = require("fs");
const yaml = require("js-yaml");
var path = require("path");

const PATH_BRANDS = path.resolve(__dirname, "../brands");
const PATH_OUTPUT = path.resolve(__dirname, "../pages/api/data.json");

const brands = [];

const yamls = fs.readdirSync(PATH_BRANDS);

yamls.forEach(yamlFile => {
  const json = yaml.load(fs.readFileSync(`${PATH_BRANDS}/${yamlFile}`));

  brands.push(json);
});

// TODO: sorting json

fs.writeFileSync(PATH_OUTPUT, JSON.stringify({ brands }, null, 2));