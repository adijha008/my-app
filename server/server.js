const app = require("./server/app");

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend listening on port ${PORT}`);
})