require("dotenv").config();
const express = require('express');
const cors = require("cors");
const mongoose = require("mongoose");
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger/swagger_output.json");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);
mongoose.connect(
    process.env.MONGODB_URI,
    {
        // useNewUrlParser: true,
        // useUnifiedTopology: true,
    },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("Connected to MongoDB");
        }
    }
);


app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.listen(process.env.PORT || 8000, () => {
    console.log("Server started on port 8000");
});