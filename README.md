# DO-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Julián Rodríguez

## Ejemplo
```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'do-product-card';
```

```
<ProductCard
   product={product}
   initialValues={{
      count: 4,
      maxCount: 6
}} >
{
   ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
      <>
         <ProductImage  />
         <ProductTitle  />
         <ProductButtons  />
      </>
   )
}
</ProductCard>
```
