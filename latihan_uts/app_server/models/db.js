let mongoose = require("mongoose");
// pawII-si52 -> nama db nyaa
// let db URI= "mongodb://localhost:27107/pawII-si52"
let dbURI = "mongodb+srv://paw2:si@paw2.iendmj6.mongodb.net/PAWII-SI?retryWrites=true&w=majority&appName=paw2"

mongoose.connect(dbURI,{
   useNewURLParser: true
});

mongoose.connection.on("connected",() =>{
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error",(error) =>{
    console.log("Connection Error : " + error);
});

mongoose.connection.on("disconected",() =>{
    console.log("Disconnected From MongoDB");
});