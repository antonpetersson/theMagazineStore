const CartPageComponent = {

    template: `
      <div class="row">
         <cart class="col-12"></cart>
         <shipping></shipping>
         <div class="col-12">
            <label for="first-name">Förnamn:</label>
            <input name="first-name" v-model="firstName"></input>
            <button v-on:click="pay">Betala</button>
         
         </div>
      </div>
    `,
    
    // created() {
    //  http.get('rest/products').then((response) => {
    //    this.products = response.data;
    //  }).catch((error) => {
    //   console.error(error);
    //  });
    // },
    data(){
        return{
            firstName: ''
        }
    },
    methods: {
        pay: ()=>{

            http.post('/rest/pay', {}).then(response => {
               console.log(response.data)
              }).catch(error => {
                console.log(error);
              });

        }
    }
}