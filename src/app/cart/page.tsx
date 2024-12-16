import BreadcrumbCart from '@/components/cart-page/BreadcrumbCart'
import ProductCard from '@/components/cart-page/ProductCard'



const Page = () => {
  return (
    <div>
      <BreadcrumbCart/><br />
      <h1 className='font-bold text-[40px] font-integralCF'>YOUR CART</h1><br />
      <ProductCard data={{
        id: 0,
        name: 'Gradient Graphic T-shirt',
        srcUrl: `/images/pic13.png`,
        price: 145,
        attributes: [],
        discount: {
          amount: 0,
          percentage:0, 
        },
        quantity: 1
      }} {...ProductCard} /><br/>
         <ProductCard data={{
        id: 0,
        name: 'CHECKERED SHIRT',
        srcUrl: `/images/pic3.png`,
        price: 180,
        attributes: [],
        discount: {
          amount: 0,
          percentage:0, 
        },
        quantity: 1
      }} {...ProductCard} /><br></br>

         <ProductCard data={{
        id: 0,
        name: 'SKINNY FIT JEANS',
        srcUrl: `/images/pic2.png`,
        price: 240,
        attributes: [],
        discount: {
          amount: 0,
          percentage:0, 
        },
        quantity: 1
      }} {...ProductCard} />
      
    </div>
  )
}

export default Page
