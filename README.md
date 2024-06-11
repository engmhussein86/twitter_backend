mkdir twitter_backend
cd into twitter_backend
3) npm init -y
4) in json file after desctiption add:
"type" : "module"

and in scripts add:
"dev" : "nodemon index.js"
5) touch index.js

npm i express mongoose dotenv

touch .gitignore file
inside your gitignore add:
node_module
.env

npm run dev

npm i cors

