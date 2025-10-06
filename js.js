// ============================================
// DATOS DE LOS CURSOS
// ============================================
const courses = [
    {
        id: 1,
        title: 'Fundamentos de Python',
        category: 'Programación',
        level: 'Principiante',
        duration: '8 semanas',
        students: 1250,
        rating: 4.8,
        imageClass: 'blue',
        description: 'Este curso te proporcionará los conocimientos fundamentales y prácticos necesarios para dominar fundamentos de python. Aprenderás desde los conceptos básicos hasta técnicas avanzadas utilizadas en la industria.'
    },
    {
        id: 2,
        title: 'Desarrollo Web Full Stack',
        category: 'Programación',
        level: 'Intermedio',
        duration: '12 semanas',
        students: 890,
        rating: 4.9,
        imageClass: 'cyan',
        description: 'Aprende a crear aplicaciones web completas desde cero. Domina tanto el frontend como el backend y conviértete en un desarrollador Full Stack.'
    },
    {
        id: 3,
        title: 'SQL y Diseño de BD',
        category: 'Bases de Datos',
        level: 'Principiante',
        duration: '6 semanas',
        students: 750,
        rating: 4.7,
        imageClass: 'green',
        description: 'Domina el lenguaje SQL y aprende a diseñar bases de datos eficientes y escalables para tus aplicaciones.'
    },
    {
        id: 4,
        title: 'Machine Learning Básico',
        category: 'Inteligencia Artificial',
        level: 'Intermedio',
        duration: '10 semanas',
        students: 620,
        rating: 4.9,
        imageClass: 'purple',
        description: 'Introducción práctica al Machine Learning. Aprende los algoritmos fundamentales y cómo aplicarlos a problemas reales.'
    },
    {
        id: 5,
        title: 'Seguridad en Aplicaciones',
        category: 'Ciberseguridad',
        level: 'Avanzado',
        duration: '8 semanas',
        students: 430,
        rating: 4.8,
        imageClass: 'red',
        description: 'Aprende a proteger aplicaciones contra las vulnerabilidades más comunes y mantén tus sistemas seguros.'
    },
    {
        id: 6,
        title: 'Redes y Protocolos',
        category: 'Redes',
        level: 'Intermedio',
        duration: '7 semanas',
        students: 540,
        rating: 4.6,
        imageClass: 'orange',
        description: 'Comprende el funcionamiento de las redes de computadoras y los protocolos que hacen posible la comunicación en Internet.'
    }
];

// ============================================
// RENDERIZAR CURSOS EN LA VISTA PRINCIPAL
// ============================================
function renderCourses() {
    const grid = document.getElementById('coursesGrid');
    
    grid.innerHTML = courses.map(course => `
        <div class="course-card" onclick="showCourseDetail(${course.id})">
            <div class="course-image ${course.imageClass}">
                <i data-lucide="book-open"></i>
            </div>
            <div class="course-content">
                <div class="course-header">
                    <span class="course-category">${course.category}</span>
                    <div class="course-rating">
                        <i data-lucide="star"></i>
                        <span>${course.rating}</span>
                    </div>
                </div>
                <h3 class="course-title">${course.title}</h3>
                <div class="course-info">
                    <span>${course.level}</span>
                    <span>${course.duration}</span>
                </div>
                <div class="course-footer">
                    <span class="course-students">${course.students.toLocaleString()} estudiantes</span>
                    <a href="#" class="course-link" onclick="event.preventDefault()">Ver más →</a>
                </div>
            </div>
        </div>
    `).join('');
    
    // Inicializar iconos de Lucide
    lucide.createIcons();
}

// ============================================
// MOSTRAR DETALLE DEL CURSO
// ============================================
function showCourseDetail(id) {
    const course = courses.find(c => c.id === id);
    if (!course) return;
    
    const homeView = document.getElementById('homeView');
    const detailView = document.getElementById('detailView');
    
    // Ocultar vista principal y mostrar detalle
    homeView.classList.add('hidden');
    detailView.classList.remove('hidden');
    
    // Renderizar contenido del detalle
    detailView.innerHTML = `
        <button class="back-btn" onclick="showHome()">← Volver</button>
        
        <div class="detail-image ${course.imageClass}">
            <i data-lucide="book-open"></i>
        </div>

        <h1 class="detail-title">${course.title}</h1>
        
        <div class="detail-badges">
            <span class="badge blue">${course.category}</span>
            <span class="badge green">${course.level}</span>
            <span class="badge purple">${course.duration}</span>
        </div>

        <div class="detail-card">
            <h2>Acerca del curso</h2>
            <p>${course.description}</p>
            <div class="stats-grid">
                <div class="stat">
                    <p class="stat-label">Estudiantes inscritos</p>
                    <p class="stat-value">${course.students.toLocaleString()}</p>
                </div>
                <div class="stat">
                    <p class="stat-label">Calificación</p>
                    <div class="stat-value">
                        <i data-lucide="star"></i>
                        ${course.rating}
                    </div>
                </div>
            </div>
        </div>

        <div class="detail-card">
            <h2>Temario</h2>
            <div class="modules-list">
                ${[1,2,3,4,5].map(i => `
                    <div class="module-item">
                        <div class="module-number">${i}</div>
                        <div class="module-info">
                            <h4>Módulo ${i}</h4>
                            <p>Lección de ejemplo</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <button class="enroll-btn" onclick="alert('¡Inscripción exitosa! Bienvenido al curso.')">Inscribirse Gratis</button>
    `;
    
    lucide.createIcons();
    window.scrollTo(0, 0);
}

// ============================================
// VOLVER A LA VISTA PRINCIPAL
// ============================================
function showHome() {
    const homeView = document.getElementById('homeView');
    const detailView = document.getElementById('detailView');
    
    homeView.classList.remove('hidden');
    detailView.classList.add('hidden');
    window.scrollTo(0, 0);
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    renderCourses();
    lucide.createIcons();
});