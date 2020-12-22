import fs from "fs"

function serveJSON(game, section) {
  const filePath = __dirname + "/data/sheets.json"
  const sheetFile = fs.readFileSync(filePath)
  const sheet = JSON.parse(sheetFile)

  return sheet[game][section]
}

export default serveJSON
