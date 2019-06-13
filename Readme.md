Node instructions
check versions node -v and npm -v

React instructions:
Installation

1. npm install -g create-react-app
2. create-react-app projectmanager //// npm config set registry="http://registry.npmjs.org" --->> to reset config
3. npm start
4. npm uuid
5. npm install jquery --save
6. npm install mssql
7. npm install --save jsonfile
8. go to directory folder cd Projects\React\
9. go back cd\ or cd Projects
10. node jsname.js in cmd.exe

create package.json file ---- manifest file of your app
1.npm init

2. set main or entry point to app.js
3. npm install --save mssql ---- save as dependency in package.json
4. npm install -g nodemon ---- avoid restarting server manually globally

updating node.js

1. npm cache clean -f
2. npm install -g npm
3. npm install npm@latest -g

material ui instructions

1. npm install @material-ui/core
2. npm install @material-ui/icons

git bash repo instructions:

1. open git bash exe
2. cd ( go to directory folder using git cmd)
   cd /c/ReactVS/React-Node-Sql
3. git init
4. git remote add origin (Get Link in github.com account in repository)
5. git -v
6. git remote -v
7. git add .
8. git commit -m "Name of the File"
9. git push origin master

git bash update instructions

1. open git bash exe
2. cd ( go to directory folder using git cmd)
   cd c:\ReactVS\Node-React-1.0
3. git status
4. git add .
5. git commit -m "Description of changes"
6. git status (check updates)
7. git push origin master

8. git remote rm origin -- add version and renew link in github.
9. git config --get remote.origin.url ----- check current github url

node server

1. npm init -y ------ create package json file
2. npm i express
3. npm i -D nodemon
4. npm install -g live-server
5. npm install mssql

# React application with Node Express server

1. create a .env file
2. create a package.json file
3. In windows press "Ctrl + ~" to open terminal
4. npm init
5. copy initial codes in package.json and read always in comments
6. npm install node-env-run nodemon npm-run-all express-pino-logger pino-colada --save-dev
   a.) npm install //// to install all packages written in package.json or click extension icon in the left pane and search for a specific package desired.
7. npm run server //// to run webservice files from server.
8. npm start //// to run react application.
9. npm run dev //// to run both node server and react application.
10. npm install -g json-server
    "start": "react-scripts start & json-server --watch sample.json --port 3004" //// put in package.json to run json files..
11. npm install --save react-router-dom
12. json-server --watch sample.json --port 3004
13. npm i concurrently --save-dev
14. concurrently --kill-others \"npm run start\" \"npm run json:server\" //// multiple server run together.
