import React from "react";
import ReactDOM from "react-dom";

import BeforeDB from "./BeforeDB";
import PostsRender from "./PostsRender";
import AfterDB from "./AfterDB";

ReactDOM.hydrate(
    <BeforeDB />,
    document.getElementById("beforeDB")
);

ReactDOM.hydrate(
    <AfterDB />,
    document.getElementById("afterDB")
);
