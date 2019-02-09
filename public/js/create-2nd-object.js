AFRAME.registerComponent('create-tv-screen', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#playScreenEffect');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createScreen();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createScreen : function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let screenElem = document.createElement('a-entity');
        screenElem.setAttribute('obj-model', {obj:'/assets/models/TVScreen.obj'});
        screenElem.setAttribute('material', {src:'/assets/textures/TVScreen.png'});
        screenElem.setAttribute('remove-component', {}); 
        screenElem.setAttribute('position', {x:7.48, y:0.86, z:2.2});
        screenElem.setAttribute('scale', {x:0.03, y:0.032, z:0.037});

        let scene = document.querySelector('a-scene');
        scene.appendChild(screenElem);
    }
});

AFRAME.registerComponent('create-fireplace', {
    schema: {},
    init : function() {
        const Context_AF = this;
        Context_AF.soundElem = document.querySelector('#playFireEffect');

        Context_AF.el.addEventListener('click', function(event) {
            console.log("click");
            //object clicked - lets create a cow!
            Context_AF.createFireplaceScreen();

            Context_AF.soundElem.components['sound'].stopSound(); //stop first so we aren't trying to play more than once at same time
            Context_AF.soundElem.components['sound'].playSound();
        });
    },
    createFireplaceScreen: function() {
        const Context_AF = this;

        //create element, than add attributes you want. If you are creating many =you want to 
        //consider "pooling" elements (i.e. not creating/deleting a bunch but just hiding/showing a certain MAX amount with visibility="true" or "false" )
        //see here: https://www.html5rocks.com/en/tutorials/speed/static-mem-pools/ 
        //see here: https://aframe.io/docs/0.8.0/components/pool.html
        let fireElem = document.createElement('a-entity');
        fireElem.setAttribute('obj-model', {obj:'/assets/models/FireplaceScreen.obj'});
        fireElem.setAttribute('material', {src:'/assets/textures/FireplaceScreen.png'});
        fireElem.setAttribute('remove-component', {}); 
        fireElem.setAttribute('position', {x:-8.4, y:0.04, z:-8.5});
        fireElem.setAttribute('scale', {x:0.06, y:0.05, z:0.06});
        let scene = document.querySelector('a-scene');
        scene.appendChild(fireElem);
    }
});