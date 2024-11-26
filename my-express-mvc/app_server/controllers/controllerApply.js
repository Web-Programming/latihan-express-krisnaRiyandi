const Apply = require("../models/apply")

const insert = (req, res, next) => {
    const apply = new Apply({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
    });
  
    apply
      .save()
      .then((result) => {
            const responseMessage = {
                code: 200,
                success: true,
                message: "Successfull",
                data: result
            };
            res.status(200).json(responseMessage);
        })
        .catch((e) => {
            const responseMessage = {
                code: 400,
                success: false,
                message: "Bad request"
            };
            res.status(400).json(responseMessage);
        });
};
module.exports= {insert}