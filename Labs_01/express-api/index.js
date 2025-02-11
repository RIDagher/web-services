// Build a server with Node's HTTP module
import express from 'express';

import routes from './routes/routes.js';

const app = express();
const port = 3001;

app.use(express.json());
routes(app);

const server = app.listen(port, (err) => {
  if (err) return console.log(`Error:${err}`);
  console.log(`server is up and running at ${server.address().port} `);
});
