/*eslint-disable */
let teamMember = [
  {text: 'You should '},
  {text: 'You should '},
  {text: 'You should '},
  {text: 'Slack your partner. You should both '}
]

let taskText = [
  {text: 'create a new HTML file. Link to it from index.html'},
  {text: 'create a new CSS file. Link to it from one of your HTML files.'},
  {text: 'create a new directory. Move at least one file into that directory.'},
  {text: 'edit five CSS properties.'},
  {text: 'remove a file other than index.html.'},
  {text: 'edit an HTML file.',
    ending: [
      ' Add a paragraph about something you like.',
      ' Add a recipe that you like using lists. '
    ]
  },
  {text: "create an array of numbers in a Javascript file, if there isn't one.",
    endings: [
      ' Write a function that generates a sum.',
      ' Write a function that returns an array of the even numbers.',
      ' Write a funciton that multiplies them togehter.'
    ]
  },
  {text: "create an array of objects. Each object should have a name and age."}
]

module.exports = {
  teamMember,
  taskText
}
