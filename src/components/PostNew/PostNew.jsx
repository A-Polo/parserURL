import React from 'react';
import axios from 'axios';
import ShowPreview from './ShowPreview';

var PostNew = React.createClass({

    handleClick(){
        var MainAPI = 'https://parser-url-api.herokuapp.com/';
        var APIItems = MainAPI + 'items';

        axios({
            method: 'post',
            url: APIItems,
            data:{
                item:{
                    meta_title: this.props.metaTitle,
                    meta_description: this.props.metaDescription,
                    meta_image: this.props.metaImage
                }
            }
        })
        .then((item) => {
            console.log(item);
            this.props.handleSubmit(item.data);
        });

        this.props.clearMeta();
    },


    render(){
        return(
            <section className="app-form">
                <header className="app-form__header">
                    <h1 className="app-form__header_title">Enter any URL (ex. https://lenta.ru/):</h1>
                    <input type="text" id="entryText"  className="app-form__header_text"
                        onKeyUp={this.props.linkParser} 
                        onKeyDown={this.props.clearMeta} 
                    />
                </header>
                <ShowPreview
                    showNewPost={this.props.showNewPost}
                    metaDescription={this.props.metaDescription}
                    metaTitle={this.props.metaTitle}
                    metaImage={this.props.metaImage}
                    handleClick={this.handleClick}
                    clearMeta={this.props.clearMeta}
                />

            </section>
        )
    }
});

export default PostNew;