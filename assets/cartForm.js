if(document.querySelector('.cart-area')){
    

    const cartForm = Vue.createApp({
      delimiters: ['${', '}'],
      data(){
        return {

          cart: null,
          
        }
      },

      created(){
        this.getCart()
      },

      methods: {

        getCart(){
          axios.get('/cart.js')
          .then(response =>{
            this.cart = response.data
            console.log(response.data)
          })
          .catch(error => {
            console.log(error)
          })
        }
      }



    }).mount('.cart-area');
  }