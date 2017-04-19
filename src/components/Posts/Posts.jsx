import React from 'react';

var Posts = React.createClass({

    render(){
        var items = this.props.items.map((item)=>{
            return (
                <a href={item.link_news} key={item.id} className="app-post-item" target="_blank">
                    <div className="post-item__image-wrap">
                        <img className="post-item__image" src={item.meta_image} />
                    </div>
                    <div className="post-item__text-wrap">
                        <h3 className="post-item__text-title">{item.meta_title}</h3>
                        <p className="post-item__text-description">{item.meta_description}</p>
                    </div>
                </a>
            )
        });
        return(
            <section className="app-all-posts">
                {items}
            </section>
        )
    }
});

export default Posts;