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
            <section>
                <div className="entry-form">
                    <h1>Enter any URL (ex. https://lenta.ru/):</h1>
                    <div><input type="text" id="entryText" onKeyUp={this.props.linkParser} onKeyDown={this.props.clearMeta} /></div>
                </div>
                <div>
                    <ShowPreview
                        showNewPost={this.props.showNewPost}
                        metaDescription={this.props.metaDescription}
                        metaTitle={this.props.metaTitle}
                        metaImage={this.props.metaImage}
                        handleClick={this.handleClick}
                        clearMeta={this.props.clearMeta}
                    />
                </div>
            </section>
        )
    }
});

export default PostNew;