const GermanVerbsLib = require('german-verbs');
const GermanVerbsDict = require('german-verbs-dict/dist/verbs');
const express = require('express')

const app = express()
const port = 3030
app.use(express.static(__dirname + '/../front'))

const verben = ["hören", "gehen", "kochen"]

const verboRandom =function(){
    let indice = Math.floor(Math.random() * verben.length)
    return indice
}

const conjugacoesTempo = function(tempoVerbal, verbo){
    return {
        verbo:verbo,
        tempo : tempoVerbal,
        ich: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 1, 'S')[0],
        du: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 2, 'S')[0],
        es: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 3, 'S')[0],
        wir: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 1, 'P')[0],
        ihr: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 2, 'P')[0],
        sie: GermanVerbsLib.getConjugation(GermanVerbsDict, verbo, tempoVerbal, 3, 'P')[0],    
    }
}

app.get('/resposta', (req, res) => {
    let verboAtual = verben[verboRandom()]
    let tempo1 = conjugacoesTempo("PRASENS", verboAtual)
    console.log(tempo1)
  res.json(tempo1)
})

app.listen(port, () => {
  console.log(`Acesse http://localhost:${port}`)
})

// // hörten
// console.log(GermanVerbsLib.getConjugation(GermanVerbsDict, 'hören', 'PRATERITUM', 1, 'P'));

// // werden gehabt haben
// console.log(GermanVerbsLib.getConjugation(GermanVerbsDict, 'haben', 'FUTUR2', 3, 'P', 'HABEN'));