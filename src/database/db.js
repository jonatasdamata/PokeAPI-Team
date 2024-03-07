import mongoose from "mongoose";

async function connectDatabase() {
  await mongoose.connect(
    "mongodb+srv://jhondamataoliveira:wayWG1DB6UJ22TcQ@cluster0.cv3fvca.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
}

export default connectDatabase;
