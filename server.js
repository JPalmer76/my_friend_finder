var express = require("express");
// var bodyParser = ("body-parser");
var path = require("path");

var app = express();
var port = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("app/routing"));

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.listen(port, function() {
    console.log("App listening on PORT " + port);
});