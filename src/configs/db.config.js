const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `SUCCESS: Connection to Database SUCCESSFUL. Name: ${conn.connection.name}, Port: ${conn.connection.port}, Host: ${conn.connection.host}`
        .underline.brightGreen
    );
  } catch (err) {
    console.log(
      "ERROR: Connection to Database UNSUCCESSFUl".underline.brightRed
    );
    console.log(err.message.underline.brightRed);
    process.exit(1);
  }
};

module.exports = connectDB;
