const Housing = require("../models/housing");

//untuk menghandle request get all mahasiswa
//List data mahasiswa
const Index = async (req, res) => {
    try{
        const housing = await Housing.find({});
        res.status(200).json(housing);
        if(!housing){
            res.status(404).json({ message: "Collection is Empty"});
        }
    }catch (erorr) {
        res.status(500).json({ message: "Error retrieving users", erorr});
    }
    
};

module.exports={Index };