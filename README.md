# Post App

Una aplicación simple de posts construida con **React Native** y **Zustand** como gestor de estado.

## Características

- Crear nuevos posts con nombre y descripción.
- Listar todos los posts disponibles.
- Eliminar posts existentes fácilmente.
- UI sencilla y elegante optimizada para dispositivos móviles.

## Estructura del Proyecto

```
src/
  components/
    NewPostSheet.tsx    // Hoja para crear nuevo post
    PostItem.tsx        // Item individual de post
    PostList.tsx        // Lista de posts
  store/
    store.ts            // Zustand store para gestión de posts
  types/
    posts.interface.ts  // Definición de tipo para un Post
  data/
    fakePosts.ts        // Listado inicial de posts (mock)
App.tsx                 // Punto de entrada de la app
```

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu_usuario/post-app.git
   cd post-app
   ```

2. Instala las dependencias:

   ```bash
   npm install
   # o con yarn
   yarn install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm run android
   # o
   npm run ios
   # o con expo
   npx expo start
   ```

## Uso

- Pulsa el botón para crear un nuevo post.
- Introduce el nombre y la descripción. Pulsa **Create** para guardar.
- Los posts aparecen en la lista principal.
- Pulsa el **ícono de basura** para eliminar un post.

## Tecnologías Principales

- [React Native](https://reactnative.dev/)
- [Zustand](https://zustand-demo.pmnd.rs/)
- [Tailwind CSS (clase para RN)](https://github.com/jaredh159/tailwind-react-native-classnames)

## Contribuciones

¡Las contribuciones son bienvenidas! Abre una _issue_ o _pull request_ para mejoras, correcciones o nuevas funcionalidades.

## Licencia

MIT

---
