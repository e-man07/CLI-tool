const fs =require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('count_words', 'count_sentence')
  .description('CLI to count words in a file', 'CLI to count senetences ina file') 
  .version('0.8.0');

program.command('count')
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const words = data.split(' ').length;
            console.log(`There are ${words} words in ${file}`);
        }
    })
  });

  program.command('count1')
  .description('Count the number of sentences in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
        } else {
            const sentences = data.split('\n').length;
            console.log(`There are ${sentences} sentences in ${file}`);
        }
    })
  });  

program.parse();