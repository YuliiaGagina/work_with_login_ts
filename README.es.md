## Подготовка к работе

1. Asegúrate de que la versión LTS de Node.js está instalada en tu computador.
   [Descárguela e instálela](https://nodejs.org/en/) de ser necesario.
2. Instala las dependencias base del proyecto con el comando `npm install`.
3. Inicia el modo de desarrollo ejecutando el comando `npm start`.
4. En tu navegador, ve a la dirección
   [http://localhost:3000](http://localhost:3000). Esta página se recargará
   automáticamente después de guardar los cambios en los archivos del proyecto.



### Enrutamiento

Si la aplicación utiliza la librería `react-router-dom` para el enrutamiento, el
componente `<BrowserRouter>` debe ser configurado adicionalmente pasando en la
prop `basename`, el nombre exacto de tu repositorio. Las barras inclinadas al
principio y al final de la cadena son obligatorias.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
