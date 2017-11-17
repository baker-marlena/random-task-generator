let teamMember = [
  {text: 'You should '},
  {text: 'Slack a team member. You should both '}
]

let taskText = [
  {text: 'create a new HTML file. Link to it from index.html'},
  {text: 'create a new directory. Move at least one file into that directory.'},
  {text: 'edit five CSS properties.'},
  {text: 'remove a file other than index.html.'},
  {text: 'edit an HTML file.',
    ending: [
      ' Add a paragraph about something you like.',
      ' Add a recipe that you like using lists. '
    ]
  }
]

module.exports = {
  teamMember,
  taskText
}
