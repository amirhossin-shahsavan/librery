const People = require('../../models/users')

exports.login = (req,res)=>{
   const  {cellPhone, password } = req.body

    console.log(`>>>>${ cellPhone,password }`)
        People.findOne({
            cellPhone,
        }).then((user)=>{
            if(!user){
                console.log("user not found")
                res.send("user not found")
            }
            else 
            res.send("user is login")
        })
    };
    exports.signUp = (req,res)=>{
        const  {name, family, role, age, cellPhone, brithDay, active} = req.body
     
         console.log(`>>>>${name, family, role, age, cellPhone, brithDay, active}`)
         const poeple = new People({
             name, family, role, age, cellPhone, brithDay, active
         })
         poeple.save()
         .then(savedUser => res.status(201).json(savedUser))
         .catch(err => res.status(500).json({ error: err.message }));
         };
