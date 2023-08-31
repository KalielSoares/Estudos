const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const checkListRouter = require('./src/routes/checklist');
const rootRouter = require('./src/routes/index');
const taskRouter = require('./src/routes/tasks');

require('./config/database');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method', { methods: ['POST', 'GET']}));

app.set('views', path.join(__dirname, 'src/views'));
app.set('view engine', 'ejs');

app.use('/', rootRouter);
app.use('/checklist', checkListRouter);
app.use('/checklist', taskRouter.checklistDependent);


app.listen(3000, ()=>{
  console.log('Server iniciado');
})