import React, { useState, useEffect } from "react";
import { CollectionContent } from './styles'


import CollectionPreview from '../../components/CollectionPreview'


  


const CollectionOverview = () => {

  const [data, setData] = useState([]); // state, setState

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://abubakr.vakhid.digital/portfolio/fake-api.php');
      const json = await response.json();
      setData(json)
    }
    fetchData()
  }, [])



  // fetch('https://abubakr.vakhid.digital/portfolio/fake-api.php')
  // .then((response) => {
  //   return response.json();
  // })
  // .then((data) => {
  //   console.log(data);
  // });

  return (
    <CollectionContent>
      {
        data.map(({id, title, ...otherProps}) => (
          <CollectionPreview key={id} title={title} {...otherProps} />
        ))
      }
    </CollectionContent>
  )
}


export default CollectionOverview