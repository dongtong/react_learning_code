/*
* @class Comment
*/

import React from 'react';

class Comment extends React.Component {
	render() {
		return (
			<div className="comment">
				<h2 className="authorName">
					{this.props.author}
				</h2>
				<span dangerouslySetInnerHTML={this.rawMarkup()}/>
			</div>
		);
	}

	rawMarkup() {
		var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    	return { __html: rawMarkup };
	}
}

export {Comment};
