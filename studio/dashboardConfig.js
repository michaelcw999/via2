export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
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
                  buildHookId: '5d2e780585bfecc635217227',
                  title: 'Sanity Studio',
                  name: 'via2-studio',
                  apiId: '7747c48e-9f7c-4a25-adeb-8998d8670a1f'
                },
                {
                  buildHookId: '5d2e7805e1b91eeab1447690',
                  title: 'Landing pages Website',
                  name: 'via2',
                  apiId: 'e0a2244b-ae26-47dc-bcaa-5522484cd6f4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/michaelcw999/via2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://via2.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
