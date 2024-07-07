import React from 'react'

const ReviewDetails = ({params}: {
  params: {
    product_id: 'string',
    review_id: 'string'
  }
}) => {
  return (
    <div>ReviewDetails id {params.review_id} with product {params.product_id} </div>
  )
}

export default ReviewDetails
