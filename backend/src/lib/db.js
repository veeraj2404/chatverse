import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    mongoose.connection.on('connected', () => {
      console.log("DB Connected");
    });

    await mongoose.connect(process.env.MONGODB_URL);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
