import mongoose from "mongoose";
export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://dat246642:qwe12345@cluster0.oerigvx.mongodb.net/food-del"
    )
    .then(() => console.log("DB connected"));
};
