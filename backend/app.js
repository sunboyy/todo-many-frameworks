const jsonServer = require('json-server');
const bodyParser = require('body-parser');
const fs = require('fs');

const dataPath = 'db.json';
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, JSON.stringify({ todos: [] }));
}

const server = jsonServer.create();
const router = jsonServer.router(dataPath);
const middlewares = jsonServer.defaults();
const jwtToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2l0ZVBvaW50IFJlYWRlciJ9.sS4aPcmnYfm3PQlTtH14az9CGjWkjnsDyG_1ats4yYg';

server.use(middlewares);
server.use(bodyParser.json());
server.post('/sign-in', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  if (username === 'demo' && password === 'demo') {
    res.json({
      name: 'Sitepoint Reader',
      token: jwtToken
    });
  } else {
    res.send(422, 'Invalid username or password');
  }
});

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    next();
  } else {
    res.sendStatus(401);
  }
});

server.use(router);

server.listen(3000, () => {
  console.log('JSON server is running at port 3000');
});

function isAuthorized(req) {
  let bearer = req.get('Authorization');
  if (bearer === 'Bearer ' + jwtToken) return true;
  return false;
}
