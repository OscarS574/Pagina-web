# Heroes App 🦸‍♂️⚡

Una aplicación web interactiva diseñada para gestionar, buscar y visualizar información detallada sobre superhéroes de diferentes universos. Construida con un enfoque modular, escalable y moderno utilizando **React** y **TypeScript**.

---

## 📁 Estructura del Proyecto

El código fuente está organizado dentro de la carpeta `src` siguiendo un diseño basado en módulos funcionales y componentes reutilizables:

* **`src/admin/`**: Módulo dedicado a la gestión administrativa de la aplicación.
    * `layouts/`: Plantillas de diseño visual para las vistas de administración.
    * `pages/`: Pantallas principales del panel de control (Admin).
* **`src/components/`**: Componentes globales y reutilizables en toda la aplicación.
    * `custom/`: Componentes personalizados específicos del negocio.
    * `ui/`: Componentes base de la interfaz de usuario (botones, inputs, tarjetas, etc.).
* **`src/heroes/`**: Módulo principal de la aplicación centrado en los superhéroes.
    * `components/`: Sub-componentes específicos del módulo (ej. tarjetas de héroes, buscador).
    * `layouts/`: Estructura visual para el ecosistema de héroes.
    * `pages/`: Vistas principales (Lista de héroes, detalle del héroe, DC, Marvel, etc.).
* **`src/lib/`**: Configuraciones generales, utilidades globales o clientes de APIs/servicios.
* **`src/router/`**: Configuración y control del sistema de enrutamiento de la aplicación.
* ** Archivos Raíz de `src/`**:
    * `HeroesApp.tsx`: Componente principal que unifica los proveedores y el enrutador.
    * `main.tsx`: Punto de entrada de la aplicación para el renderizado en el DOM.
    * `index.css`: Estilos globales del proyecto.

---

## 🛠️ Tecnologías Utilizadas

* **React** - Librería para la construcción de interfaces de usuario.
* **TypeScript** - Tipado estático para garantizar un código robusto y libre de errores en desarrollo.
* **Vite** - Entorno de desarrollo rápido y empaquetador del proyecto.
* **React Router Dom** - Gestión de rutas y navegación dinámica.
* **Tailwind CSS** (o el framework de estilos que uses) - Diseño visual responsivo y moderno.

---

## 🚀 Instalación y Desarrollo

Para ejecutar este proyecto de forma local, sigue estos pasos:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/LionxCodeDev/hero-vision.git
   cd TU_REPOSITORIO