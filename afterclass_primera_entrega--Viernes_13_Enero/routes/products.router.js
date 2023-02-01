const express=require('express');
const productsRouter=express.Router();
const {v4: uuidv4}=require('uuid');

const products=[
    {
        nombre: 'zanahoria',
        id: uuidv4(),
    },
    {
        nombre: 'papa',
        id: uuidv4(),
    },
];

productsRouter.get('/',(req,res) => {
    res.send(products)
});
productsRouter.get('/:pid',(req,res) => {
    let {pid}=req.params;
    const product=products.find(p => p.id===pid);
    res.send(product);
});
productsRouter.post('/',(req,res) => {
    const product=req.body;
    products.push({
        ...product,
        id: uuidv4(),
    });
    res.send('producto agregado');
});
productsRouter.put('/:pid',(req,res) => {
    const {pid}=req.params;
    const product=req.body;
    const p=products.find(p => p.id===pid);
    if(!!p) {
        p = {
            ...product,
            id: pid,
        }
        res.send('Producto actualizado');
    } else {
        res.status(400).send('No existe un producto con ese id');
    }
});

module.exports=productsRouter;