# AutoCheck Pro – Llantera Megamaxi 711

Sistema de control de Alineación, Balanceo y Enllantaje, con guardado
automático en la nube usando un repositorio de GitHub como base de datos.

## Contenido de este repositorio

- `index.html` — la aplicación completa (no necesita servidor, funciona
  abriéndola directamente en el navegador o publicada con GitHub Pages).
- `README.md` — este archivo.

## 1. Subir el proyecto a GitHub

1. Crea un repositorio nuevo en GitHub (puede ser **privado**, se recomienda).
2. Sube el archivo `index.html` (y este `README.md`) al repositorio:
   - Opción fácil: en la página del repo → **Add file → Upload files** →
     arrastra `index.html` → **Commit changes**.
   - Opción con Git:
     ```bash
     git init
     git add index.html README.md
     git commit -m "Version inicial AutoCheck Pro"
     git branch -M main
     git remote add origin https://github.com/TU_USUARIO/TU_REPO.git
     git push -u origin main
     ```
3. (Opcional) Activa **GitHub Pages** en *Settings → Pages* para tener una
   URL pública tipo `https://tu_usuario.github.io/tu_repo/` y usar la app
   desde cualquier dispositivo sin instalar nada.

## 2. Crear un Token de Acceso Personal (PAT)

La app necesita un token para poder **leer y escribir** un archivo de datos
(`llantera-data.json`) dentro de tu repositorio. Ese archivo es el que
guarda automáticamente todas las revisiones, turnos y archivos.

1. Ve a GitHub → tu foto de perfil → **Settings**.
2. **Developer settings** (al final del menú izquierdo).
3. **Personal access tokens → Fine-grained tokens → Generate new token**.
4. Configura:
   - **Repository access:** "Only select repositories" → elige tu repo.
   - **Permissions → Repository permissions → Contents:** `Read and write`.
5. Genera el token y **cópialo** (solo se muestra una vez).

> Alternativa más simple (menos segura, da acceso a todos tus repos):
> **Tokens (classic) → Generate new token (classic)** con el permiso `repo`.

⚠️ **Importante:** el token es como una contraseña. No lo compartas, no lo
subas a un repositorio público, y bórralo/regenéralo si crees que se filtró.
El token se guarda únicamente en el navegador donde configures la app
(`localStorage`), nunca se sube al repositorio.

## 3. Configurar la app

1. Abre `index.html` (localmente o desde tu URL de GitHub Pages).
2. Haz clic en el botón **"NUBE: NO CONFIGURADA"** (esquina superior derecha).
3. Completa:
   - **Usuario u Organización:** tu usuario de GitHub.
   - **Repositorio:** el nombre del repo que creaste.
   - **Rama:** normalmente `main`.
   - **Archivo de datos:** `llantera-data.json` (déjalo así, se crea solo).
   - **Token:** el que generaste en el paso anterior.
4. Clic en **"Probar Conexión"** para confirmar que todo está bien.
5. Clic en **"Guardar y Sincronizar"**.

A partir de ese momento, cada vez que agregues una revisión, un turno, un
enllantaje rápido o un archivo, la app:

- Lo guarda de inmediato en el navegador (`localStorage`), y
- Lo sube automáticamente a tu repositorio de GitHub unos segundos después
  (verás el indicador de la esquina cambiar a **"NUBE: GUARDADO"**).

Si abres la app desde otro computador y configuras los mismos datos de
GitHub, al iniciar descargará automáticamente toda la información guardada
en la nube, así nunca se pierde la información aunque cambies de equipo o
borres el navegador.

## Notas

- Si el indicador dice **"NUBE: SIN CONEXIÓN"**, revisa tu internet o vuelve
  a intentar; los cambios siguen seguros en el navegador mientras tanto.
- Si compartes el repositorio con más personas, todas verán y podrán
  modificar el mismo archivo de datos (últimos cambios sobrescriben).
- Puedes revisar el historial completo de cambios del archivo
  `llantera-data.json` directamente en GitHub (pestaña **History**).
