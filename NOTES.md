Order for File Structure

mkdir public && touch public/index.html
  - include react cdn
    <script src="https://unpkg.com/react@16.0.0/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@16.0.0/umd/react-dom.development.js"></script>
  - mkdir scripts && touch scripts/app.js

sudo npm install -g babel-cli@6.24.1
  - yarn init
  - yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2

// src/app.js contains all our jsx - scripts/app.js contains all our generated code
mkdir src && touch src/app.js


//time to run babel to compile
babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch
