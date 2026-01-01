# Post App

Una aplicación simple de posts construida con **React Native**, **React Query** y **Tailwind CSS** (via NativeWind).

## Características

- Crear nuevos posts con nombre y descripción.
- Listar todos los posts en tiempo real, con actualizaciones automáticas usando **React Query**.
- Eliminar posts de manera sencilla.
- Componentes reutilizables, incluyendo botones e inputs personalizados.
- Compatibilidad con dispositivos iOS y Android.
- Interfaz moderna utilizando **Tailwind CSS** para estilos y diseño responsive.
- Accesibilidad y experiencia de usuario mejorada (manejo de loading y deshabilitado de botones durante operaciones).
- Estructura lista para escalar e integrar APIs reales.

## Estructura del Proyecto

```
src/
  api/
    postsApi.ts             // Funciones para interactuar con API de posts (mock)
  components/
    EmptyList.tsx           // Vista/Indicador para listas vacías
    Header.tsx              // Acceso a crear un nuevo post
    InputSearch.tsx         // Filtro de búsqueda
    Loading.tsx             // Componente reutilizable de carga (spinner, etc)
    NewPostSheet.tsx        // Modal tipo hoja para crear nuevos posts
    PostItem.tsx            // Componente individual de post
    PostList.tsx            // Listado de posts
  types/
    posts.interface.ts      // Definición de tipos para Post
  ui/
    Button.tsx              // Botón personalizado con variantes y loading
    IconButton.tsx          // Botón con ícono
    Input.tsx               // Input reutilizable para formularios
  data/
    fakePosts.ts            // Datos mock iniciales de posts
App.tsx                     // Punto de entrada principal de la app
```

> La estructura es modular, separando UI, lógica de negocio y manejo de datos.

## Instalación y Puesta en Marcha

1. **Clona este repositorio:**

   ```bash
   git clone https://github.com/SoyRol4ndo/postApp.git
   cd postApp
   ```

2. **Instala las dependencias:**

   ```bash
   npm install
   # o con yarn
   yarn
   ```

3. **Ejecuta la aplicación en tu dispositivo o emulador:**
   ```bash
   npm run android     # Android
   npm run ios         # iOS
   npx expo start      # También compatible con Expo Go
   ```

## Uso

- Pulsa el botón flotante (o visible según diseño) para crear un nuevo post.
- Ingresa un nombre y una descripción. El botón **Guardar** se habilita solo si ambos campos tienen contenido.
- Al confirmar, el post se agrega automáticamente y verás un indicador de carga durante el proceso.
- Los posts se muestran en una lista principal. Puedes eliminarlos pulsando el ícono de basura.
- La eliminación y creación actualizan la lista automáticamente gracias a **React Query**.

## Tecnologías Principales

- [React Native](https://reactnative.dev/)
- [React Query (TanStack)](https://tanstack.com/query/latest) — Manejo de datos asíncronos y caché.
- [Tailwind CSS & NativeWind](https://github.com/marklawlor/nativewind) — Utilidad de clases Tailwind CSS en React Native.
- [Expo](https://expo.dev/) — Flujo de desarrollo y testing.
- [clsx](https://github.com/lukeed/clsx) — Utilidad para unir clases condicionales.
- [Typescript](https://www.typescriptlang.org/) — Tipado estático y mejor DX.

## Scripts de Proyecto

- `npm run android` — Lanzar en Android.
- `npm run ios` — Lanzar en iOS.
- `npx expo start` — Ejecutar modo desarrollo.

## Contribuciones

¡Las contribuciones son bienvenidas! Abre un **issue** o **pull request** para mejoras, correcciones o nuevas funcionalidades. También puedes sugerir ideas para escalar la app (autenticación, persistencia real, mejoras UX, etc).
