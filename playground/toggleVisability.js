
const postDetails = {
    title: <h1>Visibility Toggle</h1>,
    details: '',
}

const showInfo = () => {
  if (postDetails.details === '') {
    postDetails.details = 'Hey. These are some details you can now see!';
  } else {
    postDetails.details = '';
  }
  reRender()
}


const reRender = () => {
  const template = (
    <div>
      {postDetails.title}
      <button onClick={showInfo}>Show details</button>
      <p>{postDetails.details}</p>
    </div>
  );
  ReactDOM.render(template, appLocation);
}

var appLocation = document.getElementById('container');

reRender();
