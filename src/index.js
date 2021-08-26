import Post from './Post';
import './scss/main.scss';
import imageBoy from './assets/img/image-boy.jpg';

let post = new Post('Hello world', imageBoy);
console.log("Hello world");
console.log(post.toString());