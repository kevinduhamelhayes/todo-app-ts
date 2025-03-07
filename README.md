# Todo App - React + TypeScript

Una aplicación de lista de tareas (Todo List) moderna y funcional construida con React y TypeScript. Esta aplicación permite gestionar tareas diarias con una interfaz de usuario limpia y atractiva.

![Todo App Screenshot](https://via.placeholder.com/800x400?text=Todo+App+Screenshot)

## Características

- ✅ Agregar nuevas tareas
- ✅ Marcar tareas como completadas
- ✅ Eliminar tareas individuales
- ✅ Filtrar tareas por estado (todas, activas, completadas)
- ✅ Eliminar todas las tareas completadas
- ✅ Contador de tareas pendientes
- ✅ Diseño responsive
- ✅ Interfaz de usuario moderna y limpia

## Tecnologías utilizadas

- React 18
- TypeScript
- Vite
- CSS moderno

## Instalación

1. Clona este repositorio:
```bash
git clone https://github.com/kevinduhamelhayes/todo-app-ts.git
cd todo-app-ts
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

4. Abre tu navegador en `http://localhost:5173`

## Estructura del proyecto

```
todo-app-ts/
├── public/
├── src/
│   ├── components/
│   │   ├── Todo.tsx
│   │   ├── TodoFilter.tsx
│   │   ├── TodoForm.tsx
│   │   └── Todos.tsx
│   ├── assets/
│   ├── App.tsx
│   ├── main.tsx
│   ├── types.tsx
│   └── index.css
├── package.json
└── tsconfig.json
```

## Scripts disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Compila la aplicación para producción
- `npm run lint` - Ejecuta el linter para verificar el código
- `npm run preview` - Previsualiza la versión de producción localmente

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Autor

Kevin Duhamel Hayes - [GitHub](https://github.com/kevinduhamelhayes)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
