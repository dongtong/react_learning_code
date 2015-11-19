/*
* @class CommentList
*/
import React from 'react';
import {Comment} from './Comment.jsx';

class CommentList extends React.Component {
	render() {
		return (
			<div className="commentList">
				{this.commentItem()}
			</div>
		);
	}

	commentItem() {
		return this.props.data.map(function(item){
			return (
				<Comment author={item.author} key={item.id}>
					{item.text}
				</Comment>
			);
		});
	}
}

export {CommentList};
