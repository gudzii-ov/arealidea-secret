start-server:
	npx nodemon --exec npx babel-node server/index.js

build-front:
	npm run watch-front

install-deps:
	npm install

lint:
	npx eslint .