import React from "react";
import ReactDOM from "react-dom";

import Root from "./Root";
import Header from "./Header";
import HeadNav from "./HeadNav";

ReactDOM.hydrate(
    <Header />,
    document.getElementById("header")
);

ReactDOM.hydrate(
    <HeadNav />,
    document.getElementById("headnav")
);

ReactDOM.hydrate(
    <Root compiler="TypeScript" framework="Express" library="React" />,
    document.getElementById("root")
);
