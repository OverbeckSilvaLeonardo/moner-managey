import mongoose from "mongoose";

mongoose.connect('<fill-uri-here>');

export default mongoose.connection;
