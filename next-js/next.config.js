const autolinkHeadings = require('remark-autolink-headings');
const collapse = require('remark-collapse');
const slug = require('remark-slug');
const toc = require('remark-toc');

const autoLinkHeadingsOptions = {
  behavior: 'prepend',
  linkProperties: {
    className: ['anchor-link'],
  },
  content: {
    type: 'element',
    tagName: 'svg',
    properties: {
      xmlns: 'http://www.w3.org/2000/svg',
      viewBox: '0 0 16 16',
      width: '1rem',
      height: '1rem',
    },
    children: [
      {
        type: 'element',
        tagName: 'path',
        properties: {
          fillRule: 'evenodd',
          d:
            'M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z',
        },
        children: [],
      },
    ],
  },
};

const tocOptions = {
  tight: true,
};

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      [collapse, { test: '' }],
      slug,
      [autolinkHeadings, autoLinkHeadingsOptions],
      [toc, tocOptions],
    ],
  },
});
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  async redirects() {
    return [
      {
        source: '/posts/media-cube',
        destination: '/media-cube',
        permanent: true,
      },
    ];
  },
});
