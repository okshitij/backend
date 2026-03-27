//this file starts the server

const app = require('./src/app'); //importing the server instance

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})

