import React from 'react';

const Pictures = props => (
    <div className="pictureDiv col-sm-2" data-id={props.thePics.id}>
        <img className="curve-border" onClick={props.click} data-id={props.thePics.id} src={props.thePics.image} alt={"match" + props.thePics.id} />
    </div>
);
export default Pictures;