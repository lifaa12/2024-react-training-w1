import { useState } from "react"
const data = [
  {
    category: "甜甜圈",
    content: "尺寸：14x14cm",
    description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
    id: "-L9tH8jxVb2Ka_DYPwng",
    is_enabled: 1,
    origin_price: 150,
    price: 99,
    title: "草莓莓果夾心圈",
    unit: "元",
    num: 10,
    imageUrl: "https://images.unsplash.com/photo-1583182332473-b31ba08929c8",
    imagesUrl: [
      "https://images.unsplash.com/photo-1626094309830-abbb0c99da4a",
      "https://images.unsplash.com/photo-1559656914-a30970c1affd"
    ]
  },
  {
    category: "蛋糕",
    content: "尺寸：6寸",
    description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
    id: "-McJ-VvcwfN1_Ye_NtVA",
    is_enabled: 1,
    origin_price: 1000,
    price: 900,
    title: "蜂蜜檸檬蛋糕",
    unit: "個",
    num: 1,
    imageUrl: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1001&q=80",
    imagesUrl: [
      "https://images.unsplash.com/photo-1618888007540-2bdead974bbb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
    ]
  },
  {
    category: "蛋糕",
    content: "尺寸：6寸",
    description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
    id: "-McJ-VyqaFlLzUMmpPpm",
    is_enabled: 1,
    origin_price: 700,
    price: 600,
    title: "暗黑千層",
    unit: "個",
    num: 15,
    imageUrl: "https://images.unsplash.com/photo-1505253149613-112d21d9f6a9?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDZ8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
    imagesUrl: [
      "https://images.unsplash.com/flagged/photo-1557234985-425e10c9d7f1?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTA5fHxjYWtlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60",
      "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDR8fGNha2V8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
    ]
  }
]

function App() {
  const [productList, setProductList] = useState(data);
  const [productDetail, setProductDetail] = useState({});
  const [productImgUrl, setProductImgUrl] = useState();
  return (
    <>
      <div className="container">
        <h3>產品列表</h3>
        <div className="wrap">
          {
            productList.map((item, idx) => {
              return (
                <div key={idx}>
                  <h3>{item.title}</h3>
                  <button onClick={() => {
                    setProductDetail(item),
                      setProductImgUrl(productList.imageUrl)
                  }} className="detail-btn">查看更多</button>
                </div>

              )
            })
          }
        </div>
        {
          productDetail.title ? (<div className="product-detail">
            <button onClick={() => setProductDetail({})}>關閉</button>
            <h3>{productDetail.title}</h3>
            <p>{productDetail.content}</p>
            <p>售價：${productDetail.price}</p>
            {
              productImgUrl ? (<img src={productImgUrl} alt="product-img" />) : (<img src={productDetail.imageUrl} alt="product-img" />)

            }
            <div className="other-img">
              <img src={productDetail.imageUrl} alt="product-img" onClick={() => setProductImgUrl(productDetail.imageUrl)} />
              {
                productDetail.imagesUrl.map((item, idx) => {
                  return (
                    <img src={item} alt="product-img" key={idx} onClick={() => setProductImgUrl(item)} />
                  )
                })
              }
            </div>
          </div>) : (<h1>請點選"查看更多"</h1>)
        }
      </div>
    </>
  )
}

export default App
