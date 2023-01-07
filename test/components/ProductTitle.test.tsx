import React from 'react';
import render from 'react-test-renderer'
import { ProductTitle } from '../../src/components/ProductTitle';
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/productos';

describe('Pruebas en el ProducTitle', () => {

   test('Debe de mostrar el componenete correctamente con el título personalizado', () => {
      const wraper = render.create(
         <ProductTitle title='Custom Product' />
      )
      expect(wraper.toJSON()).toMatchSnapshot();
   })

   test('Debe de mostrar el componenete con el nombre del producto', () => {
      const wraper = render.create(
         <ProductCard product={product1}>
            {
               () => (
                  <ProductTitle />
               )
            }
         </ProductCard>
      )
      expect(wraper.toJSON()).toMatchSnapshot();
   })


})
