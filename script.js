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
            poster: "https://via.placeholder.com/280x420/1a1a1a/ff0000?text=El+Exorcista"
        },
        {
            title: "Killers of the Flower Moon",
            cast: "Leonardo DiCaprio, Robert De Niro, Lily Gladstone",
            description: "Un drama de suspenso basado en hechos reales. La historia de una conspiración en las tierras de Oklahoma.",
            poster: "https://via.placeholder.com/280x420/1a1a1a/ff0000?text=Killers"
        },
        {
            title: "Oppenheimer",
            cast: "Cillian Murphy, Emily Blunt, Robert Downey Jr.",
            description: "La biografía épica del padre de la bomba atómica. Una exploración de ambición, poder y consecuencias.",
            poster: "https://via.placeholder.com/280x420/1a1a1a/ff0000?text=Oppenheimer"
        }
    ]
};

let currentWeek = 'current';
const modal = document.getElementById('movieModal');
const closeBtn = document.querySelector('.close-btn');
const moviesGrid = document.getElementById('moviesGrid');
const sectionTitle = document.getElementById('sectionTitle');
const buttons = document.querySelectorAll('button');

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

// Event listeners para botones
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        currentWeek = button.dataset.week;
        sectionTitle.textContent = currentWeek === 'current' 
            ? 'Estrenos de Esta Semana' 
            : 'Estrenos de la Semana Anterior';
        renderMovies(currentWeek);
    });
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
