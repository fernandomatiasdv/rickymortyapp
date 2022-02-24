# App Rick y Morty.

## Instalación:

Cloná el desarrollo y ejecutá la siguiente instrucción:

```
npm install
```

```
npm run start
```
No tiene ningún archivo .env.

## Contexto:
Este desarrollo lo hice para dar la clase introductoria el curso avanzado de Front End en el instituto Plataforma5.
Los estudiantes ya vieron en un primer curso React, por este motivo se entiende que comprenden la totalidad del ejercicio.
Nota: En el curso avanzado se ve Gatsby y GraphQL. Si quieren ver el contenido que creé para ese curso lo podemos hacer en una llamada.

## Tecnologías:
React con el inicializador Create-React-App
Uso de hooks.
Uso de contexto.
Consumo de APIs públicas con Axios.
Uso de algunas funciones nativas de JavaScript para la manipulación de arrays.
Estilado y animaciones con CSS.

## Propósito:
A partir la API pública de Rick y Morty se listan los personajes en forma de cards. Éstas están contenidas en un container que, a su vez, tiene un buscador.
El buscador filtra por nombre de cada personaje.
El container incluye:
<ul>
<li>Un buscador</li>
<li>Listado de cards (Puede mostrarse información o un skeleton)</li>
</ul>
Cada card incluye:
<ul>
<li>El nombre del personaje</li>
<li>Un avatar con la foto del personaje</li>
<li>El estado del personaje. Si está vivo en color turquesa, si está muerto en rojo y si está indefinido en gris</li>
<li>Un botón Eliminar. Al presionarlo se quita al personaje del listado. Si el listado se refresca vuelva a aparecer (ya que no podemos manipular directamente al backend)</li>
</ul>

## Consideraciones particulares:
1) 
La API puede ser peticionada por una IP una determinada cantidad de veces. En caso obtener un error por la cantidad de peticiones se puede optar por DESCOMENTAR la línea 10 de /app.js y COMENTAR la línea 11 de este mismo archivo. 
Ésto provocará que se cargue un mock con la misma información que se obtiene del endpoint. En caso de querer hacer pruebas en desa es recomendable que lo utilicen.
 
2)
La API carga muy rápido por lo que no apreciarán el skeleton que contiene el container. Para simular un resultado de cómo se vería este efecto se debe DESCOMENTAR la línea 8 de /src/components/Container/index.js y COMENTAR la línea 10 del mismo archivo.

