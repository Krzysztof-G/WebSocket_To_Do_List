const express = require('express');
const socket = require('socket.io');

const app = express();


app.use((req, res) => {
  res.status(404).json({ message: 'Not found...' });
})

const server = app.listen(process.env.PORT || 8000, () => {
console.log('Server is running on port: 8000');
});
  
  const io = socket(server);
  
  const tasks = [];
  
  io.on('connection', (socket) => {
    console.log('New client! Its id – ' + socket.id);
  
    socket.emit('updateData', tasks);
  
    socket.on('addTask', (taskName) => {
      tasks.push(taskName);
      socket.broadcast.emit('addTask', taskName);
    });
  
    socket.on('removeTask', (taskId) => {
        const index = tasks.findIndex(item => item.id === taskId);        
        tasks.splice(index, 1);
        socket.broadcast.emit('removeTask', taskId);
    });
  });