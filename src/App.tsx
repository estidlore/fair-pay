import type { FC } from "react";
import React from "react";

import { Landing } from "views/Landing";

const App: FC = (): JSX.Element => {
  return (
    <div className={"app"}>
      <p className={"header"}>{"Fair Pay"}</p>
      <Landing />
    </div>
  );
};

export { App };
