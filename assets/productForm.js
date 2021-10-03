if(document.querySelector('.shopify-product-form')){
    

    const productForm = Vue.createApp({
      delimiters: ['${', '}'],
      data(){
        return {
          form: {
            id: {{ product.first_available_variant.id }},
            quantity: 1,
          }
        }
      },

      methods: {
        addToCart(){
          axios.post('/cart/add.js', this.form)
          .then(response => {
            console.log(response.data.quantity)
          })
          .catch(error => {
            console.log(error)
          })
        }

      }



    }).mount('.shopify-product-form');
  }