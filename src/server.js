const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const userData = [
  { id: 1, username: "abdilaahi", displayName: "abdilaahi" },
  { id: 2, username: "rayaan", displayName: "rayaan" },
  { id: 3, username: "mohamed", displayName: "mohamed" },
];

//route
app.get("/", (req, res) => {
  res.send(userData);
});

app.get("/api/users",(req,res)=>{
    res.send({messge:"api is ready"})
})


app.get("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");

  const requiredUser = userData.find((user) => user.id === parsedId);
  if (!requiredUser)
    return res.status(404).send(`user with id ${parsedId} not found`);
  res.status(200).send(requiredUser);
});

// update user
app.put("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  
  const requiredUser = userData.find((user) => user.id === parsedId);
  if (!requiredUser)
    return res.status(404).send(`user with id ${parsedId} not found`);
});

// delete user
app.delete("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  const requiredUser = userData.find((user) => user.id === parsedId);
  if (requiredUser)
    return res.status(404).send(`user with id ${parsedId} not found`);
  return res.status(200).send(requiredUser);
});

app.get("/api/users/:id", (req, res) => {
  console.log(req.params);
});

app.get("/api/products", (req, res) => {
  res.status(200).send([
    { id: 1, productionName: "HP Laptop", price: 300.5 },
    { id: 2, productionName: "handDisk HDD", price: 60 },
    { id: 3, productionName: "samsung phones", price: 70 },
    { id: 4, productionName: "iphones", price: 300 },
  ]);
});

app.get("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
});

app.post("/api/products", (req, res) => {
  res.status(201).send({ message: "product created successfully" });
});

app.put("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "product updated successfully" });
});

app.delete("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "product deleted successfully" });
}); 

app.get("/api/comments", (req, res) => {
  res.status(200).send([
    { id: 1, comment: "this is a comment" },
    { id: 2, comment: "this is another comment" },
    { id: 3, comment: "this is a third comment" },
    { id: 4, comment: "this is a fourth comment" },
    { id: 5, comment: "this is a fifth comment" },
  ]);
});
app.get("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ id: parsedId, comment: "this is a comment" });
});

app.post("/api/comments", (req, res) => {
  res.status(201).send({ message: "comment created successfully" });
});

app.put("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "comment updated successfully" });
});

app.delete("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "comment deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
