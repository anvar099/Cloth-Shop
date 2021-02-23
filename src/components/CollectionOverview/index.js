import React from 'react';
import { CollectionContent } from './styles'

import collection from '../../mock/collection'
import CollectionPreview from '../../components/CollectionPreview'


const CollectionOverview = () => {
  return (
    <CollectionContent>
      {
        collection.map(({id, title, ...otherProps}) => (
          <CollectionPreview key={id} title={title} {...otherProps} />
        ))
      }
    </CollectionContent>
  )
}


export default CollectionOverview