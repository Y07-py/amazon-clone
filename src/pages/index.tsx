import Footer from '@/components/footer/Footer'
import BottomHeader from '@/components/header/BottomHeader'
import Header from '@/components/header/Header'
import Banner from '@/components/Banner'
import Products from '@/components/Products'
import { ProductProps } from '../../type'

interface Props {
  productData: ProductProps[];
}

export default function Home({productData}:Props) {
  return (
    <main>
      <div className='msx-w-screen-xl mx-atuo'>
        <Banner />
        <div className='relative md:-mt-20 lgl:mt-32 xl:-mt-60 z-20 mb-10'>
          <Products productData={productData}/>
        </div>
      </div>
    </main>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('https://fakestoreapiserver.reactbd.com/tech')
  const productData = await res.json();
  return {props: {productData}};
}
