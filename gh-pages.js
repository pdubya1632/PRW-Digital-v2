import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/pdubya1632/portfolio-v2.git', // Update to point to your repository
  user: {
   name: 'Patrick Wright', // update to use your name
   email: 'wrightmight@gmail.com' // Update to use your email
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);