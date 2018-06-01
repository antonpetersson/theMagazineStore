const CartComponent = {

  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <table>
        <tr>
          <th>vara</th>
          <th>styckpris</th>
          <th>moms</th>
          <th>antal</th>
        </tr>
        <cart-item v-if="!loading"
          v-for="item in items"
          v-bind:item="item"
          v-bind:key="item._id">
        </cart-item>
      </table>
      <h4>Totalpris: {{totalPrice}} kr</h4>
    </div>
  `,
  created(){
    // ladda in litta data
    this.loading = true;
    http.get('/rest/cart').then(response => {
      console.log('items', response.data.items)
      this.items = response.data.items;
      this.loading = false;
    }).catch(e => {
      console.error(e);
      this.loading = false;
    });
  },
  computed: {
    totalPrice() {
      var totalPrice = 0;
      for(let item of this.items){
        const price = item.product.price * item.amount;
        totalPrice += price;
      }
      return totalPrice;
    }
  },
  data(){
    return{
      loading: false,
      items: [],
      title: "Varukorg"
    }
  }
}
