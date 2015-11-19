/*
* @class CommentForm
*/
import React from 'react';

class CommentForm extends React.Component {
	render() {
		return (
			<form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
				<input type="text" placeholder="你的姓名" ref="author" />
				<input type="text" placeholder="说些什么..." ref="text" />
				<input type="submit" value="提交" />
			</form>
		);
	}

	handleSubmit(e) {
		e.preventDefault();
		//如果使用ES6语法，上面的this.handleSubmit需要bind(this),绑定上下文
		//console.log(this.refs)
		var author = this.refs.author.value.trim(),
			text = this.refs.text.value.trim();

		if(!author || !text) {
			return;
		}

		//TODO
		//发送请求到服务器
		//子组件回调父组件，传递信息
		this.props.onCommentSubmit({author: author, text: text});
		this.refs.author.value = '';
		this.refs.text.value = '';
		return;
	}
}

export {CommentForm};
