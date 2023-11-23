const express = require("express");
const cors = require("cors");

const app = express();

var corOptions = {
  origin: "https://localhost:8001",
};

// middleware
app.use(cors(corOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//routers
const promotionRouter = require("./routes/promotionRoutes");

app.use("/api/promotion", promotionRouter);

const notificationRouter = require("./routes/notificationRoutes");

app.use("/api/notification", notificationRouter);


//testing api
app.get("/", (req, res) => {
  res.json({ message: "Hello from API!" });
});

//port

const PORT = process.env.PORT || 8000;

//server

app.listen(PORT, () => {
  console.log(`server is running on the port ${PORT}`);
});
