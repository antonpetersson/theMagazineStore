const CartPageComponent = {

    template: `
      <div class="row">
         <cart class="col-12"></cart>
         <shipping></shipping>
         <div class="col-12">
            <label for="first-name">Förnamn:</label></br>
            <input name="first-name" v-model="firstName"></input></br>
            <label for="last-name">Efternamn:</label></br>
            <input name="last-name"></input></br>
            <label for="address-name">Adress:</label></br>
            <input name="address" ></input></br>
            <label for="zip-code">Postnummer:</label></br>
            <input name="zip-code"></input></br>
            <label for="city">Postort:</label></br>
            <input name="city"></input></br>
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