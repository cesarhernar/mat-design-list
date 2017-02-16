import React, { PropTypes } from 'react';
import muiThemeable from 'material-ui/styles/muiThemeable';
import FlatButton from 'material-ui/FlatButton';
let Options = (props) => {
  console.log(props)
  return (
    <div>
      <table>
      <thead>
        <tr>
          <td>
            <FlatButton label="Companies" primary={true} />
          </td>
          <td>
            <FlatButton label="Job Roles" primary={true} />
          </td>
          </tr>
        </thead>
      </table>
    </div>
  )

};

export default muiThemeable()(Options);