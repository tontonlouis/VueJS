let vm = new Vue({
    el: '#app',
    data: {
        message: "Salut les gens",
        link: "http://www.google.fr",
        success: true,
        persons: ['Sylvie', 'Eric', 'Cyril', 'Fabien']
    },

    methods: {
        close: function() {
            this.success = false
            this.message = "Fermé"
        },

        addPersonn: function() {
            this.persons.push('Bebert')
        }
    }
})