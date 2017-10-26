var jsonApi = require("jsonapi-server");
var tagsHandler = require("../handlers/tagsHandler.js");

jsonApi.define({
  resource: "tags",
  handlers: tagsHandler,
  attributes: {
    firstName: jsonApi.Joi.string(),
    lastName: jsonApi.Joi.string(),
    template: jsonApi.Joi.number()
  }
});