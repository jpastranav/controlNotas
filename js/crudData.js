document.addEventListener("DOMContentLoaded", function () {
    let btn = document.getElementById("registerBtn");
    console.log("Botón encontrado:", btn); // Verifica que el botón existe
    if (btn) {
        btn.addEventListener("click", addStudent);
    } else {
        console.error("No se encontró el botón con id 'registerBtn'");
    }
});

let students = [];

function addStudent() {
    let nameStudent = document.getElementById("studentName").value.trim();
    let lastNameStudent = document.getElementById("studentLastName").value.trim();
    let idStudent = document.getElementById("studentID").value.trim();
    let emailStudent = document.getElementById("studentEmail").value.trim();
    let gradeStudent = document.getElementById("studentGrade").value.trim();
    let messageBox = document.getElementById("message");

    console.log("Nombre:", nameStudent);
    console.log("Apellido:", lastNameStudent);
    console.log("ID:", idStudent);
    console.log("Email:", emailStudent);
    console.log("Nota:", gradeStudent);

    // Validaciones
    if (!nameStudent || !lastNameStudent || !idStudent || !emailStudent || !gradeStudent) {
        messageBox.innerText = "Todos los campos son obligatorios.";
        messageBox.style.color = "red";
        return;
    }

    if (!validateEmail(emailStudent)) {
        messageBox.innerText = "Formato de correo inválido.";
        messageBox.style.color = "red";
        return;
    }

    if (students.some(student => student.id === idStudent)) {
        messageBox.innerText = "El ID ya está registrado.";
        messageBox.style.color = "red";
        return;
    }

    let student = {
        name: nameStudent,
        lastName: lastNameStudent,
        id: idStudent,
        email: emailStudent,
        grade: parseFloat(gradeStudent)
    };

    students.push(student);
    messageBox.innerText = "¡Estudiante añadido exitosamente!";
    messageBox.style.color = "green";
    displayStudents();
}

function displayStudents() {
    // Obtener el contenedor donde se mostrará la tabla
    let container = document.getElementById("studentsContainer");

    // Crear la tabla y su encabezado
    let table = "<table border='1'><tr><th>Nombre</th><th>Apellido</th><th>ID</th><th>Email</th><th>Nota</th></tr>";

    // Recorrer el array de estudiantes y añadir filas a la tabla
    for (let i = 0; i < students.length; i++) {
        table += "<tr><td>" + students[i].name + "</td><td>" + students[i].lastName + "</td><td>" + students[i].id + "</td><td>" + students[i].email + "</td><td>" + students[i].grade + "</td></tr>";
    }

    // Cerrar la tabla
    table += "</table>";

    // Insertar la tabla en el contenedor
    container.innerHTML = table;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
 /*
// Función para eliminar un estudiante por su ID
function removeStudent(studentId) {
    // Filtrar el vector students para excluir al estudiante con el ID proporcionado
    students = students.filter(student => student.id !== studentId);
    // Mostrar un mensaje de éxito
    alert("¡Estudiante eliminado exitosamente!");
    // Actualizar la lista de estudiantes mostrada
    displayStudents();
}

// Función para editar los datos de un estudiante por su ID
function editStudent(studentId) {
    // Obtener los nuevos valores de los campos de entrada
    let nameStudent = document.getElementById("studentName").value;
    let lastNameStudent = document.getElementById("studentLastName").value;
    let emailStudent = document.getElementById("studentEmail").value;
    let gradeStudent = document.getElementById("studentGrade").value;

    // Buscar al estudiante en el vector students por su ID
    let student = students.find(student => student.id === studentId);
    if (student) {
        // Actualizar los datos del estudiante
        student.name = nameStudent;
        student.lastName = lastNameStudent;
        student.email = emailStudent;
        student.grade = gradeStudent;
        // Mostrar un mensaje de éxito
        alert("¡Estudiante editado exitosamente!");
        // Actualizar la lista de estudiantes mostrada
        displayStudents();
    } else {
        // Mostrar un mensaje de error si el estudiante no es encontrado
        alert("Estudiante no encontrado.");
    }
}

// Función para buscar estudiantes por cualquier campo
function searchStudent(query) {
    // Filtrar el vector students para encontrar coincidencias con la consulta
    let results = students.filter(student =>
        student.name.includes(query) ||
        student.lastName.includes(query) ||
        student.id.includes(query) ||
        student.email.includes(query) ||
        student.grade.includes(query)
    );

    // Mostrar los resultados de la búsqueda
    displaySearchResults(results);
}

// Función para mostrar los resultados de la búsqueda
function displaySearchResults(results) {
    // Obtener el elemento HTML donde se mostrarán los resultados
    let searchResultsList = document.getElementById("searchResultsList");
    // Limpiar la lista antes de mostrar los resultados
    searchResultsList.innerHTML = "";

    // Recorrer el vector results y crear un elemento <li> para cada estudiante
    results.forEach(student => {
        let listItem = document.createElement("li");
        listItem.textContent = `Nombre: ${student.name}, Apellido: ${student.lastName}, ID: ${student.id}, Email: ${student.email}, Nota: ${student.grade}`;
        // Añadir el elemento <li> al elemento <ul>
        searchResultsList.appendChild(listItem);
    });*/
