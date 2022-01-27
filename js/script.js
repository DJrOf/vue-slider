// VUE.JS Check
Vue.config.devtools = true;

// client to DOM data server script
const app = new Vue({
    el: '#root',

  data() {
      //L'array di immagini è in una funzione che restituisce le singole immagini.
    return {
      images: [
        "img/image1.jpg",
        "img/image2.jpg",
        "img/image3.jpg",
        "img/image4.jpg"
      ],
      // Determinare la posizione corrente sul valore di origine. 
      currentIndex: 0,
    };
  },
  methods: {
// Funzioni che modificano la posizione d'origine (currentIndex) degli elementi dell'array (slide left/right)
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    },
   
  },
  currentImg: function() {
    return this.images[Math.abs(this.currentIndex) % this.images.length];
  /* Math.abs restituisce il valore assoulto di un numero, 
  ed assume valore "false" quando questo è negativo.
  Tramite questa funzione si regola il 
  posizionamento del currentIndex all'interno dell'array.
  */
},
})