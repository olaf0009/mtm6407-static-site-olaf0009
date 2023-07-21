import { defaultTheme } from 'vuepress'

export default {
    lang: 'en-US',
    title: 'Hello VuePress',
    description: 'Just playing around',
    theme: defaultTheme({
        // default theme config
        logo:'images/profile.png',
        navbar: [
          {
              text: 'Home',
              link: '/',
          },
          {
            text: 'Me',
            link: '/me',
        },
          {
            text: 'Hobbies',
            link: '/hobbies',
        },
        {
            text: 'Skills',
            link: '/skills',
        },
        {
            text: 'Contact',
            link: '/contact',
        }
        ],
    }),
}