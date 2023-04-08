import React from 'react'
import '../../src/App.css';
const Header = (props) => {
    // console.log("HomeComponent",props.data.cartItems)
  return (
    <div className='container'>
    <div className='Add-to-cart'>
        <span className='cart-count mt-2'>{props.data.length}</span>
        <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/wordpress-shopping-cart-plugins.png.webp" className='mt-2 w-25 position-absolute top-0 end-0'/>
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

export default Header
