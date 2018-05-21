import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';

const app = document.getElementById('app');
//const holaMundo = <h1>hola Mundo!</h1>;

// ReactDOM.render(que voy a renderizar, donde lo haré)
//ReactDOM.render(holaMundo , app);
//render(<Media type="video" title="Que es responsive design ?" author="ISMAELJDz"  image="./images/covers/responsive.jpg" />, app);
render( <Playlist data={data} />, app);