const app = require("./app");

// Set port
const port = 5000;

// Server
app.listen(port, () => console.log(`Server running on localhost:${port}`));
