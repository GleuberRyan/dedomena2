
let characters = JSON.parse(localStorage.getItem("characters")) || [];

const characterForm = document.getElementById("characterForm");
const characterList = document.getElementById("characterList");


function saveToLocalStorage() {
    localStorage.setItem("characters", JSON.stringify(characters));
}


function renderCharacters() {
    characterList.innerHTML = ""; 
    characters.forEach((character, index) => {
        const characterItem = document.createElement("li");
        characterItem.innerHTML = `
            <strong>${character.name}</strong><br>
            Classe: ${character.class}<br>
            Nex: ${character.nex}<br>
            Nível: ${character.level}<br>
            Habilidades: ${character.abilities}<br>
            <br><strong>Atributos:</strong><br>
            Agilidade: ${character.agility}<br>
            Força: ${character.strength}<br>
            Intelecto: ${character.intelligence}<br>
            Presença: ${character.presence}<br>
            Vigor: ${character.vigor}<br>

            <button onclick="editCharacter(${index})">Editar</button>
            <button onclick="deleteCharacter(${index})">Excluir</button>
        `;
        characterList.appendChild(characterItem);
    });
}

// Função para criar ou editar uma ficha
characterForm.addEventListener("submit", function(event) {
    event.preventDefault(); 

    const name = document.getElementById("characterName").value;
    const className = document.getElementById("characterClass").value;
    const nex = document.getElementById("characterNex").value;
    const level = document.getElementById("characterLevel").value;
    const abilities = document.getElementById("characterAbilities").value;
    const agility = document.getElementById("characterAgilidade").value;
    const strength = document.getElementById("characterForça").value;
    const intelligence = document.getElementById("characterIntelecto").value;
    const presence = document.getElementById("characterPresença").value;
    const vigor = document.getElementById("characterVigor").value;
    const characterId = document.getElementById("characterId").value;

    const characterIndex = characters.findIndex(c => c.id === parseInt(characterId));

    if (characterId && characterIndex !== -1) {
        characters[characterIndex] = {
            id: parseInt(characterId),
            name,
            class: className,
            nex,
            level,
            abilities,
            agility,
            strength,
            intelligence,
            presence,
            vigor
        };
    } else {
        characters.push({
            id: Date.now(),
            name,
            class: className,
            nex,
            level,
            abilities,
            agility,
            strength,
            intelligence,
            presence,
            vigor
        });
    }

    saveToLocalStorage(); 
    characterForm.reset(); 
    document.getElementById("characterId").value = ""; 
    renderCharacters(); 
});


function editCharacter(index) {
    const character = characters[index];
    document.getElementById("characterName").value = character.name;
    document.getElementById("characterClass").value = character.class;
    document.getElementById("characterNex").value = character.nex;
    document.getElementById("characterLevel").value = character.level;
    document.getElementById("characterAbilities").value = character.abilities;
    document.getElementById("characterAgilidade").value = character.agility;
    document.getElementById("characterForça").value = character.strength;
    document.getElementById("characterIntelecto").value = character.intelligence;
    document.getElementById("characterPresença").value = character.presence;
    document.getElementById("characterVigor").value = character.vigor;
    document.getElementById("characterId").value = character.id; 
}


function deleteCharacter(index) {
    if (confirm("Tem certeza que deseja excluir essa ficha?")) {
        characters.splice(index, 1); 
        saveToLocalStorage(); 
        renderCharacters(); 
    }
}


renderCharacters();

characters.push({
    id: Date.now(), 
    name,
    class: className,
    nex,
    level,
    abilities,
    agility,
    strength,
    inteligence,
    presence,
    vigor
});
