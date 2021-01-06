import React, { Component } from 'react';
import { FacebookProvider, Comments, Page } from 'react-facebook';

export default class Example extends Component {
    render() {
        return (
            <div className='comments'>
                <FacebookProvider appId={this.props.fbAppId}>
                    <div className='fb-page-container'>
                        <Page href={this.props.fbPage} tabs="" />
                    </div>
                    <Comments href={this.props.url} />
                </FacebookProvider>
            </div>
        );
    }
}
