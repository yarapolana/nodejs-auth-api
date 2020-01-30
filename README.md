<p align="center">
  <img align="center" src="https://miro.medium.com/max/4540/1*q9ww_u32hhpMaA-Q_s1ujw.png" width="300" />
</p>

<h1 align="center">🗃NodeJS Authentication Challenge</h1>
<p>This is my second NodeJS server and a code challenge from a class in Rocketseat's Bootcamp. The challenge involves creating a REST API server with an authentication service from scratch with nodejs. <a href="#description" >Read Description</a></p>

<p align="center">
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api/express.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api/bcryptjs.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api/jsonwebtoken.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api/pg.svg" >
  <img src="https://img.shields.io/github/package-json/dependency-version/yarapolana/nodejs-auth-api/sequelize.svg" >
  <img src="https://img.shields.io/github/license/yarapolana/nodejs-auth-api.svg" >
  <a href="https://yarapolana.com"><img src="https://img.shields.io/badge/createdby-yarapolana-red.svg" ></a>
</p>

<h2>🚀Description </h2>
<p id="description">
  Build an authentication service from scratch using <a href="https://expressjs.com"> Express</a>, <a href="https://nodemon.io/">Nodemon</a>, <a href="https://sequelize.org">Sequelize</a>, <a href="https://jwt.io/">Jsonwebtoken</a>, <a href="https://github.com/jquense/yup">Yup</a> and <a href="https://www.postgresql.org">Postgres</a>. In this application I used linting standards with ESLint + Prettier + EditorConfig.
</p>

### Routes

- `GET /`: This is a test route you can send as response an `OK` message.

- `POST /users`: This route creates a new user and must receive `name`, `email` and `password` in the body. You must validate the user where you state that all fields are required, `email` must be an email and password has a minimum of 8 characters.

- `POST /sessions/`: This route logs the user into the application and receives `email` and `password` as  mandatory fields.

- `PUT /users`: This route updates the authenticated user and receives any of the following `name`, `email` or `password` in the body.


### Middleware & Security

On loging in and creating a user uncrypt their password using JWT to create an encrypted token.
Create a middleware that validades if a user is authenticated, use JWT to decode the user's token.


<h2>Result</h2>
<p>To run the application first install dependencies</p>

```
yarn or npm install
```

<p>This application uses Postgres so make sure to have that running (with Docker recommended) then run the application</p>

```
yarn dev
```

<p>Your code should be up and running here</p>

```http://localhost:3333```

---

<h4> Check out the continuation of this challenge <a href="https://github.com/yarapolana/nodejs-auth-api-v2">here</a>.</h4>

---
### License:

This project is made available under the [MIT LICENSE](LICENSE.md).

### Authors:

<p>
  <a href="https://github.com/yarapolana">
    <img src="https://avatars0.githubusercontent.com/u/19730118?s=460&v=4" width="50" height="50">
  </a>
  <a href="https://dotcode.is">
    <img src="https://dotcode.is/images/logo_dark.svg" width="50" height="50">
  </a>
</p>
