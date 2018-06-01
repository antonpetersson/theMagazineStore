const HelloComponent = {

  template: `
    <div class="card-body">
      <h1>{{title}}</h1>
      <p>{{description}}</p>
    </div>
  `,
  data(){
    return{
      title: "Welcome to The Magazine Store",
      description: "The greatest mag store on the east side"
    }
  }

}