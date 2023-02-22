import mongoose, { Mongoose } from "mongoose";

const URI = process.env.MONGO_URL;

console.log("dentro database");

mongoose.connect(
  `${URI}`,
  {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Mongodb connected");
  }
);
