import React from 'react';
//import logo from './logo.svg';
import './index.less';

class App extends React.Component{
	render(){
		return(
			<div className="content">
				<div className="content-left">
					<div className="wiki-category">
						<div className="wiki-category-header">
							创客教育
						</div>
						<ul>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
							<li>导论实验课</li>
						</ul>
					</div>
				</div>				
				<div className="content-right">
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
		)
	}
}


export default App;