const Alien = require('./alien')

//save post
const createpost=async(req,res)=>{
    const alien = new Alien({
        name:req.body.name,
        email:req.body.email,
        phone:req.body.phone
    })

    try{
        const a1 = alien.save()
        res.json(a1)

    }catch(err){
        res.send('error')
    }
}


//get task
const getTask = async(req,res)=>{
    try{
        const aliens = await Alien.find()
        res.json(aliens)

   }catch(err){
       res.send(err + 'error')
   }
}
//get task by id
const getTaskBy = async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)

   }catch(err){
       res.send(err + 'error')
   }
}

const deleateTask = async(req,res)=>{
    try{
        const alien = await Alien.findByIdAndDelete(req.params.id)
        res.json('succesfully deleated')

    }catch(err){
        res.send(err + 'error')
    }
}



//update task by id 
const updateTaskIo = async(req,res)=>{
    try{
        const alien = await Alien.findById(req.params.id)
        alien.name = req.body.name
        const a1 =await alien.save()
        res.json(a1)

    }catch(err){
        res.send('error')
    }
}


module.exports = {createpost,getTask,deleateTask,getTaskBy,updateTaskIo}