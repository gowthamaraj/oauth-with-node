const express = require('express')
const auth = require('./routes/auth')
const app = express()
app.set('view engine','ejs')
app.use('/auth',auth)
app.get('/',(req,res) => {
    res.render('home')
})

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
})