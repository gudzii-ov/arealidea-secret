start:
	npx nodemon --exec npx babel-node server/index.js

install-deps:
	npm install

lint:
	npx eslint .