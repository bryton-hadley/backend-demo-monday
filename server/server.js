// import server code: express and cors

//start by setting a variable's 
const express = require('express')

const cors = require('cors') // cross origin resource sharing


//next invoke my express variable and save to app variable

const app = express()

// set up Middleware

app.use(express.json()) // Allows server to accept Json object 

app.use(cors()) // allows server to activate CORS


//Endpoints and Database
const dummyDatabase = ['chips','dip','Ez cheese', 'Dr. Pepper', 'Wasatch Brew', 'Bratwurst', 'Sour Patch Watermelon', 'Sour Patch Original',
'Vanilla Coke', 'Prime Rib']

app.get('/api/inventory', (req, res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)

//check to see if there is a querry that come through

if(req.query.item){
    console.log('App get IF hit')

    const filteredItems = dummyDatabase.filter((food) => food.toLocaleLowerCase().includes(req.query.item.toLocaleLowerCase()))

    res.status(200).send(filteredItems)
}else {
    console.log('App get ELSE hit')
    res.status(200).send(dummyDatabase)
}


//what we want to send back 
res.status(200).send(dummyDatabase)
})

// Open up door for server to rececive request

app.listen(5050, () => {
    console.log('Server is running on port 5050')
})

app.get('/api/inventory/:id', (req, res) => {

    console.log(req.params.id)

    let index = req.params.id

     console.log(dummyDatabase[index])

     //respose
     res.status(200).send(dummyDatabase[index])
})