const MenuComponent = {

  template: `
    <ul class="nav">
      <li class="nav-item">
        <router-link class="nav-link" to="/">Hem</router-link>
      </li>
      <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
          Produkter
        </a>
        <div class="dropdown-menu">
        <router-link class="dropdown-item" to="/products">Alla</router-link>
          <category class="dropdown-item"
            v-for="item in categories"
            v-bind:item="item"
            v-bind:key="item._id">
          ></category>
        </div>
      </li>



      <li class="nav-item">
        <router-link class="nav-link" to="/login">Logga in / Registrera</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">Admin</router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/cart">Kundvagn</router-link>
      </li>
    </ul>
  `,
  data() {
    return {
      categories: []
    };
  },
  async created(){
    let categories = await http.get('/rest/categories');
    if(categories.data){
      this.categories = categories.data;
    }
  }
}