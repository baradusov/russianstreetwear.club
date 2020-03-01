#!/usr/bin/env node

const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

const PATH_BRANDS = path.resolve(__dirname, "../brands");
const PATH_OUTPUT = path.resolve(__dirname, "../pages/api/data.json");

const brands = [];

const yamls = fs.readdirSync(PATH_BRANDS);
const uuid = () => `${Math.floor(Math.random() * 999999)}-${Date.now()}`;

yamls.forEach(yamlFile => {
  const json = yaml.load(fs.readFileSync(`${PATH_BRANDS}/${yamlFile}`));

  brands.push({
    ...json,
    id: uuid()
  });
});

// TODO: sorting json

fs.writeFileSync(PATH_OUTPUT, JSON.stringify({ brands }, null, 2));
