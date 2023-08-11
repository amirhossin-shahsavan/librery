const People = require('../../models/users')

exports.sighUp = (req,res)=>{
   const  {name, family, role, age, cellPhone, brithDay, active} = req.body


    const poeple = new People({
        name, family, role, age, cellPhone, brithDay, active
    })
    poeple.save()
    .then(savedUser => res.status(201).json(savedUser))
    .catch(err => res.status(500).json({ error: err.message }));
    };
