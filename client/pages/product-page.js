const ProductPageComponent = {

 template: `
 <div>
  <h4>Sök</h4>
  <input type="text" v-model="search" placeholder="Sök produkter" />
  
   <div class="row">
      <product
        v-for="product in filteredProducts" 
        v-bind:item="product"
        v-bind:key="product._id"
      ></product>
   </div>
   
  </div>
 `,
 //Byt searchFilter mot FilteredProducts så funkar kategorierna.
 created() {
  http.get('rest/products').then((response) => {
    this.products = response.data;
    // for loop som samlar upp kategorierna
  }).catch((error) => {
   console.error(error);
  });
 },
 computed: {
  searchFilter: function(){
    return this.products.filter((product) => {
      return product.name.match(this.search);
    });
  },
  filteredProducts: function(){
    return this.products.filter((product)=>{
      if(!this.$route.params.category){
        return true; // if no category selected, do not filter
      }
      for(let category of product.categories){
        if(category.name == this.$route.params.category){
          return true; // found matching category
}
      }
    }) 
  }
 },
 data(){
   return{
     products: [],
     search: ''
   }
 }
}