const ProductPageComponent = {

 template: `
 <div>
  <h4>Sök</h4>
  <input type="text" v-model="search" placeholder="Sök produkter" />
  
   <div class="row">
      <product
        v-for="product in SearchFilter" 
        v-bind:item="product"
        v-bind:key="product._id"
      ></product>
   </div>
   
  </div>
 `,
 //Byt SearchFilter mot FilteredProducts så funkar kategorierna.
 created() {
  http.get('rest/products').then((response) => {
    this.products = response.data;
    // for loop som samlar upp kategorierna
  }).catch((error) => {
   console.error(error);
  });
 },
 computed: {
  SearchFilter: function(){
    return this.products.filter((product) => {
      return product.name.match(this.search);
    });

  }
 },
 data(){
   return{
     products: [],
     search: ''
   }
 }
}