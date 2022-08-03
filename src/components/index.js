import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { locState } from "./App-States/states";

export default function Index() {
  const [loc, setLoc] = useRecoilState(locState);
  useEffect(() => {
    //Runs on every render
    setLoc("MAIN");
  });
  return (
    <div>
      <h1>MAIN</h1>
    </div>
  );
}
