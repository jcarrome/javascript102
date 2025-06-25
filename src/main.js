"use strict";

const itemData = {
    item1: {
        name: 'Finalista 01',
        image: 'https://picsum.photos/seed/animal/250/200',
        photographer: 'John Doe',
        description: ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        score: 42
    },
    item2: {
        name: 'Finalista 2',
        image: 'https://picsum.photos/seed/beach/250/200',
        photographer: 'Jane Smith',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        score: 84
    },
    item3: {
        name: 'Finalista 3',
        image: 'https://picsum.photos/seed/mountain/250/200',
        photographer: 'Alice Johnson',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        score: 36
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('#items');
    const img = document.querySelector('#displayImage');
    const photographer = document.querySelector('#photographer');
    const description = document.querySelector('#description');
    const score = document.querySelector('#score');
    const btnUp = document.querySelector('#increaseScore');
    const btnDown = document.querySelector('#decreaseScore');

    // Llenar el select con los nombres
    Object.entries(itemData).forEach(([key, item]) => {
        const option = document.createElement('option');
        option.value = key;
        option.textContent = item.name;
        select.appendChild(option);
    });

    // Función para mostrar los datos del ítem seleccionado
    function mostrarItem(key) {
        const item = itemData[key];
        img.src = item.image;
        photographer.value = item.photographer;
        description.value = item.description;
        score.value = item.score;
    }

    // Mostrar el primer ítem por defecto
    select.value = Object.keys(itemData)[0];
    mostrarItem(select.value);

    // Cambiar datos al seleccionar otro ítem
    select.addEventListener('change', () => {
        mostrarItem(select.value);
    });

    // Aumentar puntaje
    btnUp.addEventListener('click', () => {
        itemData[select.value].score++;
        score.value = itemData[select.value].score;
    });

    // Disminuir puntaje
    btnDown.addEventListener('click', () => {
        itemData[select.value].score--;
        score.value = itemData[select.value].score;
    });
});