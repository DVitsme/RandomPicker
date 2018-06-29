// render sub title and the p tag around the sub title if the sub title exist using the && oporerator
// create a prop for options make it arr for string options 1) ONE and 2) TWO
// render a new p tag if there are options in the arr
const post = {
  title: <h1>Header</h1>,
  subTitle: <p>This Is a sub-title for my post.</p>,
  // options: ['One', 'Two']
  options: []
}

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;
  if (option) {
    post.options.push(option);
    e.target.elements.option.value = '';
  }
  reRender();
}
const reset = () => {
  post.options = [];
  reRender()
};
const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * post.options.length);
  console.log(post.options[randomNum]);
};

const appRoot = document.getElementById('container');


const reRender = () => {
  const template = (
    <div>
      {post.title}
      {post.subTitle && post.subTitle}
      <p>{post.options.length > 0 ? post.options[0] + ' ' + post.options[1] : 'false'}</p>
      <button disabled={post.options.length <= 2} onClick={onMakeDecision}>{post.options.length <= 2 ? 'Add at least 2 options' : 'Choose for me'}</button>
      <button onClick={reset} >reset</button>
      <ol>
         {
           post.options.map((option) => {
             return <li key={option}> {option} </li>
           })
         }
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type='text' name='option' />
        <button type='submit'>Add Option</button>
      </form>
     </div>
  );
  ReactDOM.render(template, appRoot);
}


reRender();
