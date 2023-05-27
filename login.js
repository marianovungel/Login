const express = require('express')
const router = express.Router()

router.get("/getuse", (req, res)=>{
    const { users } = req.session;
    if(!users){
        res.send({users: "Usuário deslogado!"})
    }else{
        res.send(users)
    }
})
router.post("/login/user", (req, res)=>{
    const { nome, senha } = req.body;
    const newUser = { nome, senha};
    // res.send(req.session)
    const { users } = req.session;
    if(users){
        req.session.users.use.push(newUser)
    }else{
        req.session.users={
            use: [newUser],
        }
    }
    res.send(201)
})

module.exports = router;