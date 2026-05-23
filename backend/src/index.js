import express from "express";
import  dotenv from "dotenv";
import  mongoose  from "mongoose";
import cors from "cors"
import router from "./routers/recipesRouter.js";
import user from "./routers/registerRouter.js";

const app = express();
app.use(express.json());
dotenv.config()
app.use(cors())

mongoose.connect(process.env.MONGOOSE_URI).then(()=>{
  console.log("Concted mongoose")
}).catch((err)=>{
console.log("con't conect mongoose")
})


app.use('/', router)
app.use('/User', user)
app.use("/uploads", express.static("src/uploads"));



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is runningg successefly in port ${PORT}`);
});
