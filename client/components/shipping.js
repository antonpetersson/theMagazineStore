const ShippingComponent = {

    template: `
      <div class="card-body">
        <h1>{{title}}</h1>
        <input type="radio" v-model="shippingAlternative" value="69" name="shippingAlternative">{{shipping1}}
        </br>
        <input type="radio" v-model="shippingAlternative" value="49" name="shippingAlternative">{{shipping2}}
      </div>
    `,
    data(){
      return{
        title: "Fraktalternativ",
        shipping1: "DHL (69 kr)",
        shipping2: "PostNord (49 kr)",
        shippingAlternative: ''
      }
    }
  
  }