// CONFIG  =====================================================================
const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")
const { titleExists } = require("./helperMethods")
const _ = require("lodash")
const app = express()
const mongoose = require("mongoose")
const mongooseSetting = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}
const serverURL =
  "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.znb2f.mongodb.net/rpg-online"

mongoose
  .connect(serverURL, mongooseSetting)
  .then(console.log("Connected successfully to DB"))
  .catch("Oops! No connection to DB!")

app.set("view engine", "pug")
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"))

// =============================================================================

// GLOBAL VARS +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const jsonPath = __dirname + "/data/sheets.json"
const jsonText = fs.readFileSync(jsonPath)
let defaultText = JSON.parse(jsonText)
const postSchema = {
  kebab: {
    type: String,
    required: true,
    unique: true,
    description: "Title must be unique!",
  },
  title: String,
  content: String,
}
const Post = mongoose.model("Post", postSchema)
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
