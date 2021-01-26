import React from 'react';
import './styles.css';

import collection from '../../mock/collection'
import CollectionPreview from '../../components/CollectionPreview'


const CollectionOverview = () => {
  return (
    <div className="collection-overview">
      {
        collection.map(({id, title, ...otherProps}) => (
          <CollectionPreview key={id} title={title} {...otherProps} />
        ))
      }
    </div>
  )
}


export default CollectionOverview