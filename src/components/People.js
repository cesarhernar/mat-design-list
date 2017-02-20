import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import ActionGrade from 'material-ui/svg-icons/action/grade'
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
  },
  "buttonStyle": {
    "height": "70px",
    "top": "40%"
  },
  "title": {
    "opacity": "0.6",
    "fontSize": "18px",
    "marginBottom": "5px",
    "cursor": "default"
  },
  "company": {
    "opacity": "0.6",
    "cursor": "default"
  },
  "advocateName": {
    "fontWeight": "700",
    "marginBottom": "5px",
    "cursor": "default"
  },
  "reviewNum": {
    "color": "#37c99e",
    "textDecoration": "none",
    "fontWeight": "200"
  },
  "companyLogo": {
    "maxWidth": "80px",
    "maxHeight": "60px",
  },
  "star": {
    "height": "20px",
    "width": "20px"
  }
};



let People = ({advocate}) => {
  let stars = [];
  let wholeRating = advocate.rating ? Math.floor(advocate.rating) : 0;
  for (let i = 0; i < wholeRating; i++) {
    stars.push(<ActionGrade style={style.star} color="rgb(252, 199, 36)"/>)
  }
  if (wholeRating) {
    advocate.rating - wholeRating > 0 ? stars.push(<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24" ><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4V6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z" stroke="rgb(252, 199, 36)" fill="rgb(252, 199, 36)"/></svg>) : null;
  }
  let bio = advocate.aboutFirstHalf
  if (advocate.aboutFirstHalf) {
    bio += advocate.showFullBio ? advocate.aboutSecondHalf : "...";
  }
  return (
    <div className="advocate">
      <table style={style.container} >
        <tbody style={style.container}>
          <tr style={style.rows}>
            <td>
              <div style={{"height": "80px", "width": "80px", "backgroundImage": `url(${advocate.headshot})`, "backgroundSize": "cover"}}></div>
            </td >
            <td style={Object.assign({}, style.columns, {"paddingLeft": "10px"})}>
              <div style={style.advocateName}>{advocate.name}</div>
              <div style={style.title}>{advocate.position}</div>
              <div style={style.company}>{"@ " + advocate.company}</div>
              <br/>
            </td>
            <td style={{ "flex": style.columns.flex, "textAlign": "right" }}>
              <div> 
                <img src={`${advocate.logo}`} style={style.companyLogo} />
              </div>
              <br/>
            </td>
          </tr>
          <tr style={style.rows}>
            <td>
              <div><span>{stars}</span></div>
              <div><a href="" style={style.reviewNum}>{advocate.reviews ? "(" + advocate.reviews + " Reviews)" : "" }</a></div>
            </td >
            <td style={style.columns}>
            </td>
            <td style={{ "flex": style.columns.flex, "textAlign": "right", "fontWeight": "700", "cursor": "default"} }>
              <div>{advocate.available.fee + " per " + advocate.available.time}</div>
              {advocate.reviews ? <br/> : ''}
            </td>
          </tr>
        </tbody>
        <tfoot style={style.container}>
          <tr style={style.rows}>
            <td style={style.columns}>
              <div style={{ "cursor": "default", "heigth": "auto", "transition": "height 10s"}}>{bio}</div>
              <br/>
              <div>
                <RaisedButton
                label="Book Now"
                fullWidth={true}
                backgroundColor={style.button.backgroundColor}
                labelColor={style.button.labelColor}
                labelStyle={style.button.labelStyle}
                style={style.buttonStyle}
                labelStyle={style.buttonStyle} />
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