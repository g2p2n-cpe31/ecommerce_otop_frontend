import React, { useState } from 'react'
import styled from 'styled-components'
import MockImage1 from '../../images/ProductDetail/pineapple.jpg'
import MockImage2 from '../../images/ProductDetail/pineapple1.jpg'


const ImageShowing = styled.img`
  width: 535px;
  margin-bottom:12px;
`

const ContainerImages = styled.div`
  width: 100%;
  max-width: 535px;
  height: 114px;
  display: flex;
  overflow-x: scroll;
`

const ItemImage = styled.img`
  width: 150px;
  height: 98px;
  margin: 0 8px;
  cursor: pointer;

  &:nth-child(1) {
    margin-left: 0;
  }
`



const GalleryProductDetail = () => {
  const [path, setPath] = useState(MockImage1)

  return (
      <>
        <ImageShowing src={path} />
        <ContainerImages>
          <ItemImage src={MockImage1} onClick={(e) => setPath(e.target.src)} />
          <ItemImage src={MockImage2} onClick={(e) => setPath(e.target.src)}  />
          <ItemImage src={MockImage1} onClick={(e) => setPath(e.target.src)} />
          <ItemImage src={MockImage2} onClick={(e) => setPath(e.target.src)} />
          <ItemImage src={MockImage1} onClick={(e) => setPath(e.target.src)} />
        </ContainerImages>
      </>
  )
}
export default GalleryProductDetail