const express = require('express')

const app = exprss();

app.get("health-checkup", function(req,res){

    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.headers.kidneyId;



        if(username!= "himika" || password != "pass") {
        res.status(400).json({"msg" : "something wrong"})
        return 

    }
    

    if (kidneyId != 1 && kidneyId != 2) {
        res.status(400).json({"msg": "Somethings up with your ionputs"})
        return
      }
      
      res.json({
        msg: "Your kidney is fine!"
      })
});

app.listen(3000)