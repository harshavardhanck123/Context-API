import React, { createContext, useState } from 'react'
import Product from './components/Product'

export const ItemContext=createContext()

const App = () => {

 const [cart,setCart]=useState([
    {
      
        "products": [
            {
                "id": 1,
                "title": "iPhone 9",
                "description": "An apple mobile which is nothing like apple",
                "price": 549,
                "discountPercentage": 12.96,
                "rating": 4.69,
                "stock": 94,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://cdn.wccftech.com/wp-content/uploads/2018/07/iphone9-concept-creator-youtube-3d-8-rcm950x0.png.jpeg",
                "images": [
                    "https://i.dummyjson.com/data/products/1/1.jpg",
                    "https://i.dummyjson.com/data/products/1/2.jpg",
                    "https://i.dummyjson.com/data/products/1/3.jpg",
                    "https://i.dummyjson.com/data/products/1/4.jpg",
                    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
                ]
            },
            {
                "id": 2,
                "title": "iPhone X",
                "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
                "price": 899,
                "discountPercentage": 17.94,
                "rating": 4.44,
                "stock": 34,
                "brand": "Apple",
                "category": "smartphones",
                "thumbnail": "https://www.apple.com/newsroom/images/product/iphone/standard/iPhone_X_family_line_up_big.jpg.large.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/2/1.jpg",
                    "https://i.dummyjson.com/data/products/2/2.jpg",
                    "https://i.dummyjson.com/data/products/2/3.jpg",
                    "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
                ]
            },
            {
                "id": 3,
                "title": "Samsung Universe 9",
                "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
                "price": 1249,
                "discountPercentage": 15.46,
                "rating": 4.09,
                "stock": 36,
                "brand": "Samsung",
                "category": "smartphones",
                "thumbnail": "https://pbs.twimg.com/media/Dr2wz4AU4AEXQeN.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/3/1.jpg"
                ]
            },
            {
                "id": 4,
                "title": "OPPOF19",
                "description": "OPPO F19 is officially announced on April 2021.",
                "price": 280,
                "discountPercentage": 17.91,
                "rating": 4.3,
                "stock": 123,
                "brand": "OPPO",
                "category": "smartphones",
                "thumbnail": "https://bestsolution.lk/wp-content/uploads/2022/06/oppo-f19-pakistan-mobilegeeks.pk_.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/4/1.jpg",
                    "https://i.dummyjson.com/data/products/4/2.jpg",
                    "https://i.dummyjson.com/data/products/4/3.jpg",
                    "https://i.dummyjson.com/data/products/4/4.jpg",
                    "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
                ]
            },
            {
                "id": 5,
                "title": "Huawei P30",
                "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
                "price": 499,
                "discountPercentage": 10.58,
                "rating": 4.09,
                "stock": 32,
                "brand": "Huawei",
                "category": "smartphones",
                "thumbnail": "https://i.gadgets360cdn.com/products/large/1553612275_635_huawei_p30.jpg",
                "images": [
                    "https://i.dummyjson.com/data/products/5/1.jpg",
                    "https://i.dummyjson.com/data/products/5/2.jpg",
                    "https://i.dummyjson.com/data/products/5/3.jpg"
                ]
            }
        ]
    }
    
])

  
  return (
    <ItemContext.Provider value={cart[0].products}>
        <Product />
    </ItemContext.Provider>
    
  )
}

export default App