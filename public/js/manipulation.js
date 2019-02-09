AFRAME.registerComponent('create-ball');

function generateNumber() {
    return(Math.floor(Math.random() * 10));
}

function generatePositionVector() {
    return(generateNumber().toString() + " " + "0" + " " + generateNumber().toString());
}

console.log("random number: " + generateNumber());

console.log("position vector: " + generatePositionVector());

document.addEventListener('keyup', function (k) {
    if (k.keyCode == 32) {

        let entity = document.createElement('create-ball');
        entity.setAttribute('position', generatePositionVector());
        entity.setAttribute('obj-model', 'obj:/assets/models/Ball.obj')
        entity.setAttribute('material', 'src:/assets/textures/Ball.png')
        scene.appendChild(entity);
        console.log("created");


    ;}

});
