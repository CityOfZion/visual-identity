import { h, Component } from 'preact';
import Scroll from 'react-scroll';

const Link = Scroll.Link;

import ContentWrapper from '../ContentWrapper';
import Logo from '../Logo';

import css from './style';

const Header = ( props ) => {
	const { style } = props;

	return (
		<header class={ css.header } style={ style }>
			<ContentWrapper>
				<div class={ css.logo }>
					<Logo />
				</div>

				<nav>
					<Link activeClass={ css.active } to="welcome" spy={true} smooth={true} offset={-130} duration={500}>
            Welcome
          </Link>

          <Link activeClass={ css.active } to="projects" spy={true} smooth={true} offset={-130} duration={500}>
            Projects
          </Link>

          <Link activeClass={ css.active } to="governance" spy={true} smooth={true} offset={-130} duration={500}>
            Governance
          </Link>

          <Link activeClass={ css.active } to="resources" spy={true} smooth={true} offset={-130} duration={500}>
            Resources
          </Link>
				</nav>
			</ContentWrapper>
		</header>
	);
}

export default Header;
