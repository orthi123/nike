import cors from 'cors'; //Cross Origin resource sharing
import express from 'express';
import { WHITELIST } from './constants/constants.js';
import { get } from 'mongoose';
import cookieParser from 'cookie-parser'; //cookie pathay ba read kore
import errorHandler from './middlewares/errorHandler.middleware.js';

const app = express();
app.use(express.json());

//user amaderk json file dibe ,sheta read korar jonno ei file laaagbe

app.use(express.urlencoded({ extended: true }));

//URL id ,qwery ashle ,"true" deprycated version er jonno kora hoy,,express 5 e na dileo chole but 4 e dewa lgbe

app.use(express.static('public'));

app.use(
  cors({
    origin: WHITELIST,

    credentials: true,
    // methodS:'GET.HEAD.PUT,PATCH,POST DELETE',
    // allowedHeaders:'content-type,Authorization'
  })
);
app.use(cookieParser());

//define healthCheckRoutes
import healthCheckRoute from './routes/healthCheckRoute.js';
import userRoute from '../src/controllers/user/user.route.js';

app.use(healthCheckRoute);
app.use('/api/v1', userRoute); //v1 holo version
app.use(errorHandler); //shobar last e hoy
export { app };
