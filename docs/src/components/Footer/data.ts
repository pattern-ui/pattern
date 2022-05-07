import { LinksGroupProps } from './LinksGroup/LinksGroup';

export const FOOTER_LINKS_DATA: LinksGroupProps[] = [
  {
    title: 'About',
    data: [
      { type: 'gatsby', label: 'Contribute', link: '/pages/contributing/' },
      { type: 'gatsby', label: 'Media assets', link: '/assets/' },
      { type: 'gatsby', label: 'Changelog', link: '/pages/changelog/' },
      { type: 'link', label: 'Releases', link: 'https://github.com/pattern-ui/pattern/releases' },
    ],
  },

  {
    title: 'Community',
    data: [
      { type: 'link', label: 'Chat on Discord', link: 'https://discord.gg/comingsoon' },
      { type: 'link', label: 'Follow on Twitter', link: 'https://twitter.com/pattern-ui' },
      { type: 'link', label: 'Follow on Github', link: 'https://github.com/lokielse' },
      {
        type: 'link',
        label: 'GitHub discussions',
        link: 'https://github.com/pattern-ui/pattern/discussions',
      },
    ],
  },
  {
    title: 'Project',
    data: [
      { type: 'link', label: 'Pattern UI', link: 'https://ui.pattern.icu/' },
      { type: 'link', label: 'Documentation', link: 'https://pattern.icu/' },
      { type: 'link', label: 'Github organization', link: 'https://github.com/pattern-ui' },
      { type: 'link', label: 'npm organization', link: 'https://www.npmjs.com/org/pattern' },
    ],
  },
];
