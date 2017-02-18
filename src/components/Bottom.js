import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

let styling = {
  "loadMore": {
    "width": "90%",
    "marginTop": "20px",
    "marginBottom": "10px",
  },
  "loadMoreButton": {
    "height": "70px",
    "top": "40%",
    "fontSize": "16px"
  },
  "loadMoreButtonlabel": {
    "color": "#212121",
    
  },
  "container": {
    "width": "100%",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "paddingBottom": "20px"
  },
  "emailUs": {
    "width": "98%",
    "textAlign": "center",
    "display": "flex",
    "alignItems": "center",
    "flexDirection": "column",
    "backgroundColor": "white",
    "fontFamily": "Lato, sans-serif",
    "paddingTop": "15px",
    "paddingBottom": "15px"
  },
  "emailUsLink": {
    "color": "#37c99e",
    "textDecoration": "none",
    "fontWeight": "200"
  },
  "innerText": {
    "paddingBottom": "10px"
  }
}

let Bottom = () => {
  return (
    <div style={styling.container}>
      <div style={styling.loadMore}>
        <RaisedButton
          label={"LOAD MORE RESULTS"}
          fullWidth={true}
          style={styling.loadMoreButton}
          labelStyle={styling.loadMoreButton}
          labelColor={styling.loadMoreButtonlabel.color}
          />
        </div>
          <div style={styling.emailUs}>
        <div style={styling.innerText}>
              {"Not seeeing anyone you want to talk to? Tell us who you're looking for and we'll help you out."}
        </div>
            <div>
          <a href="" style={styling.emailUsLink}>{"Email Us"}</a>
            </div>
          </div>
    </div>
  );

};

export default Bottom;