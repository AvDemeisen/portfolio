import React from 'react'
import Navigation from '../navigation'
import { PageHeader, PageHeaderInner, PageHeaderContent } from './style'

const routes = [
  {path: '/', title: "home"},
  {path: '/about', title: "about"}, 
  {path: '/work', title: "work"}
];

const Header = () => (
      <PageHeader>
          <PageHeaderInner>
            <Navigation routes={routes}/>
            <PageHeaderContent>
                <h2>daniel devine</h2>
            </PageHeaderContent>
          </PageHeaderInner>
      </PageHeader>
);


export default Header;
