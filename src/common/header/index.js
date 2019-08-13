import React from 'react';
import './../style/common.less'

class Header extends React.Component{
	render(){
		return (
            <div className="header">
                <div className="nav-left">
                    <div className="logo">
                        <a href="/#/home">logo</a>
                    </div>
                    <ul>
                        <li className="nav-list"><a href="/#/wiki">wiki</a></li>
                        <li className="nav-list"><a href="/#/problem">问答</a></li>
                        <li className="nav-list"><a href="/#/project">项目</a></li>
                        <li className="nav-list"><a href="/#/group">协作</a></li>
                        <li className="nav-list"><a href="/#/school">多校</a></li>
                    </ul>
                    <ul>
                        <li className="nav-list-right"><a href="login">登陆</a></li>
                        <li className="nav-list-right"><a href="regist">注册</a></li>
                    </ul>
                </div>
                <div className="nav-right">
                    <form action="" className="nav-header-form">
                        <input type="text"/>
                    </form>
                </div>
            </div>     
		)
	}
}
export default Header;