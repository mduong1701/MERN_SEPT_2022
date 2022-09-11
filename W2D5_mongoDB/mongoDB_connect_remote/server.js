const express = require('express');
const app = express();
const PORT = 8000;

// --- MIDDLEWARE ---
app.use(express.json(), express.urlencoded({extended:true}));

require("./config/dbConfig")

app.listen(PORT, () => console.log(`>>> SERVER UP ON PORT ${PORT} <<<`))