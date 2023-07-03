import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <>
    <div className='border-l-4 h-auto grid grid-cols-1 gap-1 content-star'>
      <div className='flex justify-center'>
        <img className='w-11/12 h-48 mt-2' src="/banner.avif" alt="" />
      </div>
      <div className='w-[1280px] h-[450px] flex justify-end bottom-28'>
        <div className='h-[430px] w-full flex justify-center'>
          <div className=' self-center grid grid-cols-3 gap-3 content-center justify-items-center  h-[300px] w-[1200px]'>
            <div className=" card w-50 h-80 bg-base-100 shadow-xl ml-3">
              <figure><img className='w-full' src="/herramienta.jfif" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Destornilladores!
                  <div className="badge badge-primary">NUEVOS</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <Link href={"/inventario/categoria"} className="badge badge-outline">ver mas</Link>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-50 h-80 bg-base-100 shadow-xl ml-3">
              <figure><img className='w-full' src="/herramienta.jfif" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Martillos!
                  <div className="badge badge-primary">NUEVOS</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
            <div className="card w-50 h-80 bg-base-100 shadow-xl ml-3">
              <figure><img className='w-full' src="/herramienta.jfif" alt="Shoes" /></figure>
              <div className="card-body">
                <h2 className="card-title">
                  Clavos!
                  <div className="badge badge-primary">NUEVOS</div>
                </h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <div className="badge badge-outline">Fashion</div>
                  <div className="badge badge-outline">Products</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home;