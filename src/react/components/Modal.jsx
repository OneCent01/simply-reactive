import React from 'react'

export default class Modal extends React.Component {
	constructor(props) {
		super(props)

		this.onClose = this.props.onClose || (() => {})
	}
	
	render() {
		return (
			<div onClick={this.onClose} className="Modal">
				<div onClick={e => e.stopPropagation()} className="modal_content">
					{this.props.children}
					<span onClick={this.onClose} className="closer">x</span>
				</div>
			</div>
		)
	}
}