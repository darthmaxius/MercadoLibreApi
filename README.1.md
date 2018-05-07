# Api de hoteles
Esta API contiene el listado y los filtros de hoteles. Funciona con los paquetes mínimos para su funcionamiento

## Cómo levanto la aplicación?
- docker build -t alm-api .
- docker run -d -p 3000:3000 alm-api npm start

## Cuáles son los endpoints?
- http://localhost:3000/v1/hotels acá está el listado de hoteles con dos filtros, name y stars. Ejemplo http://localhost:3000/v1/hotels?name=st&stars=1&stars=3


## Qué recursos usé?
- babel-register para poder codear en es6 toda la api
- express como servidor web
- cors para que el navegador deje pasar la respuesta de la api, permitiendo cualquier origin
- comprimo la respuesta json con compression
- nodemon para desarrollo y mantener el servidor corriendo

## Notas
Pido disculpas por no llegar a implementar persistencia en los datos. Tomemos ésto como un mvp.   El código está preparado para sacar el mock de datos e implementar el get para que retorne datos de mongoose para mongo o knex para sql como mysql, postgres, sqlite3, etc.  
Me faltó meter swagger y algún que otro test.