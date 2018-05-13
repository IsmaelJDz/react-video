import React from 'react';
import {render} from 'react-dom';
import Media from './src/playlist/components/media';

const app = document.getElementById('app');
const holaMundo = <h1>hola Mundo!</h1>;

// ReactDOM.render(que voy a renderizar, donde lo haré)
//ReactDOM.render(holaMundo , app);
render(<Media title="Que es responsive design ?" author="ISMAELJDz"  image="./images/covers/responsive.jpg" />, app);