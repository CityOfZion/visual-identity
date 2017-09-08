import { h, Component } from 'preact';
import { Link } from 'preact-router/match';

import ContentWrapper from '../ContentWrapper';
import Logo from '../Logo';

import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={ style.header }>
				<ContentWrapper>
					<div class={ style.logo }>
						<Logo />
					</div>

					<nav>
						<Link activeClassName={style.active} href="/">Welcome</Link>
						<Link activeClassName={style.active} href="/profile">Projects</Link>
						<Link activeClassName={style.active} href="/profile/john">Governance</Link>
						<Link activeClassName={style.active} href="/profile/john">Resources</Link>
					</nav>
					</ContentWrapper>
			</header>
		);
	}
}
