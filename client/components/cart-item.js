const CartItemComponent = {

  props: ['item'],

  template: `
    <tr>
      <td>{{item.product.name}}</td>
      <td>{{item.product.price}} kr</td>
      <td>{{item.product.vat*100}}%</td>
      <td class="cart-item-amount"><input type="number" :value="item.amount"></td>
    </tr>
  `
}