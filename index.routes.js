const { Router } = require('express');
const router = Router()

router.get('/', (req,res) => {
    res.send('Hola Mundo')
});
router.get('/mismaRuta',(req,res) => {    
    res.send('se visualiza metodo GET')
});



module.exports = router;
