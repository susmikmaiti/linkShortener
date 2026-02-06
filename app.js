const express = require('express');
const app = express();
const path = require('path');
const connectDB = require('./config/connect');
const urlRoutes = require('./routes/urlRoutes');

app.set("view engine", "ejs")
app.set("views",path.resolve("./views"))

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

link = "mongodb+srv://susmik787_db_user:susmiK123@cluster0.fjuasv4.mongodb.net/?retryWrites=true&w=majority" 
connectDB(link);
app.use('/', urlRoutes);

const PORT = 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
