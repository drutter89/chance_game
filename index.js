const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'
));


log(chalk.black(
    '========================================================================================================'
));
log(chalk.yellow(
    "Lets lay down the ground rules for the game!"
));

log(chalk.red(
    'So here is how it works. The game will start with two options to pick from. You need to guess which option is correct'
))

log(chalk.green(
	"It's going to be up to you to "  +
	chalk.blue.bgGreen.underline.bold('to choose the ONE CORRECT OPTION'), 
    ' if you choose correctly your choices double and you choose again!'
));

log(chalk.blackBright(
    "There is only " + chalk.white.bgBlack.underline.bold("ONE CORRECT OPTION") + " each time",
    "Will you take your time, or follow your gut.......think you've got the Luck of The Gods?"
));
