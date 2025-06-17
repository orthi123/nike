import cors from 'cors'; //Cross Origin resource sharing
import express from 'express';
import { WHITELIST } from './constants/constants.js';
import { get } from 'mongoose';
import cookieParser from 'cookie-parser'; //cookie pathay ba read kore

const app = express();
app.use(express.json());

//user amaderk json file dibe ,sheta read korar jonno ei file laaagbe

app.use(express.urlencoded({ extended: true }));

//URL id ,qwery ashle ,"true" deprycated version er jonno kora hoy,,express 5 e na dileo chole but 4 e dewa lgbe

app.use(express.static('public'));

app.use(
      cors({
            origin: function (origin, callback) {
                  if (WHITELIST.indexOf(origin) !== -1) {
                        callback(null, true);
                  } else {
                        callback(new Error('Not allowed by CORS'));
                  }
            },

            // credentials: true,
            // methodS:'GET.HEAD.PUT,PATCH,POST DELETE',
            // allowedHeaders:'content-type,Authorization'
      })
);
app.use(cookieParser());

export { app };
