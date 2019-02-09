AFRAME.registerComponent('play-music', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#playSound');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
});

AFRAME.registerComponent('play-effect', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#playEffect');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
});

AFRAME.registerComponent('play-bark', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#playDogEffect');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
});


