// main.js

var React = require('react');
var ReactDOM = require('react-dom');

var hello = React.createElement(
    'h1',
    {className: 'hello'},
    'Hello lalala'

);
ReactDOM.render(
    hello,
    document.getElementById('hello')
);