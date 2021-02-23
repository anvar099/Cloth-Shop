import React from 'react';
import { TitlePreview, PreviewContent } from './styles'
import CollectionItem from "../CollectionItem"

const CollectionPreview = ({ items, title }) => {
  return (
    <div>
      <TitlePreview>{title}</TitlePreview>
      <PreviewContent> 
      {
        items.filter((item, idx) => idx < 4)
        .map(({id, ...otherProps}) =>(
          <CollectionItem key={id} {...otherProps}/>
        ))
      }
      </PreviewContent>
    </div>
    
  )
}
export default CollectionPreview;