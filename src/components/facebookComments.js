import React, { Component } from 'react';
import { FacebookProvider, Comments, Page } from 'react-facebook';

export default class Example extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='comments'>
                <FacebookProvider appId="407901090404688">
                    <div className='fb-page-container'>
                        <Page href="https://www.facebook.com/echvzb.me" tabs="" />
                    </div>
                    <Comments href={this.props.url} />
                </FacebookProvider>
            </div>
        );
    }
}
