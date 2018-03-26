import React, { Component } from 'react';

const Scores = props => (
    <div>
        Here is your score! Current Score: {props.score} High Score: {props.highScore}
    </div>
);

export default Scores;