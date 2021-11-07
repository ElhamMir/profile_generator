
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let results = []
rl.question('What do you think of Node.js? ', (answer) => {

  console.log(`Thank you for your valuable feedback: ${answer}`);
  ;rl.question("What's your name? ", (answer) => {
      results.push(answer)
    //console.log(`Thank you for your valuable feedback: ${answer}`);
    rl.question("What's an activity you like doing? ", (answer) => {
        results.push(answer)
        //console.log(`Thank you for your valuable feedback: ${answer}`);
        rl.question('What do you listen to while doing that? ', (answer) => {
            results.push(answer)
           // console.log(`Thank you for your valuable feedback: ${answer}`);
            rl.question('Which meal is your favourite  ', (answer) => {
                results.push(answer)
               // console.log(`Thank you for your valuable feedback: ${answer}`);
                rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
                    results.push(answer)
                    //console.log(`Thank you for your valuable feedback: ${answer}`);
                    rl.question('Which sport is your absolute favourite?', (answer) => {
                        results.push(answer)
                        //console.log(`Thank you for your valuable feedback: ${answer}`);
                        rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (answer) => {
                            results.push(answer)
                           // console.log(`Thank you for your valuable feedback: ${answer}`); 
                            //console.log(results)
    console.log("Name:  ",results[0], ", favorite activity: ",results[1], ", favorite song ",results[2], ", favorite meal: ",results[3],", favorite food ",results[4], ", favorite sport ",results[5], ", superpower "+results[6])
    rl.close();
    
  });

  
})
  
    
  });
 
   
  });
 
  
   
  });
 
   
  });
 console.log(answer)
   
  });
  
  
  });