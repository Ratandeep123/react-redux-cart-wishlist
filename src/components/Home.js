import React from 'react'
import '../../src/App.css';
const Home = (props) => {
    console.log("HomeComponent",props)
  return (
    <div className='container'>
      <h3>Home Component</h3>
      <div className='cart-wrapper d-flex card'>
        <div className='img-wraaper item'>
            <img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027942322" style={{width:250}} />
        </div>
        <div className='text-wrapper item d-grid py-3 text-center'>
                <span>
                    Name : I-phone
                </span>
                <span>
                Model : 14 plus
                </span>
                <span>
                    Price : $1000
                </span>
        </div>
        <div className='btn-wrapper item py-3 text-center'>
            <button className='button' onClick={()=>props.addToCartHandler({price : 1000, name: 'I-phone',model:'14 plus'})} >Add to cart</button>
            <button className='remove ms-2' onClick={()=>props.removeToCartHandler()} >Remove to Cart</button>

            </div>
      </div>
      
        {/* <div className='card border-primary'>
            <div className='card-body border-danger d-content'>
                <div className='img-tag border-warning'>
                    <img className='w-25 rounded' src='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-finish-select-202209-6-7inch-blue?wid=2560&hei=1440&fmt=p-jpg&qlt=80&.v=1661027942322' />
                </div>
                <div className='text-tag border-danger'>
                        <div className=''>
                            <span>Ratandeep Kumar</span>
                            <span>new Delhi</span>
                        </div>
                </div>
            </div>
        </div> */}
    </div>
  )
}

export default Home
