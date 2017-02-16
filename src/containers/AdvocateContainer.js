import { connect } from 'react-redux';
import React from 'react';
import Options from './../components/Options';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


let AdvocateContainer = ({advocates, totalAdvocates}) => {
  return (
    <div>
      <MuiThemeProvider>
        <div>
        <Options />
        <div> {totalAdvocates + " Advocates Found"} </div>
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