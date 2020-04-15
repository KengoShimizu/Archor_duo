import React from "react";
import ReactDOM from "react-dom";

import BeforeDB from "./BeforeDB";
import PostsRender from "./PostsRender";
import AfterDB from "./AfterDB";

//pugからDB値取得
const elem = document.getElementById("json-data");
let elem_data;
if (elem !== null) {
  elem_data = elem.textContent;
}
else{
  elem_data = {};
}
let data;
if (typeof elem_data === 'string') {
  data = JSON.parse(elem_data);
}
else{
  data = {};
}

//Date型に戻す
if(typeof data[0].posttime === 'string'){
  data.forEach((obj: any) => {
    obj.posttime = new Date(obj.posttime);
  });
}

ReactDOM.hydrate(
    <BeforeDB />,
    document.getElementById("beforeDB")
);

ReactDOM.hydrate(
    <PostsRender result={data} />,
    document.getElementById("postsrender")
);

ReactDOM.hydrate(
    <AfterDB />,
    document.getElementById("afterDB")
);
