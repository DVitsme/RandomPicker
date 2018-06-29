'use strict';

var postDetails = {
  title: React.createElement(
    'h1',
    null,
    'Visibility Toggle'
  ),
  details: ''
};

var showInfo = function showInfo() {
  if (postDetails.details === '') {
    postDetails.details = 'Hey. These are some details you can now see!';
  } else {
    postDetails.details = '';
  }
  reRender();
};

var reRender = function reRender() {
  var template = React.createElement(
    'div',
    null,
    postDetails.title,
    React.createElement(
      'button',
      { onClick: showInfo },
      'Show details'
    ),
    React.createElement(
      'p',
      null,
      postDetails.details
    )
  );
  ReactDOM.render(template, appLocation);
};

var appLocation = document.getElementById('container');

reRender();
