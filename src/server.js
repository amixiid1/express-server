const express = require("express");
const app = express();

const PORT = process.env.PORT || 3000;

const userData = [
  { id: 1, username: "abdilaahi", displayName: "abdilaahi" },
  { id: 2, username: "rayaan", displayName: "rayaan" },
  { id: 3, username: "mohamed", displayName: "mohamed" },
];

//all users (route)
app.get("/", (req, res) => {
  res.send(userData);
});

// api is ready
app.get("/api/users", (req, res) => {
  res.send({ messge: "api is ready" });
});

// get user by id
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

  const user = userData.find((user) => user.id === parsedId);
  if (!user) return res.status(404).send(`user with id ${parsedId} not found`);

  user.username = req.body.username || user.username;
  user.displayName = req.body.displayName || user.displayName;
  res.send({ message: "user updated successfully", user });
});

// delete user
app.delete("/api/users/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");

  const index = userData.findIndex((u) => u.id === parsedId);
  if (index === -1) return res.status(404).send("user not found");

  const deletedUser = userData.splice(index, 1);
  res.send({ message: "user deleted successfully", deletedUser });
});

//                   products data
const products = [
  { id: 1, productionName: "HP Laptop", price: 300.5 },
  { id: 2, productionName: "Hard Disk HDD", price: 60 },
  { id: 3, productionName: "Samsung Phone", price: 70 },
  { id: 4, productionName: "iPhone", price: 300 },
];

// get all products
app.get("/api/products", (req, res) => {
  res.send(products);
});

// get product by id
app.get("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");

  const product = products.find((p) => p.id === parsedId);
  if (!product) return res.status(404).send("product not found");
  res.send(product);
});

// create product
app.post("/api/products", (req, res) => {
  res.status(201).send({ message: "product created successfully" });
});

// update product
app.put("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "product updated successfully" });

  const product = products.find((p) => p.id === parsedId);
  if (!product) return res.status(404).send("product not found");

  product.productionName = req.body.productionName || product.productionName;
  product.price = req.body.price || product.price;
  res.send({ message: "product updated successfully", product });
});

// delete product
app.delete("/api/products/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "product deleted successfully" });

  const index = products.findIndex((p) => p.id === parsedId);
  if (index === -1) return res.status(404).send("product not found");
  const deletedProduct = products.splice(index, 1);
  res.send({ message: "product deleted successfully", deletedProduct });
});

//               comments data
const comments = [
  { id: 1, comment: "this is a comment" },
  { id: 2, comment: "this is another comment" },
  { id: 3, comment: "this is a third comment" },
  { id: 4, comment: "this is a fourth comment" },
  { id: 5, comment: "this is a fifth comment" },
];

// get all comments
app.get("/api/comments", (req, res) => {
  res.send(comments);
});

// get comment by id
app.get("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");

  const comment = comments.find((c) => c.id === parsedId);
  if (!comment) return res.status(404).send("comment not found");
  res.send(comment);
});


// create comment
app.post("/api/comments", (req, res) => {
  const { comment } = req.body;
  if (!comment) return res.status(400).send("comment is required");

  const newComment = { id: comments.length + 1, comment };
  comments.push(newComment);
  res.status(201).send({ message: "comment created successfully", comment: newComment });
});

// update comment
app.put("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "comment updated successfully" });

  const comment = comments.find((c) => c.id === parsedId);
  if (!comment) return res.status(404).send("comment not found");

  comment.comment = req.body.comment || comment.comment;
  res.send({ message: "comment updated successfully", comment });
});

// delete comment
app.delete("/api/comments/:id", (req, res) => {
  const parsedId = parseInt(req.params.id);
  if (isNaN(parsedId)) return res.status(400).send("invalid id");
  res.status(200).send({ message: "comment deleted successfully" });

  const index = comments.findIndex((c) => c.id === parsedId);
  if (index === -1) return res.status(404).send("comment not found");
  const deletedComment = comments.splice(index, 1);
  res.send({ message: "comment deleted successfully", deletedComment });
});

// start the server
app.listen(PORT, () => {
  console.log(`server is running http://localhost:${PORT}`);
});
