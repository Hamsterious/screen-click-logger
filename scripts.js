document.addEventListener("click", function (e) {
    var coordinates = document.querySelector('#coordinates');
    var li = document.createElement("li");
    var newCoordinates = document.createTextNode('Coordinates: x(' + e.screenX + ')  y(' + e.screenY + ')');
    li.appendChild(newCoordinates);
    coordinates.appendChild(li);
});