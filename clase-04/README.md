# Clase 04 - Introducción a Mongo

## Framework Aggregate

Permite realizar operaciones de procesamiento de datos avazanda sobres documentos de una colección. Además permite hacer transformaciones complejas, combinación de datos y cálculos utilizando una serie de etapa de agregación. Cada etapa de agregación se aplica en secuencia a los documentos de entrada. O sea toma los resultados de la etapa anterior y generar una nueva salida procesada. 
IMPORTANTE: Ocurre todo dentro del motor de Mongo.

<https://www.mongodb.com/docs/manual/aggregation/>
<https://www.mongodb.com/docs/manual/reference/operator/aggregation/>
<https://www.mongodb.com/developer/products/mongodb/introduction-aggregation-framework/>

* $match: Podemos realizar condiciones para afinar nuestra búsqueda sobre documentos. Muy parecido al find()
* $project: Permite añadir, renombrar, eliminar o relizar operaciones sobre los fields de los documentos. 
* $limit: Permite delimitar la cantidad de documentos
* $group: Permite agrupar documentos con la finalidad de calcular valores basados en una colección.
* $sort: Podemos ordenar nuestros documentos basado en uno o varios fields.
* $skip: Permite saltar los documentos indicados
* $count: Permite obtener el número de documentos que tienen en la etapa especifica
* $out: Permite agregar los documentos obtenidos en una nueva colección.
* $unwind: Desarma el array y genera multiples documentos, creando una copia del documento original por cada elemento del lista (array)
* $regex: Permite usar expresiones regulares para buscar patrones en strings (like)
* $reduce: Aplicar una expresión a cada elemento de un array y acumula el resultado.
* $avg, $max, $min, $sum: Funciones de agregación para sacar el promedio, el valor máximo, el valor mínima y la sumatoria de elementos.
* $lookup: Realiza una unión entre colecciones. Es similar a una unión externa izquierda ( LEFT OUTER JOIN ). Toma documentos de una colección (de entrada) y los enriquece con los datos relaciones de otra colecciones (colección unida)

## Creando set de datos para trabajar con el framework aggregate

```js
db.facturas.insertMany(
    [
        {
            nombre: 'Monitor', total: 233.30, cliente: 'Camila'
        },
        {
            nombre: 'Guitarra', total: 433.30, cliente: 'Evelyn'
        },
        {
            nombre: 'Guitarra', total: 564.30, cliente: 'Alfredo'
        },
        {
            nombre: 'Cafetera', total: 864.2, cliente: 'Jose'
        },
        {
            nombre: 'Silla', total: 478.8, cliente: 'Marcos'
        },
        {
            nombre: 'Televisor', total: 485.8, cliente: 'Tomas'
        },
        {
            nombre: 'Celular', total: 567.4, cliente: 'Maximiliano'
        },
        {
            nombre: 'Monitor', total: 879.2, cliente: 'Juan'
        },
        {
            nombre: 'Celular', total: 878.0, cliente: 'Roberto'
        },
        {
            nombre: 'Zapatos', total: 111.4, cliente: 'Maximiliano'
        },
        {
            nombre: 'Silla', total: 50.8, cliente: 'Tomas'
        },
    ]
)
```

## Laboratorio usando Framework Aggregate

> Averiguar cuanto dinero gasto cada cliente

```js
db.facturas.find({})
db.facturas.aggregate(
    [ /* [] ---> Pipeline */
        { /* Stage 1 */
            $match: {}
        },
        { /* Stage 2 */
            $count: 'totalFacturas'
        }
    ]
)
// ---
db.facturas.aggregate(
    [ /* [] ---> Pipeline */
        { /* Stage 1 */
            $match: {}
        },
        { /* stage 2 */
            $group: {
                _id: '$cliente',
                total: {
                    $sum: '$total'
                }
            }
        },
        { /* stage 3 */
            $sort: { total: -1 }
        }
    ]
)
```

> Cuanto dinero representaron los productos (Guitarra, Monitor, Celular)
> Ordenar el resultado en forma descendente

```js
db.facturas.aggregate(
    [
        { /* stage 1 */
            $match: {
                nombre: {
                    $in: ['Guitarra', 'Monitor', 'Celular']
                }
            }
        },
        /*   { 
            $count: 'Cantidad'
        } */
        { /* stage 2 */
            $group: {
                _id: '$nombre',
                total: { $sum: '$total' },
                valorMax: { $max: '$total' }
            }
        },
        { /* stage 3 */
            $sort: { total: -1 }
        },
        { /* stage 4 */
            $project: {
                valorMax: 1,
                totalRedondeado: { $round: ['$total', 2] }
            }
        }
    ]
)
```




