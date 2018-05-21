const Blockchain = require(`./blockchain`);

const bitcoin = new Blockchain();

bitcoin.createNewBlock(2389,'0A128SBADBBAB','90SAJDNNSA9N')
bitcoin.createNewBlock(768,'0A128SBADBBAB','90SAJDNNSA9N')
bitcoin.createNewBlock(11,'0A128SBADBBAB','90SAJDNNSA9N')


console.log(bitcoin);




