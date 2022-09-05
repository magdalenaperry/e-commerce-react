import React from 'react'

const Home = () => {
  return (
<>
HeroBanner

<div>
  <h2>Best Selling Products</h2>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam unde repudiandae ad provident libero molestiae.</p>
</div>

<div>
  {['Product 1', 'Product 2'].map((product) => product)}
</div>

Footer

</>
  )
}

export default Home