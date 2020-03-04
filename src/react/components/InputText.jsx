import React from 'react';

import modelApi from '../../model/modelApi.js'

const inputStyles = {
	title: {
		fontSize: '12px'
	},
	error: {
		fontSize: '10px', 
		color: 'red', 
		fontStyle: 'italic'
	},
	input: {
		width: '100%'
	}
}

export default class InputText extends React.Component {
	constructor(props) {
		super(props)

		this._ref
	}

	get value() {
		return this._ref[this.props.type === 'checkbox' ? 'checked' : 'value']
	}

	renderGuts(inputProps) {
		const title = (
			this.props.title 
			? <div style={inputStyles.title}>{this.props.title}</div> 
			: null
		)
		const input = (
			this.props.expanded 
			? <textarea {...inputProps} />
			: <input {...inputProps} style={this.props.type === 'checkbox' ? this.props.style : {width: '100%', ...this.props.style}}/>
		)
		const error = (
			this.props.error 
			? <div style={inputStyles.error}>{this.props.error}</div>
			: null
		)
		return ([title,input,error])
	}

	render() {
		const {
			autocomplete,autofocus,checked,disabled,height,max,maxlength,min,name,placeholder,pattern,readonly,size,type,value,width,style,
			defaultValue
		} = this.props
		const inputProps = {
			ref: r => this._ref = r,
			style,
			autocomplete,autofocus,checked,disabled,height,max,maxlength,min,name,placeholder,pattern,readonly,size,type,value,width,
			defaultValue,
			onChange: e => {
				if(this.props.onChange) {
					this.props.onChange(e)
				}
			},
			onFocus: e => {
				if(this.props.onFocus) {
					this.props.onFocus(e)
				}
			}
		}

		return (
			this.props.type === 'checkbox' 
			? (
				<span class="InputText">
					{this.renderGuts(inputProps)}
				</span>
			) : (
				<div class="InputText">
					{this.renderGuts(inputProps)}
				</div>
			)
		)
	}
}