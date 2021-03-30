import React, { Component } from 'react';
import { render } from 'react-dom';

function Box(props) {
    return <div><h2>This is a {props.size}px Box!</h2></div>
}

export default Box;