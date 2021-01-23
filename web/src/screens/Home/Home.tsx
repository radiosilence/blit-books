import { Button } from "@adobe/react-spectrum";
import { observer } from "mobx-react-lite";
import React from "react";

const Home = observer(() => {
  return (
    <div>
      <Button variant="cta" onPress={() => alert("Hey there!")}>
        Hello React Spectrum!
      </Button>
    </div>
  );
});

export default Home;
