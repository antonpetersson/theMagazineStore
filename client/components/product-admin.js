const ProductAdminComponent = {
  template: `
    <div class="card-body">
      <h2>Skapa en produkt</h2>
      <form @submit.prevent="submit">
        <label>Namn
          <input type="text" v-model="name" :disabled="loading" required />
        </label></br>
        <label>Beskrivning
          <input type="text" v-model="description" :disabled="loading" />
        </label></br>
        <label>Pris exkl. moms
          <input type="text" v-model="price" :disabled="loading" />
        </label></br>
        <label>Moms
          <input type="text" v-model="vat" :disabled="loading" placeholder="0.06" />
        </label></br>
        <label>Artikelnummer
          <input type="text" v-model="artnr" :disabled="loading" placeholder="t.ex. 123abc"/>
        </label></br>
        <button type="submit" :disabled="loading">Spara produkt</button>
        <br/>
        <span v-if="message">{{message}}</span>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      description: '',
      price: 0,
      vat: 0.06,
      artnr: '',
      message: '',
      loading: false,
    };
  },

  methods: {
    submit() { // save product
      this.loading = true;
      
      let vatAmount = this.price * this.vat;
      let priceWithVat = parseFloat(this.price) + vatAmount;

      http.post('/rest/products', { //Här gör vi samma sak som i postman
        name: this.name,
        description: this.description,
        price: priceWithVat,
        vat: this.vat,
        artnr: this.artnr
      }).then(response => {
        console.log(response);
        this.loading = false;
        if(response.data.name) {
          this.message = 'Product saved';
        } else {
          this.message = 'Product save failed';
        }
      }).catch(error => {
        this.loading = false;
        this.message = 'Product save failed';
      });
    }
  }
}


