import mongoose from 'mongoose';
import { MONGO_URI } from '../constants/constants.js';
import ApiError from '../utils/apiError.js';

const MAX_RETRIES = 3;
const RETRY_DELAY_MS = 1000;
let id;
// const sleep=(delay)=>new promise(resolve => setTimeout(() => {

// }, (resolve,delay));)

const dbConnection = async (attempt = 1) => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log('database connected successfully');
  } catch (error) {
    console.log(`Database connection failed(attempt ${attempt}): ${error.message}`);

    if (attempt <= MAX_RETRIES) {
      clearInterval(id);
      const delay = RETRY_DELAY_MS * 2 ** (attempt - 1);
      console.log(`Retrying in ${delay / 1000} seconds...`);

      id = setTimeout(() => {
        dbConnection(attempt + 1);
      }, delay);
    } else {
      console.log(`Maximum retry attempts reached.Throwing error.`);

      throw ApiError.databaseError(error.message);
    }
  }
};
export default dbConnection;
