// Datos de películas
const moviesData = {
    current: [
        {
            title: "Dune: Parte Dos",
            cast: "Timothée Chalamet, Zendaya, Oscar Isaac",
            description: "La epopeya continúa en el planeta Arrakis. Paul Atreides debe enfrentarse a su destino mientras los poderes ocultos de el universo conspiran en su contra.",
            poster: "https://upload.wikimedia.org/wikipedia/en/5/52/Dune_Part_Two_poster.jpeg"
        },
        {
            title: "Godzilla x Kong",
            cast: "Rebecca Hall, Brian Tyree Henry, Jing Tian",
            description: "Dos titanes enfrentados en una batalla épica. El mundo debe decidir cuál de estos monstruos es el verdadero rey de los monstruos.",
            poster: "https://upload.wikimedia.org/wikipedia/en/b/be/Godzilla_x_kong_the_new_empire_poster.jpg"
        },
        {
            title: "Deadpool & Wolverine",
            cast: "Ryan Reynolds, Hugh Jackman, Emma Corrin",
            description: "El mercenario más divertido del universo se encuentra con el mutante más letal. La química entre estos personajes es explosiva.",
            poster: "https://m.media-amazon.com/images/M/MV5BZTk5ODY0MmQtMzA3Ni00NGY1LThiYzItZThiNjFiNDM4MTM3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        }
    ],
    previous: [
        {
            title: "El Exorcista: Creyente",
            cast: "Leslie Odom Jr., Ann Dowd, Lidya Jewett",
            description: "El terror regresa en esta nueva trilogía del Exorcista. Una familia ordinaria enfrenta lo extraordinario y lo malévolo.",
            poster: "https://m.media-amazon.com/images/M/MV5BMGUwY2VjMjktYzgxMS00MTRkLTliMDMtOWY5MTE5MzAyN2UyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
        },
        {
            title: "Killers of the Flower Moon",
            cast: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
            description: "Un drama de suspenso basado en hechos reales. La historia de una conspiración en las tierras de Oklahoma.",
            poster: "https://upload.wikimedia.org/wikipedia/en/8/88/Killers_of_the_Flower_Moon_film_poster.jpg"
        },
        {
            title: "Oppenheimer",
            cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
            description: "La biografía épica del padre de la bomba atómica. Una exploración de ambición, poder y consecuencias.",
            poster: "https://upload.wikimedia.org/wikipedia/en/4/4a/Oppenheimer_%28film%29.jpg"
        }
    ]
};

// Datos de cines cercanos
const cinesData = [
    {
        name: "Cine Plaza Central",
        address: "Calle Principal, 123 - Centro",
        phone: "+34 912 345 678",
        distance: "0.5 km",
        rating: 4.5,
        salas: 8,
        horario: "10:00 - 23:00"
    },
    {
        name: "Multicines Galaxy",
        address: "Avenida del Cinema, 456 - Zona Norte",
        phone: "+34 913 456 789",
        distance: "1.2 km",
        rating: 4.7,
        salas: 12,
        horario: "11:00 - 00:00"
    },
    {
        name: "Cines Select",
        address: "Boulevard de los Estrenos, 789 - Zona Sur",
        phone: "+34 914 567 890",
        distance: "2.1 km",
        rating: 4.3,
        salas: 6,
        horario: "10:30 - 22:30"
    },
    {
        name: "Cinema Premium",
        address: "Paseo de la Cultura, 321 - Este",
        phone: "+34 915 678 901",
        distance: "3.5 km",
        rating: 4.8,
        salas: 10,
        horario: "12:00 - 23:00"
    },
    {
        name: "Cine Zona Oeste",
        address: "Carretera Oeste, 654 - Oeste",
        phone: "+34 916 789 012",
        distance: "4.0 km",
        rating: 4.2,
        salas: 5,
        horario: "10:00 - 22:00"
    }
];

let currentWeek = 'current';
const modal = document.getElementById('movieModal');
const closeBtn = document.querySelector('.close-btn');
const moviesGrid = document.getElementById('moviesGrid');
const sectionTitle = document.getElementById('sectionTitle');
const cinesSection = document.getElementById('cinesSection');
const cinesGrid = document.getElementById('cinesGrid');
const cinesCercanosBtn = document.getElementById('cinesCercanos');
const buttons = document.querySelectorAll('button[data-week]');

// Función para renderizar películas
function renderMovies(week) {
    moviesGrid.innerHTML = '';
    const movies = moviesData[week];

    movies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster">
            <div class="movie-info">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-cast">
                    <strong>Protagonistas:</strong>
                    ${movie.cast}
                </div>
            </div>
        `;

        movieCard.addEventListener('click', () => openModal(movie));
        moviesGrid.appendChild(movieCard);
    });
}

// Función para abrir modal
function openModal(movie) {
    document.getElementById('modalTitle').textContent = movie.title;
    document.getElementById('modalText').innerHTML = `
        <p><strong>Protagonistas:</strong></p>
        <p>${movie.cast}</p>
        <p style="margin-top: 20px;"><strong>Sinopsis:</strong></p>
        <p>${movie.description}</p>
    `;
    modal.style.display = 'block';
}

// Función para cerrar modal
function closeModal() {
    modal.style.display = 'none';
}

// Función para renderizar cines
function renderCines() {
    cinesGrid.innerHTML = '';
    
    cinesData.forEach(cine => {
        const cineCard = document.createElement('div');
        cineCard.className = 'cine-card';
        cineCard.innerHTML = `
            <div class="cine-header">
                <h3 class="cine-name">${cine.name}</h3>
                <div class="cine-rating">
                    <i class="fas fa-star"></i> ${cine.rating}/5
                </div>
            </div>
            <div class="cine-info">
                <p><i class="fas fa-map-marker-alt"></i> <strong>${cine.distance}</strong></p>
                <p><i class="fas fa-door-open"></i> ${cine.salas} salas</p>
                <p><i class="fas fa-clock"></i> ${cine.horario}</p>
                <p><i class="fas fa-map-location"></i> ${cine.address}</p>
                <p><i class="fas fa-phone"></i> <a href="tel:${cine.phone}">${cine.phone}</a></p>
            </div>
            <button class="cine-btn-call">Llamar</button>
        `;
        
        const callBtn = cineCard.querySelector('.cine-btn-call');
        callBtn.addEventListener('click', () => {
            window.location.href = `tel:${cine.phone}`;
        });
        
        cinesGrid.appendChild(cineCard);
    });
}

// Event listeners para botones
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        cinesCercanosBtn.classList.remove('active');
        currentWeek = button.dataset.week;
        sectionTitle.textContent = currentWeek === 'current' 
            ? 'Estrenos de Esta Semana' 
            : 'Estrenos de la Semana Anterior';
        moviesGrid.style.display = 'grid';
        cinesSection.style.display = 'none';
        renderMovies(currentWeek);
    });
});

// Event listener para Cines Cercanos
cinesCercanosBtn.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    cinesCercanosBtn.classList.add('active');
    sectionTitle.textContent = 'Cines Cercanos';
    moviesGrid.style.display = 'none';
    cinesSection.style.display = 'block';
    renderCines();
});

// Event listeners para cerrar modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});

// Inicializar
renderMovies('current');
