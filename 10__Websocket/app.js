const express=require('express');
const handlebars=require('express-handlebars');
const {Server}=require('socket.io')

const app=express();

const PORT=8080;
const httpServer=app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
const socketServer=new Server(httpServer);

app.engine('handlebars',handlebars.engine());
app.set('views',__dirname+'/views');
app.set('view engine','handlebars');
app.use(express.static(__dirname+'/public'));

app.get('/',(req,res) => {
    res.render('index',{});
});

socketServer.on('connection', (socket) => {
    socket.on('mensaje',(msj) => {
        console.log('Recibi un mensaje que dice: '+msj);
    });
    socket.emit('singlecast', 'Este es un mensaje singlecast');
    socket.broadcast.emit('broadcast', 'Este es un mensaje broadcast');
    socketServer.emit('multicast', 'Es te es un mensaje multicast');
});
