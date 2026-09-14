# Clase 02 - Introducción a MongoDB

## Arrancar el motor de MongoDB

```sh
mongod
```

## Salir del montor de DBs

Ctrl + C


## Conectar al motor de DB

```sh
mongosh
```

## Salir del cliente mongosh

```js
.exit // (Ctrl + C) * 2
```

## Mostrar las DBs disponibles (Listarlas)

```js
show dbs
```

## Cambiarme de DB o crear una DB

```sh
use <nombre-db>
use db_pescar
```

## Listar colecciones de una DB

```js
show collections
```

## Crear una colección

```js
db.createCollection('<nombre-colección>')
db.createCollection('categories')
```

## Insertar documentos en la colección

```js
db.<nombre-colección>.insertMany([{}, {}])
db.categories.insertMany([
    {
        name: 'Mouse',
        slug: 'mouse',
        description: 'Mouse para oficina y gaming',
        active: true
    },
    {
        name: 'Webcams',
        slug: 'webcams',
        description: 'Cámaras web para videoconferencias',
        active: true
    },
    {
        name: 'Almacenamiento',
        slug: 'almacenamiento',
        description: 'Discos SSD y dispositivos de almacenamiento',
        active: true
    },
])
```

```js
db.categories.insertOne(
    {
        name: "Tablets",
        slug: "tablets",
        description: "Tablets para trabajo y entrenimiento",
        active: true
    }
)
```


```js
db.categories.insertOne(
    {
        name: "Gaming",
        slug: "gaming",
        description: "Productos orientandos a gaming",
        active: false
    }
)
```

## Listando y filtrando documentos

```js
db.categories.find({ active: true }).count() // listo todos los doc que esten activos
db.categories.find({}).count() // // listo todos
db.categories.find({ active: false }).count() // listo todos los doc que esten no activos
```

## Insertar Marcas (brands)

```js
db.createCollection('brands')
db.brands.insertMany([
    {
        name: "Lenovo", 
        country: "China", 
        website: "https://www.lenovo.com", 
        active: true
    },
    {
        name: "Samsung", 
        country: "Corea del Sur", 
        website: "https://www.samsung.com", 
        active: true
    },
    {
        name: "Logitech", 
        country: "Suiza", 
        website: "https://www.logitech.com",
        active: true
    },
    {
        name: "Razer",
        country: "Estados Unidos",
        website: "https://www.razer.com",
        active: true
    },
    {
       name: "Sony",
       country: "Japón",
       website: "https://www.sony.com",
       active: true
    },
])
```

## Contar documentos de una colección

```js
db.brands.countCollecitons()
```

## 2 maneras para crear una collectión

```js
db.createCollection('<nombre-collection>') // explicita
db.products.insertOne({ name: 'Lenovo', stock: 10 }) // implicita
```  

## Creamos la entidad 'users' (Colecciones anidadas)

```js
db.users.insertMany([
    {
        firstName: 'Juan',
        lastName: 'Pérez',
        email: 'juan.perez@gmail.com',
        roles: ['customer'],
        addresses: [
            {
                alias: 'Casa',
                street: 'Av. Corrientes',
                number: 1234,
                city: 'Buenos Aires',
                postCode: 'C1043'
            },
            {
                alias: 'Trabajo',
                street: 'Av. Santa Fe',
                number: 1504,
                city: 'Buenos Aires',
                postCode: 'C1060'
            }
        ],
        preferences: {
            newsletter: true,
            language: 'es',
            currency: 'ARS'
        }
    },
    {
        firstName: "María",
        lastName: "Gómez",
        email: "maria.gomez@gmail.com",
        roles: ["customer"],
        addresses: [
            {
                alias: "Casa",
                street: "Av. Rivadavia",
                number: 2300,
                city: "Buenos Aires",
                postalCode: "C1034"
            }
        ],
        preferences: {
            newsletter: false,
            language: "es",
            currency: "ARS"
        }
    },
    {
        firstName: "Carlos",
        lastName: "Rodríguez",
        email: "carlos.rodriguez@gmail.com",
        roles: ["customer"],
        addresses: [
            {
                alias: "Casa",
                street: "Av. Belgrano",
                number: 850,
                city: "Buenos Aires",
                postalCode: "C1092"
            }
        ],
        preferences: {
            newsletter: true,
            language: "es",
            currency: "USD"
        }
    }
])
```

## Listar o filtrar dentro de documentos anidados

```js
db.users.find({ 'preferences.newsletter': true })
db.users.find({ 'preferences.currency': 'ARS' })
```  

## Proyección 

```sql
SELECT * FROM users -- todas las columnas
SELECT firstName, lastName FROM users -- quiero ver solo las columnas firstName, lastName
```

```js
db.users.find({ 'preferences.currency': 'ARS' }, { firstName: 1, lastName: 1 }) // Por defecto siempre me muestra el ObjectID
db.users.find({ 'preferences.currency': 'ARS' }, { firstName: 1, lastName: 1, _id: 0 })  
db.users.find({ 'preferences.currency': 'ARS' }, { firstName: 0, lastName: 0, _id: 0 })  // Mostrame todas los demás fields (Menos firstName, lastName)
db.users.find({ 'preferences.currency': 'ARS' }, { addresses: 0, preferences: 0, _id: 0 }) 
db.users.find({ 'preferences.currency': 'ARS' }, { addresses: 0, 'preferences.language': 0, _id: 0 }) 
```

## Documentos relacionados (Un documento que tiene identificadores de otros documento dentro)

- Clave Primaria
- Clave Foranea

```js
db.products.insertMany([
    {
        name: "Lenovo IdeaPad 5",
        sku: "LEN-ID5-001",
        description: "Notebook para trabajo y estudio",
        price: 1250000,
        stock: 15,
        categoryId: ObjectId('6aa7e80d9b295e7bf547fe2e'), /* <------------ clave foranea */
        brandId: ObjectId('6aa7ee0aadaa3ca3d3abc119'), /* <------------ clave foranea  */
        images: [
            {
                url: "/images/ideapad-front.jpg",
                alt: "Vista frontal"
            },
            {
                url: "/images/ideapad-side.jpg",
                alt: "Vista lateral"
            }
        ],
        specifications: {
            processor: "Intel Core i5",
            ram: "16 GB",
            storage: "512 GB SSD",
            screen: {
                size: 15.6,
                resolution: "1920x1080"
            }
        },
        variants: [
            {
                name: "Gris",
                sku: "LEN-ID5-GRAY",
                price: 1250000,
                stock: 8
            },
            {
                name: "Azul",
                sku: "LEN-ID5-BLUE",
                price: 1280000,
                stock: 7
            }
        ],
        tags: ["notebook", "trabajo", "estudio"],
        active: true
    },
    {
        name: "Samsung Odyssey G5",
        sku: "SAM-G5-002",
        description: "Monitor gaming curvo de 32 pulgadas",
        price: 850000,
        stock: 12,
        categoryId: ObjectId('6aa7e80d9b295e7bf547fe2f'),
        brandId: ObjectId('6aa7ee0aadaa3ca3d3abc11a'),
        images: [
            {
                url: "/images/odyssey-front.jpg",
                alt: "Monitor Samsung Odyssey"
            }
        ],
        specifications: {
        panel: "VA",
        refreshRate: "165 Hz",
        responseTime: "1 ms",
        screen: {
                size: 32,
                resolution: "2560x1440"
            }
        },
        variants: [
            {
                name: "32 pulgadas",
                sku: "SAM-G5-32",
                price: 850000,
                stock: 12
        }
        ],
        tags: ["monitor", "gaming", "1440p"],
        active: true
    }
])
```





