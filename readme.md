##Planning for Haiku Project
### Project made by Cat Janowitz and Nathan Barrett to check and randomly generate Haikus

1. Configuration / Dependencies
  * Gulp - A package which is in charge of managing all of our npm packages - sperating dev and production dependencies.
  * Browserify - A package that uses require and export keywords to translate JS to code the computer can understand.
  * Vinyl-Source-Stream - vinyl is used for putting         browserified source code into a new file
  * Gulp-Concat - A package that can combine our interface javascript files together into one monster interface.js file.
  * Gulp-Uglify - A package that minifies our JS into something that is very ugly, but very readable for the computer.
  * Gulp-util - A package that lets you set up your build environment that works with the buildProduction dependencies.
  * del - A package that allows you to remove files within the asset pipeline
  * gulp-jshint - a Package which uses a linter to look for errors within your JS files.
  * bower-files - A package which lets you use certain front-end dependencies like JQuery, Bootstrap, etc.
  * Browser-sync - A package that lets you run a local server that can update changes to your document automatically
  * Babelify - A package that transpiles our ES6 code to more univerally supported ES5
  * buildProduction - buildProduction is an environment variable indicates which environment is being used (dev or production)

####These dependencies will be declared within our gulpfile.js and used through the project.

## Specs:
| Description | Input | Output |
| :-------------     | :------------- | :------------- |
| **Syllable rule 1a** | Input: one word  | Output: number of vowels in word |
| **Syllable rule 1b** | Input: one word  | Output: subtract silent vowels |
| **Syllable rule 1c** | Input: one word  | Output: subtract one vowel from every diphthong |
| **Syllable rule 1d** | Input: one word  | Output: number of vowels left is the number of syllables |
| **Syllable rule 2a** | Input: one word  | Output: decide between two middle consonants |
| **Poem has 3 lines** | Input: 3 lines of string | Output: boolean true |
| **First line has 5 syllables** | Input: first line of string | Output: boolean true |
