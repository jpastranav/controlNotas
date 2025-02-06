// Declaración del vector que almacenará los estudiantes
let students = [];

// Función para añadir un estudiante
function addStudent() {
    // Obtener los valores de los campos de entrada
    let nameStudent = document.getElementById("studentName").value;
    let lastNameStudent = document.getElementById("studentLastName").value;
    let idStudent = document.getElementById("studentId").value;
    let emailStudent = document.getElementById("studentEmail").value;
    let gradeStudent = document.getElementById("studentGrade").value;

    // Crear un objeto estudiante con los valores obtenidos
    let student = {
        name: nameStudent,
        lastName: lastNameStudent,
        id: idStudent,
        email: emailStudent,
        grade: gradeStudent
    };

    // Añadir el objeto estudiante al vector students
    students.push(student);
    // Mostrar un mensaje de éxito
    alert("¡Estudiante añadido exitosamente!");
    // Actualizar la lista de estudiantes mostrada
    displayStudents();
}

// Función para mostrar la lista de estudiantes
function displayStudents() {
    // Obtener el elemento HTML donde se mostrará la lista
    let studentList = document.getElementById("studentList");
    // Limpiar la lista antes de mostrar los estudiantes
    studentList.innerHTML = "";

    // Recorrer el vector students y crear un elemento <li> para cada estudiante
    students.forEach(student => {
        let listItem = document.createElement("li");
        listItem.textContent = `Nombre: ${student.name}, Apellido: ${student.lastName}, ID: ${student.id}, Email: ${student.email}, Nota: ${student.grade}`;
        // Añadir el elemento <li> al elemento <ul>
        studentList.appendChild(listItem);
    });
}

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
    });
}