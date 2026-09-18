print('Cursores')

print('-------------------------------------------------------------')
print('Creamos dinamicamente 100 documentos en la colección archivos')
print('-------------------------------------------------------------')

/* for (let i = 0; i < 100; i++) {
    db.archivos.insertOne(
        {
            archivo_id: i,
            nombre: 'archivo_' + i,
            created_at: new Date()
        }
    )
} */

print('------------------------------')
print('Interactuando con los cursores')
print('------------------------------')

let cursor = db.archivos.find()
//print(cursor) // <---- El cursor es un objeto
//console.dir(cursor)

print('--------------------------')
print('/* Métodos de los cursores')
print('--------------------------')

// ---------
// forEach()
// ---------

print('------------------------ forEach()')

/* cursor.forEach(function(doc) {
    print('----------')
    print(doc)
}) */

// ! -------------------------------------------------
// ! Otros métodos de los cursores (sort, skip, limit)
// ! -------------------------------------------------

cursor = db.archivos.find(
    {
        archivo_id: { $gte: 60 }
    }
)

console.log(cursor)