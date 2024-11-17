1. Abre la terminal o consola de comandos:
Dependiendo de tu sistema operativo, puedes usar Git Bash, la terminal de Windows o la terminal de tu IDE.

2. Obtén la URL del repositorio:
Asegúrate de tener la URL del repositorio en GitHub. Para obtenerla:

Ve a tu repositorio en GitHub.
Haz clic en el botón verde que dice Code.
Copia la URL en formato HTTPS (por ejemplo, https://github.com/tu-usuario/TuturnoClinical-Proyectofinal.git).
3. Clona el repositorio:
En la terminal, usa el siguiente comando para clonar el repositorio: git clone https://github.com/tu-usuario/TuturnoClinical-Proyectofinal.git
Asegúrate de reemplazar la URL por la correcta de tu repositorio.

Esto creará una carpeta llamada TuturnoClinical-Proyectofinal con todos los archivos de tu repositorio en tu computadora.

4. Entra a la carpeta del repositorio:
Después de clonar el repositorio, cambia al directorio recién creado: cd TuturnoClinical-Proyectofinal

6. Verifica que estás en la rama master:
Una vez dentro del repositorio, ejecuta:
git branch
Deberías ver un asterisco (*) al lado de master, lo que indica que estás en esa rama.

Si no estás en la rama master, puedes cambiar a ella usando:git checkout master

*2*. Instala las dependencias:
Para instalar las dependencias del proyecto backend (Express):

Navega a la carpeta express-api:cd express-api
Una vez dentro de la carpeta express-api, ejecuta:
npm install
Esto instalará todas las dependencias necesarias que están especificadas en el archivo package.json.

Para instalar las dependencias del proyecto frontend (React):

Navega a la carpeta react-app (si la tienes):
cd ../react-app
Luego, ejecuta:
npm install

*3*. Ejecuta el servidor backend (Express):
Dentro de la carpeta express-api, puedes ejecutar el servidor con el siguiente comando:
npm start
Ejecuta la aplicación frontend (React):
Dentro de la carpeta react-app, ejecuta:npm start
Ahora podrás ver tu aplicación de React en tu navegador.







