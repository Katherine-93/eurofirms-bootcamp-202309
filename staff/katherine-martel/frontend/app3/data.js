var users = []
var posts = []

//create ids

function createId() {
    return Math.floor((Math.random() * 1000000000000000000)).toString(36)
}

users[0] = {
    name: 'Pepito Grillo',
    email: 'pepito@grillo.com',
    password: '123123123'
}

users[1] = {
    name: 'Campa Nilla',
    email: 'campa@nilla.com',
    password: '123123123'
}


posts[0] = {
    id: createId(),
    author: 'pepito@grillo.com',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png',
    imageDescription: 'Smile image',
    text: 'Smile!',
    likes: []
}

posts[1] = {
    id: createId(),
    author: 'campa@nilla.com',
    image: 'https://www.telemundo.com/sites/nbcutelemundo/files/styles/fit-1240w/public/sites/nbcutelemundo/files/images/article/2014/08/28/hello_kitty_140920568644_4.jpg',
    imageDescription: 'Hello Kitty image',
    text: 'Hello, Kitty!',
    likes: []
}

posts[2] = {
    id: createId(),
    author: 'campa@nilla.com',
    image: 'https://m.media-amazon.com/images/I/51-qisfjMnL.jpg',
    imageDescription: 'Doraemon image',
    text: 'Doraemon',
    likes: ['pepito@grillo.com']
}

posts[3] = {
    id: createId(),
    author: 'pepito@grillo.com',
    image: 'https://i.ebayimg.com/images/g/V9wAAOSw~e5ZU~Ls/s-l1200.webp',
    imageDescription: 'Pikachu image',
    text: 'Pikachu!',
    likes: ['campa@nilla.com']
}

posts[4] = {
    id: createId(),
    author: 'pepito@grillo.com',
    image: 'https://i.pinimg.com/550x/64/65/90/6465907c690be529106e4ada2c94d0d6.jpg',
    imageDescription: 'Atomic ant image',
    text: 'La Hormiga Atómica!',
    likes: []
}
