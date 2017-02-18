import { connect } from 'react-redux';
import React from 'react';
import Options from './../components/Options';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Advocates from './Advocates';
import RaisedButton from 'material-ui/RaisedButton';
import Bottom from './../components/Bottom';
let styling = {
  "advocatesStyling": {
    "position": "absolute",
    "top": "0px",
    "zIndex": "auto",
    "background": "#7276D4",
    "height": "8em",
    "color": "#FAFAFA",
    "felx": "0 1 auto",
    "width": "96%",
    "fontFamily": "Lato, sans-serif",
    "paddingTop": "60px",
    "paddingRight": "15px",
    "paddingBottom": "50px",
    "paddingLeft": "15px"
  },
  "container": {
    "display": "flex",
    "position": "relative",
    "maxWidth": "800px",
    "alignItems": "center",
    "flexDirection": "column",
    "margin": "auto",
    "background": "#F6F6F6"
  }
}

let AdvocateContainer = ({advocates, totalAdvocates}) => {
  return (
    <div>
      <MuiThemeProvider>
        <div style={styling.container}>
        <Options totalAdvocates={totalAdvocates} />
        < Advocates advocates={advocates} />
        <div style={styling.advocatesStyling}> {totalAdvocates + " Advocates Found"} </div>
        <Bottom />
        </div>
      </MuiThemeProvider>
    </div>
  );
}

let mapStateToProps = (state) => {
  return state;
};

let mapDispatchToProps = (dispatch) => {
  return {};
}

AdvocateContainer = connect(mapStateToProps, mapDispatchToProps)(AdvocateContainer);

export default AdvocateContainer;