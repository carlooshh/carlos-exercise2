<template>
  <center >
    <div class="12">
      <h1>Exercise grão direto</h1>
    </div>
    <div class="col-9 col-md-6 col-lg-4 card m-5 p-5">
      <form class="col-12" >      
        <input class="col-12" type="number" v-model="elemento"/>     
        <button class="col-8 mt-3" @click="adicionarElemento" >+ elemento</button>     
        <div v-if="array.length === 0" class="text-danger mt-2">{{arrayMsg}}</div>
        <div v-else>
          Seu array é {{ array }}
        </div>
      </form> 
    </div>
    <button @click="verificarArray">verificar se array é simetrico </button>
  </center>
</template>

<script>
export default {
  data() {
    return {
      elemento: 0,
      arrayMsg:'Array vazio, clique em "+" para adicionar elementos',
      array: [],
    };
  },
  methods: {
    adicionarElemento(){

      this.array.push(Number(this.elemento));
    },
    verificarArray() {
      var ePar = this.array.length % 2 === 0;
      var eSimetrico = false;

      if (ePar) {
        eSimetrico = this.compararItens(this.array);
      } else {
        let mediana = Math.floor(this.array.length / 2);
        if (this.array[mediana] === 0) {
          // verificacao se há "0" como elemento central
          this.array.splice(mediana, 1); // removendo elemento "0"
          console.log(this.array);

          eSimetrico = this.compararItens(this.array);
        }
      }
      
    
    eSimetrico ? this.$toast.success('É simétrico',{  
    }) :
    this.$toast.error('Não é simétrico',{   
    });

    this.array = [];
      
    },

    compararItens() {
      let mediana = this.array.length / 2 - 1;
      let checkArray = [];

      for (let i = 0; i <= mediana; i++) {
        if (this.array[i] === -this.array[this.array.length - (i + 1)]) {
          checkArray.push(this.array[i]);
        }
      }

      return checkArray.length === mediana + 1 ? true : false;
    },
  },
};
</script>

<style scoped>
center {
  margin-top: 10vh;
  color: #d66239;
}

a {
  color: #333;
  font-size: 16px;
  text-decoration: none;
  margin: 15px 0;
}

button {
  border-radius: 20px;
  border: 1px solid #d66239;
  background-color: #d66239;
  color: #ffffff;
  font-size: 12px;
  font-weight: bold;
  padding: 10px 0px;
  text-transform: uppercase;
}

.column {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  background-color: #ffffff;
}
.rowForm {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: row;
  background-color: #ffffff;
}

input {
  background-color: #eee;
  border-radius: 20px;
  border: none;
  padding: 12px 15px;
  margin: 10px 0;
}
</style>