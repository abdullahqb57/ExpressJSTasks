// const express = require('express');
// const app = express();
// const port = 1234;
const fs = require('fs');

function question1(){
    fs.readFile('./text.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        
        const answer = directionsArray.reduce(function(acc, currentValue){
            if (currentValue === '('){
                 acc +=1
            } else if (currentValue === ')'){
                 acc -= 1
            }
        }, 0)
        console.timeEnd('santa-time')
        console.log(`floor :${answer}`);
    })
}
question1();

function question2(){
    fs.readFile('./text.txt', (err, data) => {
        console.time('santa-time');
        const directions = data.toString();
        const directionsArray = directions.split('');
        let accumulator = 0;
        let counter = 0;
        const answer = directionsArray.some((currentItem) => {
            if (currentItem === '('){
                 accumulator += 1
            }else if (currentItem === ')'){
                 accumulator -= 1
            }
            counter ++
            return accumulator < 0;
        })
        console.log('basement entered at:' + answer)
    }

question2();




// app.get('/', (req, res, next) => {
//     res.send('Successfull buddy');
// })
// app.listen(port, (err) => {
//     if(err){
//         throw err;
//     }else{
//         console.log(`server is running on port ${port}`)
//     }
// });