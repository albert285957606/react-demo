import React from 'react';
//import logo from './logo.svg';
import { HashRouter, Route, Switch, Redirect} from 'react-router-dom'
import Header from './common/header/index.js';
import Footable from './common/footable/index.js';
import Home from './pages/home/index.js';
import Wiki from './pages/wiki/index.js';
import Problem from './pages/problem/index.js';
import Project from './pages/project/index.js';
import Common from './common.js'


import './App.less';

class BaseHome extends React.Component{
    render(){
        return (
            <HashRouter>
            <Common>
                <Header />
                    <Switch>
                        <Route path="/" render={()=><div>hello world</div>

                        } />
                    </Switch>

                <Footable />
            </Common>

            </HashRouter>     
                
        )
    }
}

export default BaseHome;

{/*
<Route path="/home" component={Home} />
                        <Route path="/wiki" render{ () =>
                            <div>hello world</div>
                        }
                         />
                        <Route path="/problem" component={Problem} />
                        <Route path="/project" component={Project} />


<div className="logo">
                    <a href="">logo</a>
                </div>
                <div className="nav-list">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </div>*/}