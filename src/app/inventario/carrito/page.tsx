import { Entidad } from '@/components/List';
import React, { FC } from 'react';

interface Props {
  columnas: string[],
  entidades: Entidad[],
  carrito: Entidad[],
  removeFromCart: (entidad: Entidad) => void,
  addToCart: (entidad: Entidad) => void,
  decreaseQuantity:(entidad: Entidad) => void
}

const Carrito: FC<Props> = ({ columnas, entidades, carrito = [], removeFromCart, addToCart, decreaseQuantity }) => {
  const total = carrito.reduce((acc, entidad) => acc + Number(entidad.precioUnitario * entidad.cantidad), 0);


  return (
    <div className='grid justify-center'>
      <p className='flex justify-center text-center text-black'>
        Carrito
        <span className='text-primary'>de compras</span>
      </p>
      {carrito.length === 0 ? (
        <p className='flex justify-center'>No hay productos en el carrito.</p>
      ) : (
        <table className="table w-[1200px]">
          <thead>
            <tr className='font-normal tracking-widest opacity-60 text-indigo-800'>
              <th colSpan={5}>
                Tienes agregado {carrito.length} productos
              </th>
            </tr>
            <tr>
              <th>Nombre</th>
              <th>Descripción</th>
              <th>Precio</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {carrito.map((entidad) => (
              <tr key={entidad.id}>
                <td>{entidad.nombre}</td>
                <td>{entidad.descripcion}</td>
                <td>{entidad.precioUnitario}</td>
                <td>
                  <div className="flex items-center space-x-2">
                    <button
                      className=""
                      onClick={() => addToCart({ ...entidad, cantidad:  + 1 })}
                    >
                      <img className='w-6' src="/Union.svg" alt="" />
                    </button>
                    <td>{entidad.cantidad}</td>
                    <button
                      className=""
                      onClick={() => decreaseQuantity(entidad)}
                      disabled={entidad.cantidad === 0}
                    >
                      <img className='w-6' src="/SlashCircle.svg" alt="" />
                    </button>
                  </div>
                </td>
                <td>
                  <button onClick={() => removeFromCart(entidad)}>Eliminar</button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={columnas.length }></td>
              <td className='font-semibold tracking-widest opacity-60 text-indigo-800'>Total de la compra: {total}</td>
            </tr>
          </tfoot>
        </table>
      )}
    </div>
  );
};

export default Carrito;
