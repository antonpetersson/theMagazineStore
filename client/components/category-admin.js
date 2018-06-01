const CategoryAdminComponent = {
  template: `
    <div class="card-body">
      <h2>Skapa en kategori</h2>
      <form @submit.prevent="submit">
        <label>Namn
          <input type="text" v-model="name" :disabled="loading" required />
        </label></br>
        <button type="submit" :disabled="loading">Spara kategori</button>
        <br/>
        <span v-if="message">{{message}}</span>
      </form>
    </div>
  `,
  data() {
    return {
      name: '',
      message: '',
      loading: false,
    };
  },

  methods: {
    submit() { // save category
      this.loading = true;
      http.post('/rest/categories', { 
        name: this.name,
      }).then(response => {
        console.log(response);
        this.loading = false;
        if(response.data.name) {
          this.message = 'Category saved';
        } else {
          this.message = 'Category save failed';
        }
      }).catch(error => {
        this.loading = false;
        this.message = 'Category save failed';
      });
    }
  }
}


