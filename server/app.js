const express = require('express');
const morgan = require('morgan'); //morgan logs the request info to your terminal
const ok = { status:'ok' };
const bodyParser = require('body-parser'); //bodyparser helps understand the data is json
let counter = 0

const app = express();
app.use(morgan("dev"));
app.use(bodyParser.json())
// add your code here
let mockData = 
[
    {
      todoItemId: 0,
      name: 'an item',
      priority: 3,
      completed: false
    },
    {
      todoItemId: 1,
      name: 'another item',
      priority: 2,
      completed: false
    },
    {
      todoItemId: 2,
      name: 'a done item',
      priority: 1,
      completed: true
    }
];

app.get('/', (req, res) => {
    res.status(200).send(ok); 
});

app.get('/api/TodoItems', (req, res) => {
    res.status(200).send(mockData); 
});

// app.get('/api/TodoItems/:id', (req, res) => {
//     var toDoItems = mockData[req.params.id]; 
//     res.status(200).send(toDoItems); 
// });

app.get('/api/TodoItems/1', (req, res) => {
    var toDoItemZero = mockData[0];
    res.status(200).send(toDoItemZero); 
});

app.get('/api/TodoItems/2', (req, res) => {
    var toDoItemOne = mockData[1];
    res.status(200).send(toDoItemOne); 
});

app.get('/api/TodoItems/3', (req, res) => {
    var toDoItemTwo = mockData[2];
    res.status(200).send(toDoItemTwo); 
});



app.post('/api/TodoItems', (req, res) => {  
    var length = mockData.length;

    //var bodyOfPost=
    //var bodyToDoItemId= 
    //for loop looping through length of mock data
    //created two if statements, if ID matches overwrite, if it doesn't not match push post into mockdata
    var newToDoItems = 
    {
        todoItemId: counter,  //req.body.todoItemId
        name: req.body.name,
        priority: req.body.priority,
        completed: req.body.completed
      }
      mockData.push(newToDoItems);
      counter++;
      
    res.status(201).send(newToDoItems); 
});
app.delete('/api/TodoItems/:id', (req, res) => {
    //for loop
    let delObj = [];
    const delId = req.params.id;
    for(i = 0; i < mockData.length; i++) {
        if (delId == mockData[i].todoItemId) {
            delObj = mockData.splice(i, 1);
        }
    }
    res.status(200).send(delObj[0]);
});
    
    // var delObjId = mockData.splice(req.params.id, 1);
    // console.log(delObjId);
    // res.status(200).send(delObjId); 


module.exports = app;
