# Api para front
Esta API contiene el listado de Resultados y el detalle de cada producto. Funciona con los paquetes mínimos para su funcionamiento

## ¿Cómo levanto la aplicación?
- docker build -t meli-api .
- docker run -d -p 3000:3000 meli-api npm start

## ¿Cuáles son los endpoints?
- /api/items?q=​ :query
- /api/items/​:id


## ¿Qué recursos usé?
- babel-register para poder codear en es6 toda la api
- express como servidor web
- cors para que el navegador deje pasar la respuesta de la api, permitiendo cualquier origin
- comprimo la respuesta json con compression
- nodemon para desarrollo y mantener el servidor corriendo

## Notas
Me faltó meter swagger y algún que otro test.