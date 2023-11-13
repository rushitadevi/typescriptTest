import express from "express";

const app = express();
const port = 4000;

app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
