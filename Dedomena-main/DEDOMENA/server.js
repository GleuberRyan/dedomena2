const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "", 
    database: "usuarios_db"
});

db.connect((err) => {
    if (err) {
        console.error("Erro ao conectar ao MySQL:", err);
        return;
    }
    console.log("Conectado ao MySQL!");
});


app.post("/criarconta", (req, res) => {
    const { name, email, senha } = req.body;
    const sql = "INSERT INTO users (name, email, senha) VALUES (?, ?, ?)";
    
    db.query(sql, [name, email, senha], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Usuário criado com sucesso!" });
    });
});


app.get("/usuarios", (req, res) => {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
