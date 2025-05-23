function clearPlanets() {
    document.getElementById("contentContainer").style.display = 'none';
}

document.addEventListener('keydown', function (event) {
    var camera = document.querySelector('a-entity[camera]');
    var currentPosition = camera.getAttribute('position');
    if (event.key === ' ') {
        camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y + 5,
            z: currentPosition.z
        });
    }
    if (event.key === 'c') {
        camera.setAttribute('position', {
            x: currentPosition.x,
            y: currentPosition.y - 5,
            z: currentPosition.z
        });
    }
    if (event.key === 't') {
        camera.setAttribute('position', {
            x: -550,
            y: 150,
            z: -15,
        });
    }
    if (event.key === 'y') {
        camera.setAttribute('position', {
            x: 0,
            y: 10,
            z: 0,
        });
    }
});
document.addEventListener('click', () => {
    if (
        typeof DeviceOrientationEvent !== 'undefined' &&
        typeof DeviceOrientationEvent.requestPermission === 'function'
    ) {
        DeviceOrientationEvent.requestPermission()
            .then((response) => {
                if (response === 'granted') {
                    console.log('Motion access granted.');
                }
            })
            .catch(console.error);
    }
});