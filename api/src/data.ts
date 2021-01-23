import { promisify } from "bluebird";
import fs from "fs";
import path from "path";
import "./data";

export enum Type {
  Invoice = "invoices",
}

const exists = promisify(fs.exists);
const mkdir = promisify(fs.mkdir);

const dataDir = path.resolve(__dirname, "..", "..", "data");

export async function initialize() {
  console.log("dataDir", dataDir);
  if (!(await exists(dataDir))) {
    await mkdir(dataDir);
  }
}

export async function readJSONFile<T>(filename: string): Promise<T> {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, { encoding: "utf-8" }, (err, contents) => {
      if (err) reject(err);
      resolve(JSON.parse(contents));
    });
  });
}

export async function getAll<T>(type: Type): Promise<T[]> {
  const itemPath = path.join(dataDir, type);
  return new Promise((resolve, reject) => {
    fs.readdir(itemPath, async (err, filenames) => {
      if (err) reject(err);
      const files = await Promise.all(
        filenames
          .filter((filename) => filename.endsWith(".json"))
          .map((filename) => readJSONFile<T>(filename))
      );
      resolve(files);
    });
  });
}
