export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f9915da50c7502a629cd89c',
                  title: 'Sanity Studio',
                  name: 'sanity-test-eleventy-blog-studio',
                  apiId: 'd27c51bc-3d85-4f88-a4f9-9a828b2efaed'
                },
                {
                  buildHookId: '5f9915dacdc0462dc701dbc2',
                  title: 'Blog Website',
                  name: 'sanity-test-eleventy-blog',
                  apiId: '6941c0c1-2df1-49e4-aabb-d6a5f20fec77'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tylergaw/sanity-test-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-eleventy-blog.netlify.app', category: 'apps'}
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
