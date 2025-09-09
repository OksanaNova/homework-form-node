const express = require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.urlencoded({extended: true}));
app.use(express.json());


mongoose.set('strictQuery', false);
mongoose.connect('mongodb+srv://oksana:VrIEzPYhTK9ti2DA@cluster0.fyb72nt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

const messageSchema = {
    name: String,
    email: String,
    message: String
}

const Message = mongoose.model('UserMessages', messageSchema);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/', (req, res) => {
    let myNewMessage = new Message ({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    myNewMessage.save()
    res.sendFile(__dirname + '/answer.html')
})


app.listen(3000, () => {
    console.log('Server is listening in port 3000')
})