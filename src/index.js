const app = require('./app');
const quotes = require('../assets/quotes.json');
const PORT = 3000;


app.listen(PORT, () => {
    console.log("server is running at http://localhost:3000")
});
app.get("/", (req, res) => {
    res.send("<h1>This is Get method</h1>");
});
app.get("/quotes/getall", (req, res) => {
    res.status(200).json(quotes);
});
app.get("/quotes/randomone", (req, res) => {
    let index =Math.floor(Math.random() * quotes.length) 
    res.status(200).json(quotes[index]);
});
app.get("*",(req, res) => {
    res.send("<h1>404 Page Not Found</h1>");
});
