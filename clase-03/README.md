# Clase 03 - Introducción a MongoDB

## Levantar motor de DB

```sh
mongod
```

## Detener motor de DB

Ctrl + C

## Arrancar cliente de DB

```sh
mongosh
```

## Detener el cliente

(Ctrl + C) * 2

## Crear o cambiar de DB

```js
use <nombre-base-datos>
use db_pescar
```

## Mostrar DBs disponibles

```js
show dbs
```

## Crear una colección

```js
db.createCollection('<nombre-colección'>)
db.createCollection('personas')
```

## Listar y filtrar los elementos dentro de una DB

```js
db.<nombre-colección>.find()
db.<nombre-colección>.find({})
db.<nombre-colección>.findOne({}) // Me muestra el primer documento que encuentre según el filtro
```

## Método insertOne(): Creamos un documento dentro de la colección

```js
db.<nombre-colección>.insertOne()
db.personas.insertOne({
    nombre: 'Laura',
    edad: 43
})
```

## ObjectID

<https://www.geeksforgeeks.org/mongodb/what-is-objectid-in-mongodb/>
<https://www.mongodb.com/es/docs/manual/reference/method/objectid/>

## Método insertMany(): De uno o más documentos

```js
db.<nombre-colección>.insertMany([{}, {}, {}])
db.personas.insertMany([
    {
        nombre: 'Lorena',
        edad: 22
    }, 
    {
        nombre: 'Pedro',
        edad: 33
    }, 
    {
        nombre: 'Juan',
        edad: 18
    },
    {
        nombre: 'Micaela',
        edad: 54
    },
    {
        nombre: 'Pablo',
        edad: 87
    },
    {
        nombre: 'Geraldine',
        edad: 38
    },
    {
        nombre: 'Diego',
        edad: 78
    },
    {
        nombre: 'Sandra',
        edad: 43
    },
    {
        nombre: 'Maxi',
        edad: 34
    }
])
```

```js
db.personas.insertOne({
    _id: 1,
    nombre: 'Paula',
    edad: 68
})
```

# Operadores de comparación

<https://www.mongodb.com/docs/manual/reference/mql/query-predicates/comparison/>

## Operador -> $eq: (Igual a...)

```js
db.personas.find({
    edad: {
        $eq: 43
    }
})
```

## Operador -> $gt: (Mayor que...)


```js
db.personas.find({
    edad: {
        $gt: 43
    }
})
```

## Operador -> $gte: (Mayor o igual que...)

```js
db.personas.find({
    edad: {
        $gte: 43 /* Incluye a los documentos cuya edad sea 43 */
    }
})
```

## Operador -> $lt: (Menor que...)

```js
db.personas.find({
    edad: {
        $lt: 43
    }
})
```

## Operador -> $lte: (Menor o igual que...)

```js
db.personas.find({
    edad: {
        $lte: 43
    }
})
```

## Operador -> $ne: (No igual que...)

```js
db.personas.find({
    edad: {
        $ne: 43 /* Todos los documentos que no tengan la edad de 43 */
    }
})
```

## Operador -> $in: (Incluido en...)

```js
db.personas.find({
    edad: {
        $in: [22, 44, 34, 43, 18, 125]
    }
})
```


## Operador -> $nin: (No incluido en...)

```js
db.personas.find({
    edad: {
        $nin: [22, 44, 34, 43, 18, 125]
    }
})
```

# Operadores lógicos 

<https://www.mongodb.com/es/docs/manual/reference/mql/query-predicates/logical/>

## Operador $and (Operador lógico 'y' -> 'and')

```js
db.personas.find({
    $and: [
        {
            edad: {
                $gte: 18
            }
        },
        {
            edad: {
                $lte: 40
            }
        }
    ]
})
```

```js
db.personas.find({
    edad: {
        $gte: 18,
        $lte: 40
    }
})
```


```js
db.personas.find({
    $and: [
        {
            nombre: 'Maximo'
        },
        {
            edad: 43
        }
    ]
})
```

## Operador $or (Operador lógico 'o' -> 'or')

