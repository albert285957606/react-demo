import React,{ Fragment } from 'react';
import './index.less';

class Footable extends React.Component{
	render(){
		return (
			<Fragment>
				<div className="footable">
	                <div className="content">
	                    <div className="logo">
	                        <a href="#">logo</a>
	                    </div>
	                    <div className="col-1">
	                        <ul>
	                            <li>导航</li>
	                            <li>wiki</li>
	                            <li>问答</li>
	                            <li>项目</li>
	                        </ul>
	                    </div>
	                    <div className="col-2">
	                        <ul>
	                            <li>联系我们</li>
	                            <li>whxy</li>
	                            <li>意见反馈</li>
	                            <li>关于我们</li>
	                        </ul>
	                    </div>
	                    <div className="col-3">
	                        <ul>
	                            <li>友情链接</li>
	                            <li>官网</li>
	                            <li>官网</li>
	                            <li>官网</li>
	                        </ul>
	                    </div>
	                </div>
	                <div className="erweima">
	                    <div className="nav-erweima">
	                        <a href="#">erweima</a>
	                    </div>
	                </div>
	            </div>

	            <hr/>
	            <div className="banquan">
	                <i>
	Copyright © 2017 火花空间. All Rights Reserved. 京ICP备17043230号-1
	</i>
	            </div>
			</Fragment>
  
		)
	}
}
export default Footable;