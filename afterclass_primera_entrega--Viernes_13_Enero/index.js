const express=require('express');
const productsRouter=require('./routes/products.router');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/products',productsRouter);

const PORT=3000;
app.listen(PORT,() => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});