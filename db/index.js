const mongoose = require('mongoose')

const connectDB = async () => {
    await mongoose.connect('mongodb+srv://test:Helboal2022@pruebas.tv3oxxa.mongodb.net/?retryWrites=true&w=majority')
    console.log("MongoDB Connected")
};

module.exports = { connectDB };