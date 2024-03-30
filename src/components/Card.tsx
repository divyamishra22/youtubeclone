import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({data}) => {

  return (
    <>
    <div>Card</div>
    <Link to = {`/watch/${data.videoId}`}>
          <img src="data.videoThumbnail" />
      </Link>
      </>
  )
}
