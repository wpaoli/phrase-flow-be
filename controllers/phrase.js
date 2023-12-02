const Phrase = require('../models').Phrase


module.exports = {

    // add phrase
    addPhrase: (req, res) => {
       let { phrase, user_id } = req.body
       console.log(req.body);
       Phrase.create({
            user_id,
           phrase
       }).then((phrase) => {
        
           return res.status(201).json({
               "message": "Phrase created successfully",
                phrase
           })
       }).catch(error => {
        return res.status(400).json({error})
    })
    }








}