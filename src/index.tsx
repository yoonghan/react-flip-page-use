import * as React from "react";
import * as ReactDOM from "react-dom";

import { Page } from "./components/Page";

ReactDOM.render(
    <Page compiler="TypeScript" framework="React"/>,
    document.getElementById("questions")
);
