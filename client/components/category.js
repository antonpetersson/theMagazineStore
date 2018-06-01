const CategoryComponent = {

  props: ['item'],

  template: `
    <router-link> :to="'/products/' + item.name"
      {{item.name}}
    </router-link>
  `

}
