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

let counter = 0;
let renderDB = setInterval(
  function() {
    counter += 1;
    ReactDOM.hydrate(
        <PostsRender result={data} counter={counter} />,
        document.getElementById("postsrender")
    );
    if (counter == 10) {
      counter = 0;
      fetch('/', {
        method: 'POST',
      }).then( data_upd => data_upd.json() )
        .then( data_upd => {
          //Date型に戻す
          if(typeof data_upd[0].posttime === 'string'){
            data_upd.forEach((obj: any) => {
              obj.posttime = new Date(obj.posttime);
            });
          }
          ReactDOM.hydrate(
            <PostsRender result={data_upd} counter={counter} />,
            document.getElementById("postsrender")
          );
          data = data_upd;
        });
    }
  }, 1000);

ReactDOM.hydrate(
    <AfterDB />,
    document.getElementById("afterDB")
);
