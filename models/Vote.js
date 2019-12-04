const { Model } = require("objection");

class Vote extends Model {
  //Name of the table
  static get tableName() {
    return "votes"
  }

  // Mapping any relations
  // Example is a 1 to many relation
  // static get relationMappings() {
  //   const [Model Name] = require("./[Model path]");
  //   return {
  //     [Related Table Name]: {
  //       relation: Model.HasManyRelation,
  //       modelClass: [Model Name],
  //       join: {
  //         from: "users.id",
  //         to: "[Table Name].user_id"
  //       }
  //     }
  //   };
  // }

  //JSON Schema used for validation
  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "user_id",
        "resource_id",
        "type"
      ],

      properties: {
        id: { type: "integer" },
        user_id: { type: "integer" },
        type: { type: "integer" },
        content: { type: "string", minLength: 1, maxLength: 255 },
        created_at: { type: "string", minLength: 1, maxLength: 255 },
        updated_at: { type: "string", minLength: 1, maxLength: 255 }
      }
    };
  }
}

module.exports = Vote