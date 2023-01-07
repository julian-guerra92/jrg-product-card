import React from 'react';
import render from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { ProductImage } from '../../src/components/ProductImage';
import { product2 } from '../data/productos';

describe('Pruebas en el ProductImage', () => {

   test('Debe de mostrar el componenete correctamente con la imagen correspondiente', () => {
      const wraper = render.create(
         <ProductImage img={product2.img} />
      )
      expect(wraper.toJSON()).toMatchSnapshot();
   })

   test('Debe de mostrar el componenete con la imagen del producto', () => {
      const wraper = render.create(
         <ProductCard product={product2}>
            {
               () => (
                  <ProductImage />
               )
            }
         </ProductCard>
      )
      expect(wraper.toJSON()).toMatchSnapshot();
   })


})
