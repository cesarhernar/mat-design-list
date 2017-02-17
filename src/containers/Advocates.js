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

let Advocates = ({advocates}) => {

  return (
    <div style={style.container}>
      <table style={style.table}>
        <tbody>
          {
            advocates.map((advocate) => <tr><td style={style.column}><People advocate={advocate}/></td></tr>)
          }
        </tbody>
      </table>
    </div>
  );
};

export default Advocates;