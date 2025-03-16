var phrBody = [
    "/tech/bg/randombg1.jpg",
    "/tech/bg/randombg2.jpg",
    "/tech/bg/randombg3.jpg",
    "/tech/bg/randombg4.jpg"
];

function setRandomBackgroundImage(element, imageArray, position = 'bottom') {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    const randomImage = imageArray[randomIndex];
    element.style.backgroundImage = `url('${randomImage}')`;
    element.style.backgroundPosition = position;
    element.style.backgroundRepeat = 'no-repeat';
}

const body = document.body;

setRandomBackgroundImage(body, phrBody);