import React,{ Fragment } from 'react';
import './index.less';

class Problem extends React.Component{
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
					<div className="problem-list">
						<ul>
							<li>mcookie如何将收集的数据回传到手机实现控制</li>
							<li>mcookie如何将收集的数据回传到手机实现控制</li>
							<li>mcookie如何将收集的数据回传到手机实现控制</li>
							<li>mcookie如何将收集的数据回传到手机实现控制</li>
						</ul>
					</div>
				</div>
				<div className="nav-right">
					<div className="create-Button">
						<a href="#">create</a>
					</div>
					<div className="top-wiki">
						<p>精品词条</p>
					</div>
					<hr />
					<div className="top-wiki-list">
						<ul>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Problem;

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