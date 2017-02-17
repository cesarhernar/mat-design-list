import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
let style = {
  "container": {
    "width": "100%",
    "display": "flex",
    "flexDirection": "column",
    "alignItems": "center",
    "flex": "0 1 auto"
  },
  "rows": {
    "width": "95%",
    "display": "flex",
    "alignItems": "center",
    "flex": "0 1 auto",
    "paddingTop": "12px"
  },
  "columns": {
    "flex": "1 1 auto"
  },
  "button": {
  "backgroundColor": "#3CB68E",
  "labelColor": "#F5F5F5",
  "labelStyle": {
    "textTransform": "none"
  }
  }
};

let People = ({advocate}) => {
  return (
    <div className="advocate">
      <table style={style.container}>
        <tbody style={style.container}>
          <tr style={style.rows}>
            <td>
              {"picture"}
            </td >
            <td style={style.columns}>
              <div>{advocate.name}</div>
              <div>{advocate.position}</div>
              <div>{"@ " + advocate.company}</div>
            </td>
            <td style={{ "flex": style.columns.flex, "textAlign": "right" } }>
              {"company logo"}
            </td>
          </tr>
          <tr style={style.rows}>
            <td>
              <div>{advocate.rating}</div>
              <div>{advocate.reviews}</div>
            </td >
            <td style={style.columns}>
            </td>
            <td style={{ "flex": style.columns.flex, "textAlign": "right" } }>
              {advocate.available.fee + " per " + advocate.available.time}
            </td>
          </tr>
        </tbody>
        <tfoot style={style.container}>
          <tr style={style.rows}>
            <td style={style.columns}>
              <div>{advocate.about}</div>
              <br/>
              <div><RaisedButton
                label="Book Now"
                fullWidth={true}
                backgroundColor={style.button.backgroundColor}
                labelColor={style.button.labelColor}
                labelStyle={style.button.labelStyle} />
              </div>
              <br/>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default People;