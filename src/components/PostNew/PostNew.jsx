import React from 'react';
import ShowPreview from './ShowPreview';

var PostNew = React.createClass({

    handleClick(){
        var MainAPI = 'https://parser-url-api.herokuapp.com/';
        var APIItems = MainAPI + 'items';
        $.ajax({
            url: APIItems,
            type: 'POST',
            data:{
                item:{
                    meta_title: this.props.metaTitle,
                    meta_description: this.props.metaDescription,
                    meta_image: this.props.metaImage
                }
            },
            success: (item) => {
                this.props.handleSubmit(item);
            }
        });

        this.props.clearMeta();
    },


    render(){
        return(
            <section className="app-form">
                <header className="app-form__header">
                    <h1 className="app-form__header_title">Enter any URL (ex. https://lenta.ru/):</h1>
                    <input type="text" id="entryText" className="app-form__header_text" 
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