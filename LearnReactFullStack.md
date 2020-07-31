1 "babel": "./node_modules/.bin/babel lib/babelExer.js -d dist" compiled ES5 code to vanilla javascript code
  under dist directory
2 "dev": "pm2 start lib/server.js --watch --interpreter babel-node",
  babel-node "@babel/node": "^7.10.5" is necessary for pm2 to start
3 pm2 can start node server daemon, command 'yarn pm2 log' will show real time logs of node processes
4 ejs 'embedded javascript template' to nodejs is like jsp to java
  ejs engine can be setup with "app.set('view engine', 'ejs');"
  view directory can be setup with "app.set('views', __dirname + '/views');"
  variable can be passed to ejs file with 
  "app.get('/', (req, res) => {
    res.render('index', { answer:  4235});
  })"
5 eslint will make development much faster and easier

6 using 'yarn add --dev package' can add package to dev dependencies
7 "yarn install" will install every package


8 What is the meaning of the “at” (@) prefix on npm packages? This is a new feature of NPM called 'scoped packages', which effectively allow NPM packages to be namespaced.

9 "webpack -wd" for webpack to watch file changes in development
  also "babel-loader": "^8.1.0" is necessary for webpack to run

10 use 'time yarn webpack' to time how long webpack takes
