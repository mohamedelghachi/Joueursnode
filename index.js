const express = require("express")

const app = express()
app.use(express.json())
const joueurs = require("./joueurs.json")


app.get("/joueurs", async (request, response) => {
    response.status(200).json(joueurs);
})

app.get("/joueurs/:id", (request, response) => {
    const id = request.params.id
    const joueur = joueurs.find((currentJ) => currentJ.id == id)
    if (joueur == undefined) {
        response.send("Aucun joueur avec cet id !")
    }
    response.status(200).json(joueur)
})
app.post("/setjouer", (request, response) => {
    const newJoueur = request.body
    joueurs.push(newJoueur);
    response.status(200).json(joueurs)
})

app.listen(82, function () {
    console.log(joueurs)
})