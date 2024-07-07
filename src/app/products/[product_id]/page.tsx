import React from 'react'

const ProductDetail = ({ params }: {
  params: { product_id: string }
}) => {
  return (
    <div>ProductDetail {params.product_id}</div>
  )
}

export default ProductDetail
