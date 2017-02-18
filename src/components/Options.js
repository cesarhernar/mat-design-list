import React, { PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import RaisedButton from 'material-ui/RaisedButton';

let styles = {
  "backgroundColor": "#1D1E39",
  "labelColor": "#F5F5F5",
  "labelStyle": {
    "textTransform": "none"
  },
  "buttonStyle": {
    "boxShadow": "box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    "borderRadius": "0px",
    "borderBottom": "2px solid #37C99E"
  },
  "container": {
    "width": "100%",
    "flex": "1 1 auto",
    "paddingBottom": "60px",
    "paddingTop": "0px",
    "marginTop": "-3px",
 
  },
  "table": {
    "width": "100%",
    "paddingTop": "0px",
  }
}

let Options = () => {
  return (
    <div style={styles.container}>
      <table style={styles.table}>
      <thead>
        <tr>
          <td>
              <RaisedButton
                label="Companies"
                labelPosition="after"
                containerElement="label"
                backgroundColor={styles.backgroundColor}
                labelColor={styles.labelColor}
                labelStyle={styles.labelStyle}
                buttonStyle={styles.buttonStyle}
                fullWidth={true} />
          </td>
          <td>
              <RaisedButton
                label="Job Roles"
                labelPosition="after"
                containerElement="label"
                backgroundColor={styles.backgroundColor}
                labelColor={styles.labelColor}
                labelStyle={styles.labelStyle}
                buttonStyle={styles.buttonStyle}
                fullWidth={true}/>
          </td>
          </tr>
        </thead>
      </table>
    </div>
  )

};

export default Options;