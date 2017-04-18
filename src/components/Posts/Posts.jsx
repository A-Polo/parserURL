import React from 'react';

var Posts = React.createClass({

    render(){
        var items = this.props.items.map((item)=>{
            return (
                <div className="post-item">
                    <div className="post-item-image">
                        <img src={item.meta_image} />
                    </div>
                    <div className="post-item-text">
                        <h3>{item.meta_title}</h3>
                        <p>{item.meta_description}</p>
                    </div>
                </div>
            )
        });
        return(
            <section className="all-posts">
                {items}
            </section>
        )
    }
});

export default Posts;