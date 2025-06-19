import { app } from './src/app.js';
import { PORT } from './src/constants/constants.js';
import dbConnection from './src/db/index.js';

const serverStart = async () => {
  try {
    await dbConnection();
    app.listen(PORT, () => {
      console.log(`✅ Server is running at http://localhost:${PORT}/`);
    });
  } catch (error) {
    console.error(`~file: index.js:50~ serverStart~error:`,error);
  }
};

serverStart();

//Alt+ Shift +F=prettier
