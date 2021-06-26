import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';

class Directory extends React.Component {
    constructor() {
        super();

        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://ibb.co/sJ1BZpy',
                    id: 1
                    //linkUrl: 'shop/hats'
                  },
                  {
                    title: 'jackets',
                    imageUrl: 'https://ibb.co/dJ1zHRQ',
                    id: 2
                    //linkUrl: 'shop/jackets'
                  },
                  {
                    title: 'sneakers',
                    imageUrl: 'https://ibb.co/XpgvNpB',
                    id: 3
                    //linkUrl: 'shop/sneakers'
                  },
                  {
                    title: 'womens',
                    imageUrl: 'https://ibb.co/v4RWdtH',
                    size: 'large',
                    id: 4
                    //linkUrl: 'shop/womens'
                  },
                  {
                    title: 'mens',
                    imageUrl: 'https://ibb.co/njJ0Cdb',
                    size: 'large',
                    id: 5
                    //linkUrl: 'shop/mens'
                  }
            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id, size}) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    ))
                }
            </div>
        );
    }

}

export default Directory;