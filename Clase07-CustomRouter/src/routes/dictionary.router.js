import express from 'express';

var router = express.Router();


router.param('word',  (req, res, next, word) => {
    //lógica para este parámetro
  //  let searchWord = await dictionaryService.findWord(word);
    if (!searchWord) {
        req.word = null;
    } else {
        req.word = searchWord;
    }
  next();
})


//Filtrar los caracteres que me manden como parámetro
/*
    PERRO
    gato
*/
router.get('/:word', (req, res) => {
    res.send(req.params.word)
});

router.get('/:language/:word', (req, res) => {
    res.send(req.params.word)
});

router.get('*', (req, res) => {
    res.status(404).send("No coincide con ningún endpoint del router")
});

export default router;


