const express = require('express')
const app = express()
const PORT = 3000;
const path = require('path')

const viewRouters = require('./routes/viewsRoutes');
const recipeRouters = require('./routes/recipesRoutes');
//const ejs = require('ejs');
//const { PrismaClient } = require('@prisma/client');
//const prisma = new PrismaClient();

app.use(express.json())
app.use(express.static(path.join(__dirname, '../public')));
//app.use('/css', express.static(path.join(__dirname,'css')));
//app.use('/img', express.static(path.join(__dirname,'img')));

app.set('view engine', 'ejs');
app.set('views', 'src/views');

app.use('/', viewRouters)
app.use('/recipes', recipeRouters)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})