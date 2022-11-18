//crear boton para que al pulsarlo vuelvan a aparecer todos los pokemon

import { savePokemon } from "../api/call-to-api-list.js";
const pressBack = async (main) => {
    const returnButton = document.createElement('button');
    main.appendChild(returnButton);

    returnButton.textContent = 'Back';

    returnButton.addEventListener('click', () => {
        const removeDiv = document.querySelectorAll('div');
        removeDiv[1].remove();
        returnButton.remove();
        savePokemon();
    })
}

export { pressBack };