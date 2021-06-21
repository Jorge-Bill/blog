module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What the name of the (component, page or template )?'
      },
      {
        type: 'list',
        name: 'type',
        message: 'What type of structure do you need?',
        choices: ['components', 'pages', 'templates']
      }
    ],
    actions: [
      {
        type: 'add',
        path:
          '../src/{{lowerCase type}}/{{pascalCase name}}/index.jsx',
        templateFile: 'templates/component.jsx.hbs'
      },
      {
        type: 'add',
        path:
          '../src/{{lowerCase type}}/{{pascalCase name}}/styles.js',
        templateFile: 'templates/styles.js.hbs'
      }
    ]
  })
}
