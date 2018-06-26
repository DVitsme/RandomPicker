// Create a App object with 2 props
// Title and SubTitle

//Use Title and SubTitle and then render it

let post = {
  title: 'Logitech is Awesome',
  subtitle: 'I mean they make everything speakers, headphones, everything'
};

var template = (
  <div>
    <h1>{post.title}</h1>
    <p>{post.subtitle}</p>
  </div>
);

let person = {
  name: 'Derrick Valentine',
  age: 23,
  location: 'Silver Spring'
};
function isLocation (location) {
  if (location) {
    return <p>Location: {location}</p>
  }
};

var template2 = (
  <div>
    <h1>{person.name ? person.name : 'Anonyomus'}</h1>
    <p>{person.age}</p>
    {isLocation(person.location)}
  </div>
);


var appLocation = document.getElementById('container');

ReactDOM.render(template2, appLocation);
