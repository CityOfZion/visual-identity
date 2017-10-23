import { h, Component } from 'preact';
import { Router } from 'preact-router';
import { StickyContainer } from 'react-sticky';

import Footer from './Footer';
import Home from '../routes/home';
import PageMenu from './PageMenu';
// import Home from 'async!./home';

export default class App extends Component {
  constructor(props) {
    super();

    this.data = {
      page: {
        copyright: "© Copyright City of Zion, 2017"
      },
      pageMenu: {
        links: [
          { name: 'Welcome', target: 'welcome' },
          { name: 'Projects', target: 'projects' },
          { name: 'Governance', target: 'governance' },
          { name: 'Resources', target: 'resources' },
        ]
      },
      content: {
        projectList: [
          {
            description: "An Electron-based light wallet (no need for chain copy nor VM) for Windows, OSX, and Linux users.",
            heading: "Neon Wallet",
            link: "Download NEON Wallet",
            target: "http://www.neonwallet.com/",
            thumbnail: {
              alt: "Neon Wallet",
              src: "/assets/images/neon-wallet.jpg"
            }
          },
          {
            description: "COZ members coordinate efforts from multilingual translators to share information with the world.",
            heading: "Internal Documentation",
            link: "See the Internal Documentation",
            target: "https://github.com/CityOfZion/docs",
            thumbnail: {
              alt: "Internal Documentation",
              src: "/assets/images/internal-docs.jpg"
            }
          },
          {
            description: "Neoscan is a high-performance block explorer and API laying the foundation for other projects.",
            heading: "NEOScan",
            link: "View NEOScan",
            target: "https://github.com/CityOfZion/neo-scan",
            thumbnail: {
              alt: "NEOScan",
              src: "/assets/images/neo-scan.jpg"
            }
          },
          {
            description: "A crucial and never-ending process. We are always looking for contributions!",
            heading: "Security Review",
            link: "See the Security Documentation",
            target: "#securityReview",
            thumbnail: {
              alt: "Security Review",
              src: "/assets/images/security-review.jpg"
            }
          },
          {
            description: "A portal to unify developers on a single app. Supporting projects, invites, and more!",
            heading: "Neo Portal",
            link: "View the Portal",
            target: "https://github.com/CityOfZion/neo-slack-bot",
            thumbnail: {
              alt: "Neo Portal",
              src: "/assets/images/neo-portal.jpg"
            }
          },
          {
            description: "We're working on lots of things; you can follow along and help vote on priorities on our Trello!",
            heading: "More to Come...",
            link: "Check out the Trello Board",
            target: "https://trello.com/b/6TngvuLf/neoblockchaindevelopment",
            thumbnail: {
              alt: "More to come",
              src: "/assets/images/more-to-come.jpg"
            }
          },
        ],
        governanceList: [
          {
            description: "There will be a council always composed of 9 members. They are the Council team in our organization."
          },
          {
            description: "There will be a high council composed of 4 members of the council. They are the Maintainers of the Council team."
          },
          {
            description: "Any member of CoZ can create and collaborate on projects."
          },
          {
            description: "There will be a weekly report delivered to NEO by the high council via a PGP signed email and correspondent pull request on GitHub."
          },
          {
            description: "In case of any support from NEO as reward or bounty, the funds will initially be held by a trusted third party in a wallet for distribution.",
            secondary: {
              heading: "Wallet Address",
              content: "AXSoNQEKjmqPBNPg5cNrHyWivfjok3Vj9D"
            },
          },
          {
            description: "After 1 September 2017, all CoZ funds will be held in a multi-sig wallet requiring a majority of the high council to unlock funding."
          },
          {
            description: "Rewards distribution will be voted on by project before being sent. There must be a majority agreement of all 9 council members."
          },
          {
            description: "All decisions not explicitly differentiated in this list will be voted upon as in item 7."
          },
          {
            description: "Item 7 voting polls of the council will run for 1 week on the #council Slack channel and after closing will be published in the #develop channel."
          },
          {
            description: "The high council will be voted upon each quarter, synchronizing with the quarters of the year. The first election will be on 1 October 2017. The newly elected high council can propose changes to these rules during the first week after the election. Changes will be voted upon as in item 7."
          },
          {
            description: "Any member of the council or high council is free to forfeit their position at any time. When this happens, an election will take place and a majority of council members must decide upon a replacement."
          },
          {
            description: "Any member of the council that does not vote on polls for more than 2 months will automatically forfeit their position."
          },
        ],
        resources: {
          socialList: [
            { name: 'Reddit', heading: 'Subscribe', subtitle: 'to NEO Reddit', target: 'https://www.reddit.com/r/NEO/', logo: '/assets/images/reddit.png' },
            { name: 'Slack', heading: 'Join', subtitle: 'our Slack Channel', target: 'https://join.slack.com/t/neosmarteconomy/shared_invite/MjI5MTc0NTIwMDM2LTE1MDMyNDY3MDctYzQ2MzM4ZjU3ZA', logo: '/assets/images/slack.png' },
            { name: 'Github', heading: 'Fork', subtitle: 'our Github Repository', target: 'https://github.com/CityOfZion', logo: '/assets/images/github.png' },
          ]
        }
      }
    };
  }

  /** Gets fired when the route changes.
   *  @param {Object} event   "change" event from [preact-router](http://git.io/preact-router)
   *  @param {string} event.url The newly routed URL
   */
  handleRoute = e => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <StickyContainer>
          <PageMenu links={ this.data.pageMenu.links } />

          <Router onChange={ this.handleRoute }>
            <Home path="/" content={ this.data.content } />
          </Router>

          <Footer copyright={ this.data.page.copyright } />
        </StickyContainer>
      </div>
    );
  }
}
