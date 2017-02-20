import { connect } from 'react-redux';
import React from 'react';
import Options from './../components/Options';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Advocates from './Advocates';
import RaisedButton from 'material-ui/RaisedButton';
import Bottom from './../components/Bottom';
import * as actions from './../actions/actions';
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

let AdvocateContainer = ({advocates, totalAdvocates, showMore, showLess}) => {
  return (
    <div>
      <MuiThemeProvider>
        <div style={styling.container}>
        <Options totalAdvocates={totalAdvocates} />
        < Advocates advocates={advocates} showMore={showMore} showLess={showLess} />
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
  return {
    showMore: function (advocateIndex) {
      dispatch(actions.showMoreBio(advocateIndex));
    },
    showLess: function (advocateIndex) {
      dispatch(actions.showLessBio(advocateIndex));
    }
  };
}

AdvocateContainer = connect(mapStateToProps, mapDispatchToProps)(AdvocateContainer);

export default AdvocateContainer;