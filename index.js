const express = require('express');
const path = require('path');
const { nextTick } = require('process');

const app = express();

//set static folder
app.use(express.static(path.join(__dirname, 'public')))


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));