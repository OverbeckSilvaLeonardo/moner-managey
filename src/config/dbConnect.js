import mongoose from "mongoose";

mongoose.connect('mongodb+srv://moner-managey:s27abhAzTXRJvLTK@moner-managey.zw8enwn.mongodb.net/moner-managey');

export default mongoose.connection;