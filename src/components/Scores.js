import React, { Component } from 'react';

const Scores = props => (
    <div>
        Current Score: {props.score}
        <br />High Score: {props.highScore}
    </div>
);

export default Scores;