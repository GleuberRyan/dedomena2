document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedUser = localStorage.getItem("loggedUser");

    if (!loggedUser) {
        window.location.href = "login.html";
        return;
    }

    const user = users.find(u => u.email === loggedUser);
    if (user) {
        document.getElementById("userName").textContent = user.name;
    }

    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";  
    });

    
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    const characterTemplate = document.getElementById("character-template").innerHTML;
    const compiledTemplate = Handlebars.compile(characterTemplate);
    document.getElementById("characterList").innerHTML = compiledTemplate({ characters });
});

function editCharacter(id) {
    window.location.href = `editar.html?id=${id}`;
}

function deleteCharacter(id) {
    if (confirm("Tem certeza que deseja excluir essa ficha?")) {
        let characters = JSON.parse(localStorage.getItem("characters")) || [];
        characters = characters.filter(character => character.id !== id);
        localStorage.setItem("characters", JSON.stringify(characters));
        location.reload();
    }
}

function rolardado() {
    const diceType = document.getElementById("diceType").value;
    const result = Math.floor(Math.random() * diceType) + 1;
    document.getElementById("result").innerHTML = `Você rolou um ${result}`;
}
document.addEventListener("DOMContentLoaded", function() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedUserEmail = localStorage.getItem("loggedUser");

    if (!loggedUserEmail) {
        window.location.href = "login.html";
        return;
    }

    const user = users.find(u => u.email === loggedUserEmail);
    if (user) {
        document.getElementById("userName").textContent = user.name;
    }

    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";  
    });

    
    document.getElementById("editProfileForm").addEventListener("submit", function(event) {
        event.preventDefault();
    
        const updatedName = document.getElementById("editName").value;
        const updatedEmail = document.getElementById("editEmail").value;
    
        const users = JSON.parse(localStorage.getItem("users")) || [];
        let loggedUserEmail = localStorage.getItem("loggedUser");
    
        let userIndex = users.findIndex(u => u.email === loggedUserEmail);
        
        if (userIndex !== -1) {
            users[userIndex] = { name: updatedName, email: updatedEmail };
            localStorage.setItem("users", JSON.stringify(users));
            localStorage.setItem("loggedUser", updatedEmail); 
        }
    
        window.location.href = "perfil.html"; 
    });
    

    
    document.getElementById("deleteProfileBtn").addEventListener("click", function() {
        if (confirm("Tem certeza que deseja excluir seu perfil?")) {
            
            const updatedUsers = users.filter(u => u.email !== loggedUserEmail);
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            
            localStorage.removeItem("loggedUser");

            
            window.location.href = "login.html";
        }
    });

 
    let characters = JSON.parse(localStorage.getItem("characters")) || [];
    const characterTemplate = document.getElementById("character-template").innerHTML;
    const compiledTemplate = Handlebars.compile(characterTemplate);
    document.getElementById("characterList").innerHTML = compiledTemplate({ characters });
});

function editCharacter(id) {
    window.location.href = `editar.html?id=${id}`;
}

function deleteCharacter(id) {
    if (confirm("Tem certeza que deseja excluir essa ficha?")) {
        let characters = JSON.parse(localStorage.getItem("characters")) || [];
        characters = characters.filter(character => character.id !== id);
        localStorage.setItem("characters", JSON.stringify(characters));
        location.reload();
    }
}


function rolardado() {
    const diceType = parseInt(document.getElementById("diceType").value);
    const diceQuantity = parseInt(document.getElementById("diceQuantity").value);
    const resultDiv = document.getElementById("result");

    if (!resultDiv) {
        console.error("Elemento 'result' não encontrado.");
        return;
    }

    if (isNaN(diceType) || isNaN(diceQuantity) || diceQuantity <= 0) {
        resultDiv.innerHTML = "<p style='color: red;'>Escolha valores válidos!</p>";
        return;
    }

    let results = [];
    let total = 0;

    for (let i = 0; i < diceQuantity; i++) {
        let roll = Math.floor(Math.random() * diceType) + 1;
        results.push(roll);
        total += roll;
    }

    resultDiv.innerHTML = `
        <h2>Resultados: ${results.join(", ")}</h2>
        <h2><strong>Soma total:</strong> ${total}</h2>
    `;
}

