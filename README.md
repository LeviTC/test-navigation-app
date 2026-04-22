# navigation-app

<p align="center">
  <b>Expand the section for your language</b> · <b>Despliega la sección de tu idioma</b>
</p>

<details>
<summary><b>English</b></summary>

Sample app with **Expo Router** (file-based routing) that combines **Drawer**, **Tabs**, and **Stack** to practice nested navigation in React Native.

## Requirements

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) (comes with Node)
- To test on a device: [Expo Go](https://expo.dev/go) or an emulator (Android Studio / Xcode)

## Installation

```bash
npm install
```

## Scripts

| Command         | Description                                      |
|-----------------|--------------------------------------------------|
| `npm start`     | Start the Expo development server                 |
| `npm run android` | Open on Android (emulator or device)           |
| `npm run ios`   | Open on iOS (macOS + Xcode only)                 |
| `npm run web`   | Open in the browser                              |
| `npm run lint`  | Run ESLint (`expo lint`)                          |

## How to run

```bash
npm start
```

In the Expo terminal you can open on web, emulator, or scan the QR code with Expo Go.

## Tech stack

- **Expo** ~54 and **expo-router** ~6 (entry: `expo-router/entry` in `package.json`)
- **React Native** and **React** 19
- **React Navigation** (drawer, tabs, native stack via Expo Router)
- **NativeWind** v4 and **Tailwind CSS** for styles (`global.css` imported in `app/_layout.tsx`)

## Route structure (`app/`)

The `app/index.tsx` file redirects to the initial screen (`/home`). The rest of the flow lives under route groups (parentheses folders do not appear in the URL; they only organize layouts).

Main tree overview:

- **`app/_layout.tsx`**: root layout with `Slot` and global style import.
- **`app/(drawer)/`**: **Drawer** (`expo-router/drawer`), with screens such as user and schedule, plus the tab group.
- **`app/(drawer)/(tabs)/`**: **Tabs** (bottom bar); includes the **stack** tab and other tabs (e.g. home and favorites).
- **`app/(drawer)/(tabs)/(stack)/`**: **Stack** with Home, Products, Profile, Settings, and dynamic detail `products/[id]`.

Sample product data is usually in `data/` (e.g. `products.data` as referenced from product screens).

## App configuration

- **`app.json`**: name, icons, splash, and **scheme** `navigationapp` (useful for deep links).
- **Typed routes** and **React Compiler** are enabled as experiments in `app.json` (`experiments`).

## Resources

- [Expo documentation](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
- [React Navigation](https://reactnavigation.org/)

(Review the script in `scripts/reset-project.js` before running it; it moves the current code into a sample folder.)

## License

Private (`"private": true` in `package.json`).

</details>

<details>
<summary><b>Español</b></summary>

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

| Comando           | Descripción                                    |
|-------------------|------------------------------------------------|
| `npm start`       | Inicia el servidor de desarrollo Expo         |
| `npm run android` | Abre en Android (con emulador/dispositivo)  |
| `npm run ios`     | Abre en iOS (solo macOS + Xcode)            |
| `npm run web`     | Abre en navegador                            |
| `npm run lint`    | Ejecuta ESLint (`expo lint`)                 |

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

</details>
