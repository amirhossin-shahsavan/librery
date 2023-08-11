const People = require('../../models/users')

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

