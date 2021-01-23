import { app } from "./app";
import * as Data from "./data";

function main() {
  Data.initialize();
  const port = process.env.PORT ?? 5000;

  app.listen(port, () => {
    console.log("listening on port", port);
  });
}

main();
