const chalk = require('chalk');
const log = console.log;
const inquirer = require('inquirer');


// // Combine styled and normal strings
// log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// // Compose multiple styles using the chainable API
// log(chalk.blue.bgRed.bold('Hello world!'));

// // Pass in multiple arguments
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// // Nest styles
// log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// // Nest styles of the same type even (color, underline, background)
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.blue.underline.bold('with a blue substring') +
//     ' that becomes green again!'
// ));
inquirer
.prompt([
    {type: 'list',
    message: chalk.yellow("Lets lay down the ground rules for the game! Are you ready?"),
    name: 'choice',
    choices: [
        'yes',
        'no',
        'maybe'
    ]}
])
        /* Pass your questions in here */
    .then(answers => {
      // Use user feedback for... whatever!!
      console.log(answers);
    })
    .catch(error => {
      if(error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else when wrong
      }

log(chalk.black(
    '========================================================================================================'
));

log(chalk.yellow(
    "Lets lay down the ground rules for the game!"
));

log(chalk.black(
    '========================================================================================================'
));

log(chalk.red(
    'So here is how it works. The game will start with two options to pick from.'
))


log(chalk.green(
	"It's going to be up to you to "  +
	chalk.blue.bgGreen.underline.bold('to choose the ONE CORRECT OPTION!!!') 
));

log(chalk.blue(
    'If you choose correctly your choices ' + chalk.yellow.bgRed.underline.bold('DOUBLE!!!!') + ' and you choose again!'

))

log(chalk.blackBright(
    "There is only " + chalk.white.bgBlack.underline.bold("ONE CORRECT OPTION") + " each time",
));

log(chalk.black(
    "Will you take your time, or follow your gut......."

))

log(chalk.red(
    "think you've got " + chalk.magentaBright.bold("the Luck of The Gods?")
))


  });