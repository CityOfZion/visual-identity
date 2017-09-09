import { h, Component } from 'preact';
import { Sticky } from 'react-sticky';
import { slide as Menu } from 'react-burger-menu';
import Scroll from 'react-scroll';
const Link = Scroll.Link;

import Header from '../Header';

import style from './style';

const PageMenu = ( props ) => {
  const {
  } = props;

  const links = [
    { name: 'Welcome', target: 'welcome' },
    { name: 'Projects', target: 'projects' },
    { name: 'Governance', target: 'governance' },
    { name: 'Resources', target: 'resources' },
  ]

  const menuLinks = links.map((link) =>
    <Link
      activeClass={ style.active }
      to={ link.target }
      spy={ true }
      smooth={ true }
      offset={ -130 }
      duration={ 500 }>
      { link.name }
    </Link>
  );

  return (
    <div class={ style.pageMenu }>
      <Sticky>
        { ({ isSticky, style }) => (
          <Header
            isSticky={ isSticky }
            links={ menuLinks }
            style={ style }
          />
        ) }
      </Sticky>

      <Menu right>
        { menuLinks }
      </Menu>
    </div>
  )
};

export default PageMenu;
