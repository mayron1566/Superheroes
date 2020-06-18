var i;
const app = new Vue({
    el: '#listadoHeroes',

    data(){
        return{
            heroes: [],
            heroeN1: [],
            filtrado: ''
        }
    },

    computed:{
        filterName(){
            return this.heroes.filter((heroe) => {return heroe.nombre.match(this.filtrado)});
        },
    },


    created (){
        axios.get('http://157.245.138.232:9091/api/v1/test/superheroes')
        .then(response => (this.heroes = response.data.data)),

        axios.get('http://157.245.138.232:9091/api/v1/test/superheroes/1')
        .then(response => (this.heroeN1 = response.data.data))
    },

})