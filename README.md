# Mercatto

Mercatto es un proyecto de ecommerce desarrollado con **React**.
La aplicación permite visualizar productos, filtrarlos por categoría, ver el detalle de cada producto, agregar productos al carrito y finalizar una orden de compra utilizando Firebase como base de datos.

## Funcionalidades

- Listar productos disponibles.
- Filtrar productos por categoría.
- Ver el detalle de un producto.
- Agregar productos al carrito.
- Visualizar el carrito de compras.
- Finalizar una orden de compra.
- Guardar órdenes en Firebase Firestore.

## Tecnologías utilizadas

Este proyecto fue desarrollado con las siguientes tecnologías:

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- [Firebase](https://firebase.google.com/)
- [Firestore](https://firebase.google.com/docs/firestore)
- [React Router](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)

## Instalación

Para instalar las dependencias del proyecto, ejecutar:

```bash
npm install
```

## Ejecución del proyecto

Para iniciar el servidor de desarrollo, ejecutar:

```bash
npm run dev
```

Luego abrir en el navegador la URL que aparece en la terminal, normalmente:

```bash
http://localhost:5173
```

## Estructura principal del proyecto

```bash
src/
├── components/
│   ├── Item.jsx
│   ├── ItemList.jsx
│   ├── ItemListContainer.jsx
│   ├── ItemDetail.jsx
│   ├── ItemDetailContainer.jsx
│   ├── CartContainer.jsx
│   ├── Checkout.jsx
│   └── Navbar.jsx
│
├── context/
│   └── CartContext.js
│
├── providers/
│   └── CartProvider.jsx
│
├── firebase/
│   ├── config.js
│   └── db.js
│
├── router/
│   └── AppRouter.jsx
│
├── App.jsx
└── main.jsx
```

## Firebase

El proyecto utiliza **Firebase Firestore** para almacenar y consultar información.

Firestore se utiliza para:

- Obtener productos desde la colección `products`.
- Filtrar productos por categoría.
- Obtener el detalle de un producto.
- Crear órdenes de compra en la colección `orders`.

## Autor

**Jonathan Aguilar**

Correo: [j.aguilar.ab47@gmail.com](mailto:j.aguilar.ab47@gmail.com)
Portfolio / GitHub: [Jonathan-aguilar-arela](https://github.com/Jonathan-aguilar-arela)

## Estado del proyecto

Proyecto desarrollado como parte del curso de React.
