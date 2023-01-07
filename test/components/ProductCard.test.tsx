import React from 'react';
import render from 'react-test-renderer'
import { ProductCard } from '../../src/components/ProductCard';
import { product1 } from '../data/productos';

const { act } = render;

describe('Pruebas en el ProductCard', () => {

   test('Debe de mostrar el componenete correctamente', () => {
      const wraper = render.create(
         <ProductCard product={product1}>
            {
               () => (
                  <>ProductCard</>
               )
            }
         </ProductCard>
      )
      expect(wraper.toJSON()).toMatchSnapshot();
   })

   test('Debe de incrementar el contador', async () => {
      const wraper = render.create(
         <ProductCard product={product1}>
            {
               ({ count, increaseBy }) => (
                  <>
                     <h1>Product Card</h1>
                     <span>{count}</span>
                     <button onClick={() => increaseBy(1)}></button>
                  </>
               )
            }
         </ProductCard>
      )
      let tree = wraper.toJSON();
      expect(tree).toMatchSnapshot();
      act(() => {
         (tree as any).children[2].props.onClick();
      })
      tree = wraper.toJSON();
      expect((tree as any).children[1].children[0]).toBe('1');
   })

})
