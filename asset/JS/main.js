const app = new Vue({
    el: '#app',
    data: {
        counter: 0,
        images: [
            'https://scitechdaily.com/images/Mars-Red-Planet-Highlights-scaled.jpg',
            'https://media.newyorker.com/photos/60994dabccd28612d3013cec/master/pass/Mann-SpaceEthics.jpg',
            'https://cdn.britannica.com/24/73524-050-3C2F3432/result-seasons-Mars-planet-inclination-plane-cap.jpg',
            'https://cdn.mos.cms.futurecdn.net/iWG5zg5Mpt8AvZqc4vYa4K.jpg'
        ],


    },
    methods: {
        prev() {
            // do something
            console.log('Cliccato su prev');
            console.log(this.counter);
            if (this.counter === 0) {
                return this.counter = this.images.length - 1
            }
            return this.counter -= 1

        },
        next() {
            // do something
            console.log(this.counter);
            console.log('Cliccato su next');

            if (this.counter === this.images.length - 1) {

                return this.counter = 0
            }
            return this.counter += 1

        },


        checkCirc(index) {
            return this.counter = index;
        },






    },
    // mounted() {
    //     alert('Hello')
    // }
});

//Verifica quale tasto è stato cliccato e chiede alla pagina di muovere le img a destra o sinistra
function verificaTasto(e) {
    if (e.keyCode = '37') {
        app.prev();
    } else if (e.keyCode = '39') {
        app.next();

    }

};

document.addEventListener('keyup', verificaTasto);

