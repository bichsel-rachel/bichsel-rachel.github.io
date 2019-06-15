//Onload example
function animation() {
    var heart = document.getElementById("animate");
heart.animate(
[
    {transform: 'scale(1)', offset: 0},
    {transform: 'scale(2)',  offset: .5},
    {transform: 'scale(1)',  offset: 1},
], {
    duration: 2000,
    easing: 'ease-in-out',
    delay: 10,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'forwards'
}
);
}