import React from 'react'
import PhotoGallery from '../components/allGallery/PhotoGallery'
import HeaderGallery from '../components/allGallery/headerGallery'

function AllGallery() {
  return (
    <div>
      <HeaderGallery />
      <div className=' pb-14'>
      <PhotoGallery />
      </div>
    </div>
  )
}

export default AllGallery