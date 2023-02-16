import React from 'react'

const Home = (props) => {
  return (
    <div>
        <h1>Home Components</h1>
        <div className='cart-wrapper'>
          <div className='img-wrapper item'>
            <img src="data:image/jpeg;base64,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" alt=''/>
          </div>
          <div className='img-wrapper item'>
            <span>
              I-phone
            </span>
          </div>
          <div className='img-wrapper item'>
            <span>
              Price : $1000.00
            </span>
          </div>
          <button type="button" className="btn btn-primary" onClick={()=>props.addToCartHandler({price : 1000, name : 'Iphone 14'})} >Add to cart</button>
         &nbsp; &nbsp;
          <button type="button" className="btn btn-primary" onClick={()=>props.removeToCartHandler()} >Remove to cart</button>
        </div>
    </div>
    
  )
}

export default Home