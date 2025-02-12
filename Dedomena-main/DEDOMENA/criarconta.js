let users = JSON.parse(localStorage.getItem("users")) || [];
let currentId = users.length > 0 ? Math.max(...users.map((u) => u.id)) + 1 : 1;

const userForm = document.getElementById("userForm");

function saveToLocalStorage() {
    localStorage.setItem("users", JSON.stringify(users));
}

function saveUser(event) {
    event.preventDefault();

    const id = document.getElementById("userId").value;
    const name = document.getElementById("userName").value;
    const email = document.getElementById("userEmail").value;
    const senha = document.getElementById("userSenha").value;
    const type = document.getElementById("userType").value;

    if (id) {
        const user = users.find((u) => u.id === parseInt(id));
        user.name = name;
        user.email = email;
        user.senha = senha;
        user.type = type;
    } else {
        users.push({ id: currentId++, name, email, senha, type });
    }

    saveToLocalStorage();
    userForm.reset();
    alert("Conta criada com sucesso!");
    window.location.href = "login.html";
}

userForm.addEventListener("submit", saveUser);

function editUser(id) {
    const user = users.find((u) => u.id === id);
    document.getElementById("userId").value = user.id;
    document.getElementById("userName").value = user.name;
    document.getElementById("userEmail").value = user.email;
    document.getElementById("userSenha").value = user.senha;
    document.getElementById("userType").value = user.type;
}

function deleteUser(id) {
    users = users.filter((u) => u.id !== id);
    saveToLocalStorage(); 
    renderTable();
}


userForm.addEventListener("submit", saveUser);


renderTable();
