import express from 'express';
import type { Express, Response, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = 8080;

const app: Express = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello in management board');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
