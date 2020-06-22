import React from 'react';
import { 
	NavigationBar, 
	LinkList, 
	LinkListItem, 
	LinkListLink 
} from './style';

const Navigation = ({ routes }) =>  (
		<NavigationBar>
			<LinkList>
			{routes.map(route => 
				<LinkListItem key={route.title}>
					<LinkListLink to={route.path}>{route.title}</LinkListLink>
				</LinkListItem>
			)}
		</LinkList>
		</NavigationBar>
	)

export default Navigation;
