import mongoose from 'mongoose';
import { dbPassword } from './dbConfig.js';


// DO NOT COMMIT
mongoose.connect(`mongodb+srv://unleaked-moner-managey:${ dbPassword }@moner-managey.zw8enwn.mongodb.net/moner-managey);

export default mongoose.connection;
