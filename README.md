# ⏱️ Control de Horas de Trabajo

Aplicación web para registrar y controlar horas de trabajo con cálculo automático de pago, desglose por días y gestión de datos. Funciona como una PWA (Progressive Web App) que se puede instalar en PC y celulares.

## 🎯 Características

✅ **Marcar Entrada/Salida** - Registro automático de horas en formato 12 horas  
✅ **Base de Datos Local** - IndexedDB para almacenamiento seguro sin perder datos  
✅ **Desglose por Día** - Visualiza horas trabajadas organizadas por día de la semana  
✅ **Cálculo de Pago** - Automático con deducciones (FICA, Federal, NY State, SDI/PFL)  
✅ **Limpiar Datos Antiguos** - Elimina registros más antiguos de 2 semanas  
✅ **Funciona Offline** - Accede a tus datos sin conexión a internet  
✅ **PWA Instalable** - Se instala como app en PC, Android e iOS  
✅ **Múltiples Usuarios** - Cada navegador tiene su propia base de datos independiente  

## 🚀 Instalación

### Opción 1: Localmente en tu PC

```bash
# 1. Descarga o clona este repositorio
git clone https://github.com/tuusuario/workApp.git
cd workApp

# 2. Abre el archivo en tu navegador
# Haz doble clic en index.html
# O en terminal: python -m http.server 8000
# Luego: http://localhost:8000
```

### Opción 2: Subido a Netlify (Recomendado)

1. Ve a [netlify.com](https://netlify.com)
2. Arrastra y suelta la carpeta `workApp`
3. ¡Listo! Tu app estará en línea con un link único

### Opción 3: GitHub Pages

1. Sube este repositorio a GitHub
2. Ve a **Settings** → **Pages**
3. Selecciona `main` branch
4. Tu app estará en: `https://tuusuario.github.io/workApp`

## 📱 Cómo Instalar la App

### En Windows/Mac (Navegador)
1. Abre `index.html` en Chrome o Edge
2. Haz clic en el ícono de instalación (⬇️) en la barra de direcciones
3. La app aparecerá en tu escritorio

### En Android
1. Abre el link en Chrome
2. Toca el menú (⋮) → "Instalar app"
3. La app aparecerá en tu pantalla de inicio

### En iPhone/iPad
1. Abre el link en Safari
2. Toca compartir (↗️) → "Añadir a la pantalla de inicio"
3. Elige el nombre y listo

## 📋 Cómo Usar

1. **Marcar Entrada** - Haz clic en "Marcar Entrada" cuando comiences a trabajar
2. **Marcar Salida** - Haz clic en "Marcar Salida" cuando termines
3. **Ver Resumen** - Visualiza horas de hoy y acumuladas
4. **Desglose por Día** - Desplázate en la sección "📅 Horas por Día"
5. **Limpiar Datos** - Usa "Limpiar (>2 semanas)" para eliminar datos antiguos
6. **Resetear Todo** - Usa "Resetear horas" para empezar desde cero

## 🔧 Estructura de Archivos

```
workApp/
├── index.html           # Archivo principal de la app
├── manifest.json        # Configuración para PWA
├── service-worker.js    # Funcionamiento offline
└── README.md           # Este archivo
```

## 💾 Almacenamiento de Datos

- **Ubicación**: IndexedDB (base de datos local del navegador)
- **Sincronización**: No requiere internet (PWA)
- **Privacidad**: Los datos se guardan solo en tu dispositivo
- **Seguridad**: Nadie puede ver tus registros sin acceso físico

### ⚠️ Los datos se pierden si:
- Limpias el caché del navegador
- Desinstalar el navegador
- Usas pestaña privada/incógnito
- Borras manualmente con los botones "Limpiar" o "Borrar Todo"

## 👥 Múltiples Usuarios

Cada navegador tiene su propia base de datos separada:

| Usuario | Navegador | Horas | Interferencia |
|---------|-----------|-------|--------------|
| Juan | Chrome | 40 hrs | ❌ No |
| María | Firefox | 35 hrs | ❌ No |
| Pedro | Chrome | - | ✅ Comparte con Juan |

**Solución**: Cada usuario usa un navegador diferente o crea un perfil separado del navegador.

## 💰 Configuración de Pago

- **Tarifa por hora**: $25
- **Deducciones incluidas**:
  - FICA: 7.65%
  - Federal: 10%
  - NY State: 4.5%
  - SDI/PFL: 0.5%

Puedes editar la tarifa en el código (línea 4):
```javascript
const TARIFA_HORA = 25; // Cambia este número
```

## 🌐 Compartir con Otros

### Opción 1: Netlify (Fácil)
1. Sube a Netlify
2. Comparte el link `https://tuapp-xyz.netlify.app`
3. Otros hacen clic e instalan

### Opción 2: GitHub Pages
1. Sube este repo a GitHub
2. Activa GitHub Pages
3. Comparte el link `https://tuusuario.github.io/workApp`

### Opción 3: USB/Carpeta Compartida
1. Copia la carpeta `workApp` a USB
2. Otros abren `index.html` en su navegador
3. Pueden instalar la PWA

## 🛠️ Tecnologías Usadas

- **React 18** - Interfaz de usuario
- **Tailwind CSS** - Estilos y diseño responsivo
- **IndexedDB** - Base de datos local
- **Service Workers** - Funcionalidad offline
- **PWA** - Instalable como app nativa

## 📝 Requisitos

- Navegador moderno (Chrome, Firefox, Safari, Edge)
- 10 MB de espacio de almacenamiento
- Sin necesidad de servidor
- Sin contraseña requerida

## 🐛 Solución de Problemas

### "No veo el botón de instalar"
- Asegúrate de usar Chrome, Edge o Firefox
- Recarga la página (Ctrl+F5)
- Verifica que manifest.json y service-worker.js estén en la carpeta

### "Se eliminaron mis datos después de limpiar caché"
- IndexedDB se borra al limpiar caché del navegador
- Usa "Limpiar (>2 semanas)" para borrar solo datos antiguos

### "Otros usuarios ven mis datos"
- Cada navegador tiene base de datos separada
- Si comparten el mismo navegador, verán los mismos datos
- Solución: Usa perfiles diferentes del navegador

## 📞 Soporte

Si tienes problemas o sugerencias:
1. Verifica la consola del navegador (F12)
2. Intenta limpiar caché: Ctrl+Shift+Delete
3. Recarga la página

## 📄 Licencia

Este proyecto es de código abierto y libre para usar y modificar.

## 🎉 ¿Qué Sigue?

Posibles mejoras futuras:
- 📊 Gráficos de horas por semana
- 📧 Exportar datos a Excel/PDF
- 🔐 Sincronización con servidor en la nube
- 👥 Sistema de login para múltiples usuarios
- 📱 Notificaciones de recordatorio

---

**Hecho con ❤️ para gestionar tu tiempo de trabajo**

*Última actualización: 2026-07-03*
