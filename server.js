const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const qs = require('qs');
var multer  =   require('multer');  

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))

app.get('/get_card_list', async (req, res) => {
    res.setHeader('content-type', 'application/json')
    let results = getCardList(req.query.card_number)
    res.send(results);
});

app.listen(port, () => {
    console.log('Server started on port 3000');
});


var storage =   multer.diskStorage({  
    destination: function (req, file, callback) {  
      callback(null, './uploads');  
    },  
    filename: function (req, file, callback) {  
      callback(null, file.originalname);  
    }  
  });  
  var upload = multer({ storage : storage}).single('file');  
  

  app.post('/uploadjavatpoint',function(req,res){  
    upload(req,res,function(err) {  
        if(err) {  
            return res.end("Error uploading file.");  
        }  
        res.end("File is uploaded successfully!");  
    });  
});  

function getCardList(card_number) {
    let response = [
        {
            card_number: "4242424242424242",
            name: "Ash Rivera",
        },
        {
            card_number: "5454545454545454",
            name: "Jill Barnes",
        },
        {
            card_number: "4000056655665556",
            name: "Abdullah Rachimova",
        },
        {
            card_number: "2223003122003222",
            name: "Ashleigh Rambova",
        },
        {
            card_number: "5200828282828210",
            name: "Travis Mottershead",
        },
        {
            card_number: "5105105105105100",
            name: "Aaron Ravena",
        },
        {
            card_number: "371449635398431",
            name: "Alex Rosa",
        },
        {
            card_number: "6011111111111117",
            name: "Alexander Reyna",
        },
    ]

    if (card_number) {
        response = response.find(element => card_number > 10)
    }
    return response
}