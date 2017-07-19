import React from 'react';
import axios from 'axios';
import ShowPreview from './ShowPreview';


class PostNew extends React.Component {

    handleClick(){
        const MainAPI = 'https://parser-url-api.herokuapp.com/';
        let APIItems = MainAPI + 'items';

        axios({
            method: 'post',
            url: APIItems,
            data:{
                item:{
                    meta_title: this.props.metaTitle,
                    meta_description: this.props.metaDescription,
                    meta_image: this.props.metaImage,
                    link_news: this.props.urlLink
                }
            }
        })
            .then((item) => {
                console.log(item);
                this.props.handleSubmit(item.data);
            });

        this.props.clearMeta();
    }


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
                <div className="app-preview_wrap">
                    <ShowPreview
                        showNewPost={this.props.showNewPost}
                        metaDescription={this.props.metaDescription}
                        metaTitle={this.props.metaTitle}
                        metaImage={this.props.metaImage}
                        handleClick={this.handleClick.bind(this)}
                        clearMeta={this.props.clearMeta}
                    />

                </div>
            </section>
        )
    }
}

export default PostNew;