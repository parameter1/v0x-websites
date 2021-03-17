const ads = require('./ads');
const nativeX = require('./native-x');

const topics = [
  { href: '/production-strategy', label: 'Production & Strategy' },
  { href: '/catering-design', label: 'Catering & Design' },
  { href: '/event-tech-virtual', label: 'Event Tech & Virtual' },
  { href: '/venues-destinations', label: 'Venues & Destinations' },
  { href: '/bizbash-lists', label: 'BizBash Lists' },
];

const footerItems = [
  { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
  { href: '/venue-directory', label: 'Find a Venue' },
  { href: '/supplier-directory', label: 'Find a Supplier' },
];

module.exports = {
  company: 'BizBash Media, Inc',
  ads,
  nativeX,
  logos: {
    navbar: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=60',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/BB_Logo_white_hires.png?h=120 2x',
      ],
    },
    footer: {
      src: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/bizbash-new-footer.png?h=80',
      srcset: [
        'https://img.bizbash.com/files/base/bizbash/bzb/image/static/bizbash-new-footer.png?h=160 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'instagram', href: 'https://www.instagram.com/bizbash' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/bizbash' },
    { provider: 'twitter', href: 'https://twitter.com/BizBash' },
    { provider: 'facebook', href: 'https://www.facebook.com/BizBash/' },
    { provider: 'pinterest', href: 'https://www.pinterest.com/bizbash/' },
  ],
  navigation: {
    primary: {
      items: topics,
    },
    secondary: {
      items: [
        { href: '/gathergeeks', label: 'Podcast' },
        { href: '/webinars', label: 'Webinars' },
        { href: '/page/our-events', label: 'Events & Awards' },
        { href: '/white-papers', label: 'White Papers' },
        { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
        { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise', target: '_blank' },
        { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe', target: '_blank' },
      ],
    },
    'sticky-footer': {
      items: footerItems,
    },
    menu: {
      about: {
        label: 'Get to Know Us',
        items: [
          { href: '/page/about-us', label: 'About Us' },
          { href: 'https://www.bizbashlive.com/enventu/home', label: 'Community Involvement', target: '_blank' },
          { href: 'https://www.pages03.net/collinsonpublishing/BizBashBuzz/', label: 'Subscribe to BizBash Buzz Newsletter', target: '_blank' },
          { href: 'https://bizbash.formstack.com/forms/magazinesubscribe2020', label: 'Subscribe to BizBash Magazine', target: '_blank' },
          { href: 'https://www.linkedin.com/groups/46028/', label: 'Join Our Event Pros Gather Group on LinkedIn', target: '_blank' },
          { href: 'https://www.facebook.com/groups/eventplannersgather', label: 'Join Our Event Pros Gather Group on Facebook', target: '_blank' },
          { href: 'https://www.bizbashlive.com/advertise', label: 'Advertise With Us', target: '_blank' },
          { href: '/page/contact-us', label: 'Contact Us' },
          { href: '/page/careers', label: 'Careers' },
          { href: '/page/privacy-policy', label: 'Privacy Policy' },
        ],
      },
      topics: {
        label: 'Find Inspiration',
        items: topics,
      },
      resources: {
        label: 'Other Resources',
        items: [
          { href: '/gathergeeks', label: 'Gather Geeks Podcast' },
          { href: '/webinars', label: 'Webinars' },
          { href: '/page/our-events', label: 'Events & Awards' },
          { href: '/magazine/5b2a4e6c0305572b008b45ae', label: 'Magazines' },
          { href: '/white-papers', label: 'White Papers' },
        ],
      },
    },
  },
  gtmContainer: 'GTM-5TWCFJ',
  search: {
    engine: 'bing',
    apiKey: '2682f90e71ea403b9cbf6fa7740bf006',
    domain: 'bizbash.com',
  },
  subscriptions: {
    newsletters: 'https://www.bizbash.com/subscribe/email',
    publications: {
      '/subscribe/print/bzb': 'https://www.b2bmediaportal.com/biz/bizsub.aspx',
    },
  },
  magazines: {
    description: 'We cover the event industry like no other including: planning, production, new openings, events and trends in marketing, design and style. BizBash also offers resources for event professionals like our venues and suppliers directory, trade shows, and magazines.',
  },
  contactUs: {
    branding: {
      bgColor: '#005ea0', // @todo Move to styling!
      logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    },
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'connect@bizbash.com',
    sendFrom: 'BizBash.com <noreply@bizbash.com>',
    sendBcc: 'emailactivity@cygnus.com',
    logo: 'https://img.bizbash.com/files/base/bizbash/bzb/image/static/logo/site_logo.png?h=60',
    bgColor: '#25292d', // @todo Move to styling!
    blockedEmails: [
      'salmanibhram@gmail.com',
      'salmanibrahim010@gmail.com',
      'elhameedhamza@gmail.com',
      'elhameedhamza95@gmail.com',
      'alahmadianaktor@gmail.com',
      'zamansman@gmail.com',
      'brand@weare4evr.com',
      'hello@weare4evr.com',
      'hello@weare4EVR.com',
    ],
  },
};
