import React from 'react';

export default function Section(props) {
	return (
		<div className="section">
            <div className="row">
                <div className="col-sm-9">
                <h2>{props.title}</h2>
                </div>
            </div>
            <br className="visible-xs"></br>
            <div className="row">
              {props.children}
            </div>
        </div>
	)
}