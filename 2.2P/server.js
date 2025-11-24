const express = require("express");
const app = express();
const path = require("path");


app.use(express.static("public"));
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get("/summation", function(req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);

    if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ message: "Invalid numbers" });
        return;
    }

    var sume = a + b;
    res.json({ "First Digit": a, "Second Digit": b, "sum of two digits": sume });
});

app.get("/subtract", function(req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ message: "Invalid numbers" });
        return;
    }

    var sub = a - b;
    res.json({ "First Digit": a, "Second Digit": b, "subtraction of two digits": sub });
});

app.get("/multiply", function(req, res) {
    var a = parseFloat(req.query.a);
    var b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
        res.status(400).json({ message: "Invalid numbers" });
        return;
    }

    var mul = a * b;
    res.json({ "First Digit": a, "Second Digit": b, "multiply of two digits": mul });
});


app.listen(3000, function() {
    console.log("Server is running on port 3000");
});
