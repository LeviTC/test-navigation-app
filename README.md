# navigation-app

Aplicación de ejemplo con **Expo Router** (enrutado por archivos) que combina **Drawer**, **Tabs** y **Stack** para practicar navegación anidada en React Native.

## Requisitos

- [Node.js](https://nodejs.org/) (LTS recomendado)
- [npm](https://www.npmjs.com/) (incluido con Node)
- Para probar en dispositivo: [Expo Go](https://expo.dev/go) o un emulador (Android Studio / Xcode)

## Instalación

```bash
npm install
```

## Scripts

| Comando        | Descripción                          |
|----------------|--------------------------------------|
| `npm start`    | Inicia el servidor de desarrollo Expo |
| `npm run android` | Abre en Android (con emulador/dispositivo) |
| `npm run ios`     | Abre en iOS (solo macOS + Xcode)    |
| `npm run web`     | Abre en navegador                   |
| `npm run lint`    | Ejecuta ESLint (`expo lint`)        |

## Cómo ejecutar

```bash
npm start
```

En la terminal de Expo puedes elegir abrir en web, emulador o escanear el QR con Expo Go.

## Stack técnico

- **Expo** ~54 y **expo-router** ~6 (entrada: `expo-router/entry` en `package.json`)
- **React Native** y **React** 19
- **React Navigation** (drawer, tabs, native stack vía Expo Router)
- **NativeWind** v4 y **Tailwind CSS** para estilos (`global.css` importado en `app/_layout.tsx`)

## Estructura de rutas (`app/`)

El archivo `app/index.tsx` redirige a la pantalla inicial (`/home`). El resto del flujo vive bajo grupos de rutas (carpetas entre paréntesis no aparecen en la URL, solo organizan layouts).

Resumen del árbol principal:

- **`app/_layout.tsx`**: layout raíz con `Slot` e import de estilos globales.
- **`app/(drawer)/`**: **Drawer** (`expo-router/drawer`), con pantallas como usuario y agenda, y el grupo de tabs.
- **`app/(drawer)/(tabs)/`**: **Tabs** (barra inferior); incluye el tab del **stack** y otras pestañas (por ejemplo inicio y favoritos).
- **`app/(drawer)/(tabs)/(stack)/`**: **Stack** con Home, Products, Profile, Settings y detalle dinámico `products/[id]`.

Los datos de ejemplo de productos suelen estar en `data/` (por ejemplo `products.data` referenciado desde las pantallas de productos).

## Configuración de la app

- **`app.json`**: nombre, iconos, splash y **scheme** `navigationapp` (útil para deep links).
- **Typed routes** y **React Compiler** están habilitados como experimentos en `app.json` (`experiments`).

## Recursos

- [Documentación de Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Navigation](https://reactnavigation.org/)


(Revisa el script en `scripts/reset-project.js` antes de ejecutarlo; mueve el código actual a una carpeta de ejemplo.)

## Licencia

Privado (`"private": true` en `package.json`).
