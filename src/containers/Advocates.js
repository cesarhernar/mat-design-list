import React from 'react';
import People from './../components/People.js';

let style = {
  "container": {
    "width": "98%",
    "display": "flex",
    "zIndex": "1",
    "flexDirection": "column",
    "alignItems": "center"
  },
  "table": {
    "width": "100%"
  },
  "column": {
    "padingTop": "10px",
    "paddingBottom": "10px"
  }
}

function show(showFullBio, index) {
  return function () {
    showFullBio(index)
  }
}
function hide(showLess, index) {
  return function () {
    showLess(index)
  }
}


let Advocates = ({advocates, showMore, showLess}) => {

  return (
    <div style={style.container}>
      <table style={style.table}>
        <tbody>
          {
            advocates.map((advocate, i) => <tr onMouseEnter={show(showMore, i)} onMouseLeave={hide(showLess, i)}><td style={style.column}><People key={i} advocate={advocate} /></td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Advocates;