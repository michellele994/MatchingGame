import React, { Component } from 'react';
//Where I learned the ajax call to the folder.
// https://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery

const Pictures = props => (
<div className= "pictureDiv col-sm-2" data-id={props.stuff.id} onClick={props.click}><img data-id={props.stuff.id} src={props.stuff.image}/></div>
);
export default Pictures;