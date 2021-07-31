const GermanVerbsLib = require('german-verbs');
const GermanVerbsDict = require('german-verbs-dict/dist/verbs');
const express = require('express')

const app = express()
const port = 3045

app.use(express.static(__dirname + '/../front'))

const verben = ["hören", "gehen", "kochen"]
const temposVerbais = ["PRASENS", "PRATERITUM",]// "FUTUR1", "FUTUR2", "PERFEKT", "PLUSQUAMPERFEKT",]
  // "KONJUNKTIV1_PRASENS", "KONJUNKTIV1_FUTUR1", "KONJUNKTIV1_PERFEKT",
  // "KONJUNKTIV2_PRATERITUM", "KONJUNKTIV2_FUTUR1", "KONJUNKTIV2_FUTUR2"]

const indiceRandom =function(array){
    let indice = Math.floor(Math.random() * array.length)
    console.log(indice)
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
    let verboAtual = verben[indiceRandom(verben)]
    let tempoAtual = temposVerbais[indiceRandom(temposVerbais)]
    let tempo1 = conjugacoesTempo(tempoAtual, verboAtual)
    console.log(tempo1 )
  res.json(tempo1)
})

app.listen(port, () => {
  console.log(`Acesse http://localhost:${port}`)
})
