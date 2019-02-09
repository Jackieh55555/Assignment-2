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
        screenElem.setAttribute('position', {x:6.97, y:0.85, z:2.2});
        screenElem.setAttribute('scale', {x:0.03, y:0.032, z:0.037});

        let scene = document.querySelector('a-scene');
        scene.appendChild(screenElem);
    }
});