#!/usr/bin/node
const apiserver = require("./apiserver/server");
const httpProxy = require("http-proxy");
const apiProxy = httpProxy.createProxyServer();
const apiUrl = "http://localhost:8080";

const express = require("express");
const app = express();
app.use(express.static('www'));

app.all("/api/*", function(req, res) {
  // console.log('redirecting to ' + apiUrl);
  apiProxy.web(req, res, {target: apiUrl});
});

app.listen(8888, function () {
  console.log('express app listening on port 8888!')
});
