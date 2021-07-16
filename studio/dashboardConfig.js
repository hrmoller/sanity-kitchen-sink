export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60f144f40885d0c7ca7901a1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-kg9v6ox9',
                  apiId: '5ffc27c9-0981-4824-a404-5c12ffac1581'
                },
                {
                  buildHookId: '60f144f59054a6c201dc35e4',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-eh8vma22',
                  apiId: '72a77107-40b9-4755-b6f1-773e223ae028'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hrmoller/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-eh8vma22.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
