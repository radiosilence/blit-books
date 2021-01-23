import fs from "fs";
import path from "path";
import "./data";

const dataDir = path.resolve(__dirname, "..", "..", "data");

export function initialise() {
  console.log("dataDir", dataDir);
  if (!fs.existsSync(dataDir)) {
    console.log("DOES NOT EXIST");
  }
}
