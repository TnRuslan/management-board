import express from 'express';
import type { Express, Response, Request } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import AppRouter from './routes';

const port = 8080;
const app: Express = express();
const router = new AppRouter(app);

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Hello in management board');
});

router.init();

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