```js
db.personas.find({
    $or: [
        { edad: 22 },
        { nombre: 'Messi' }
    ]
})
```

# Métodos de MongoDB

## size(), count(): Nos permitia saber del resultado cuandos documentos teníamos

```js
db.personas.find({ 
    edad: { 
        $gte: 40
    }
}).count()
``` 

## limit(): Me permite limitar la cantidad de documentos que me devuelve la consulta

```js
db.personas.find().limit(3) /* Me muestra los primeros 3 */
db.personas.find().limit(5)  /* Me muestra los primeros 5 */
```

## skip(): Me permite descartar documentos de la consulta
<https://www.geeksforgeeks.org/mongodb/mongodb-skip-method/>

```js
db.personas.find().skip(3) /* Descarta los primeros 3 */
db.personas.find().skip(10) /* Descarta los primeros 10 */
```

## sort(): Me permite ordenar la información en forma ascendente y descendente

```js
db.personas.find() /* Muestra por orden de creación */
db.personas.find({}, {_id: 0}).sort( { edad: 1 }) /* 1 -> ascendente (menor a mayor) */
db.personas.find({}, {_id: 0}).sort( { edad: -1 }) /* -1 -> descendente (mayor a menor) */
db.personas.find({}, {_id: 0}).sort( { nombre: 1 }) /* 1 -> ascendente (a - z) */
db.personas.find({}, {_id: 0}).sort( { nombre: -1 }) /* -1 -> descendente (z - a) */
```

## Caso práctico, caso real (PAGINADO)

```js
db.personas.find().skip(0).limit(3) /* Primeros 3 documentos */
db.personas.find().skip(3).limit(3) /* Segundos 3 documentos */
db.personas.find().skip(6).limit(3)
db.personas.find().skip(9).limit(3)
```  

## Método updateOne(): Nos permite actualizar uno documento

Cuando tengo que actualizar documentos voy a tener por lo menos 2 grandes operadores

* Operador $set: Agregar o modificar fields y valores
* Operador $unset: Me va a permitir borrar fields y valores

```js
db.personas.find({})
db.personas.updateOne(
    {},
    {
        $set: {
            coloresFavoritos: ['rojo', 'negro', 'azul']
        }
    }
)
```

## Método updateMany(): Nos permite actualizar uno o varios documentos

```js
db.personas.find({})
db.personas.updateMany(
    {},
    {
        $set: {
            coloresFavoritos: ['verde', 'violeta', 'negro', 'azul']
        }
    }
)
```

> Quitamos de todos los documentos el field coloresFavoritos

```js
db.personas.updateMany(
    {},
    {
        $unset: {
            coloresFavoritos: 0 /* El valor puede ser cualquier cosa. */
        }
    }
)
```


## Método deleteOne(): Nos permite borrar uno documento

```js
db.personas.find(
    { 
        edad: { 
            $gte: 78 
        }
})

db.personas.deleteOne(
    { edad: { 
        $gte: 78 
    }
})
```  

## Método deleteMany(): Nos permite borrar uno o varios documentos

```js
db.personas.find(
    { edad: { 
        $gte: 78 
    }
})

db.personas.deleteMany(
    { edad: { 
        $gte: 78 
    }
})
```  

# Operadores para trabajar con listas (arrays)

## Operador $push: Me permite agregar elementos al final de una lista

```js
db.personas.find(
    {
        _id: ObjectId('6aaa8d7252f4bfc2d0d47b6c')
    }
)

// --- Agregamos el rosa y el turquesa a Lorena
db.personas.updateOne(
    {
        _id: ObjectId('6aaa8d7252f4bfc2d0d47b6c')
    },
    {
        $push: {
            coloresFavoritos: {
                $each: ['rosa', 'turquesa']
            }
        }
    }
)

// --- Intentamos sacar ['rosa', 'turquesa'] de la lista
// https://www.mongodb.com/es/docs/manual/reference/operator/update/pull/
db.personas.updateOne(
    {
        _id: ObjectId('6aaa8d7252f4bfc2d0d47b6c')
    },
    {
        $pull: {
          coloresFavoritos: ['rosa', 'turquesa']
        }
    }
)
``` 