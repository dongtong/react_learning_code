/*
* @class CommentBox
*/
import React from 'react';
import {CommentList} from './CommentList.jsx';
import {CommentForm} from './CommentForm.jsx';

//class CommentBox extends React.Component {
var CommentBox = React.createClass({
	//getInitialState只能使用createClass方式定义
	getInitialState: function() {
		return {data: []};
	},

	componentDidMount: function() {
		$.ajax({
			url: this.props.url,
			dataType: 'jsonp',
			type: 'GET',
			cache: false,
			crossDomain: true,
			success: function(data){
				this.setState({data: data.provinceList});
			}.bind(this),
			error: function(xhr, status, err){
				console.error(this.props.url, status, err.toString());
			}.bind(this)
		});
	},

	render: function() {
		return (
			<div className="commentBox">
				<h1>Comments</h1>
				<CommentList data={this.state.data}/>
				<CommentForm onCommentSubmit={this.handleCommentFormSubmit}/>
			</div>
		);
	},

	handleCommentFormSubmit: function(comment){
		//Ajax Post到服务器
		var currentData = this.state.data;
		currentData.push(comment);
		this.setState({data: currentData});
	}
});

export {CommentBox};
