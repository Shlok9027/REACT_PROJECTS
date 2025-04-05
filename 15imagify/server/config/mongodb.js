import mongoose from "mongoose";

const connectDB = async () => {

    mongoose.connection.on('connected', () => {
        console.log("Database Connected")
    })
    
    await mongoose.connect(`${process.env.MONGODB_URI}/imagify`)
}


export default connectDB;




// import mongoose from "mongoose";

// const connectDB = async () => {
//   try {
//     mongoose.connection.on("connected", () => {
//       console.log("Database connected");
//     });

//     // Connect to MongoDB
//     await mongoose.connect(
//       `${process.env.MONGODB_URI}/imagify`
//     );
//   } catch (error) {
//     console.error("Database connection error:", error.message);
//     process.exit(1);
// }
// export default connectDB;