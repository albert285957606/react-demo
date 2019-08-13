import React,{ Fragment } from 'react';
import './index.less';

class Project extends React.Component{
	render(){
		return(
			<div className="procontent">
				<div className="nav-left">
					<div className="archive-top">
						<div className="archive-left">
							<ul>
								<li>所有问题</li>
								<li>开源硬件</li>
								<li>web学习</li>
							</ul>
						</div>
						<div className="archive-right">
							<ul>
								<li>热门</li>
								<li>最新</li>
								<li>未解决</li>
							</ul>
						</div>
					</div>
					<hr />
					<div className="project-list">
						<ul>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
							<li>猫·车——一种新型的逗猫方式</li>
						</ul>
					</div>
				</div>
				<div className="nav-right">
					<div className="create-Button">
						<a href="#">create</a>
					</div>
					<div className="top-wiki">
						<p>推荐项目</p>
					</div>
					<hr />
					<div className="top-wiki-list">
						<ul>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
							<li>创客兴趣项目</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Project;

/*<div className="archive-left">
							<ul>
								<li>所有问题</li>
								<li>开源硬件</li>
								<li>web学习</li>
							</ul>
						</div>
						<div className="archive-right">
							<ul>
								<li>热门</li>
								<li>最新</li>
								<li>未解决</li>
							</ul>
						</div>*/