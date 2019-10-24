import React, { useState } from 'react'
import styled from 'styled-components'
import MockImageOne from '../../../images/ProductDetail/pineapple.jpg'
import MockImageTwo from '../../../images/ProductDetail/pineappleone.jpg'

const ImageShowing = styled.img`
  width: 535px;
  margin-bottom: 12px;
`

const ContainerImages = styled.div`
  width: 100%;
  max-width: 535px;
  height: 114px;
  display: flex;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }
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
  const [path, setPath] = useState(MockImageOne)

  return (
    <>
      <ImageShowing src={path} />
      <ContainerImages>
        <ItemImage src={MockImageOne} onClick={e => setPath(e.target.src)} />
        <ItemImage src={MockImageTwo} onClick={e => setPath(e.target.src)} />
        <ItemImage src={MockImageOne} onClick={e => setPath(e.target.src)} />
        <ItemImage src={MockImageTwo} onClick={e => setPath(e.target.src)} />
        <ItemImage src={MockImageOne} onClick={e => setPath(e.target.src)} />
      </ContainerImages>
    </>
  )
}
export default GalleryProductDetail
