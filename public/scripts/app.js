'use strict';

// Create a App object with 2 props
// Title and SubTitle

//Use Title and SubTitle and then render it

var post = {
  title: 'Logitech is Awesome',
  subtitle: 'I mean they make everything speakers, headphones, everything'
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    post.title
  ),
  React.createElement(
    'p',
    null,
    post.subtitle
  )
);

var person = {
  name: 'Derrick Valentine',
  age: 23,
  location: 'Silver Spring'
};
function isLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var template2 = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    person.name ? person.name : 'Anonyomus'
  ),
  React.createElement(
    'p',
    null,
    person.age
  ),
  isLocation(person.location)
);

var appLocation = document.getElementById('container');

ReactDOM.render(template2, appLocation);
