module.exports = {
  // Use the name of the repo if the content is served from GitHub Pages
  // Leave the base as '/' if serving the content from a custom domain
  base: '/',
  title: 'AMS Blockchain Week',
  head: [
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: '/ams-logo.png' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  themeConfig: {
    nav: [
      {
        text: 'Events',
        link: '/events/'
      },
      {
        text: 'Calendar',
        link: '/calendar/'
      },
      {
        text: 'Submit an Event',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSe12ruWqQfGoBi6eEHjyRejaGun6cg45hvZwtvRwmt82BQ5Bg/viewform'
      },
    ],
    logo: 'ams-logo.png',
    ga: 'G-NJKFC45RN6',
    // Assumes GitHub. Can also be a full GitLab url.
    // repo: 'nsexer/blockchainweek.fr',
    // Customising the header label
    // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
    // repoLabel: 'Contribute!',
    // Optional options for generating "Edit this page" link
    // if your docs are in a different repo from your main project:
    // docsRepo: 'vuejs/vuepress',
    // if your docs are not at the root of the repo:
    docsDir: 'docs',
    // if your docs are in a specific branch (defaults to 'master'):
    docsBranch: 'master',
    // defaults to false, set to true to enable
    editLinks: false
    // custom text for edit link. Defaults to "Edit this page"
    // editLinkText: 'Help us improve this page!'
  }
}
