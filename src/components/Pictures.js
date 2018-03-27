import React, { Component } from 'react';
//Where I learned the ajax call to the folder.
// https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery

const Pictures = props => (
<button className= "pictureButton" onClick={props.click}><img src={props.stuff}/></button>
);
export default Pictures;