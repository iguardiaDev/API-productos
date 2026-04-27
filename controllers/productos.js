const productos = require('../models/productos');

//GET para mostrar un id en especifico
exports.getProductsbyId = (req, res) => //req: request lo que el cliente manda y res: lo que nos devuelve
{
    let id = Number(req.params.id); //Creamos una variable que convertira el texto de la ruta a un numero
    let prod = productos.find(function(t) //Buscamos el id de la ruta
    {
        return t.id === id;
    });

    if(!prod) //Si no lo encuentra en el arreglo
    {
        //Codigos de respuesta 202 todo bien, 404 no encontrado, 500 error del servidor
        res.status(404).json({mensaje: "Producto no encontrado"}); //Muestra este mensaje
    }
    else //Si lo encuentra muestra el producto
    {
        res.json(prod);
    }

};

//GET para mostrar todos los productos, sin el id la ruta nos muestra el json de todos los productos
exports.getProducts = (req, res) => 
{
    res.json(productos);
};

//POST nos srive para poder crear un nuevo producto
exports.postProductos = (req, res) =>
{
    //Creamos un arreglo y adentro lo que compone al objeto    
    let nuevoProd =
    {
        id: productos.length + 1,
        nombre: req.body.nombre,
        precio: req.body.precio
    };

    //Agregamos el objeto al final de la lista
    productos.push(nuevoProd);

    //Muestra el objeto y un mensaje
    console.log(nuevoProd);
    res.status(201).json({mensaje: "Creado exitosamente"});

};

// //PUT nos ayudara a actualizar un producto
exports.putProductos= (req, res) => 
{
    let id = Number(req.params.id); //Creamos una variable que convertira el texto de la ruta a un numero
    let prod = productos.find(function(t) //Buscamos el id de la ruta
    {
        return t.id === id;
    }); 

    if (!prod)
    {
        res.status(404).json({mensaje: "Id no existe."});
    }
    else
    {
        //prod es el id que obtenemos del find .nombre lo que vamos a actualizar y despues del 
        // igual es el json que mandamos para atualizar los datos
        prod.nombre = req.body.nombre;
        prod.precio = req.body.precio;
        
        //Mensaje para confirmar que se actualizo correctamente
        res.status(200).json({mensaje: `Producto ${prod.nombre} actualizado.`});
    }

};

//DELETE como su nombre lo indica borrar un objeto
exports.delProducto = (req, res) => 
{
    let id = Number(req.params.id);
    let indice = productos.findIndex(function(t)
{
    return t.id == id;
});

    //Aqui comparamos lo que pedimos en la ruta y le resta uno para que lo busque en el arreglo
    if (indice === -1)
    {
        res.status(404).json({mensaje: "Id no existe."});
    }
    else
    {
        //splice es la funcion que usamos para eliminar usa dos parametros, el indice(id) y la cantidad
        let eliminado = productos.splice(indice, 1);
        res.status(200).json({mensaje: `Eliminado correctamente.`})
    }

};
