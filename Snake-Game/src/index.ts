import {Application, Ticker} from 'pixi.js';
import "./css/main.scss";
import {Game} from "./ts/Game";

onload = () => {
    const app = new Application({
        width: 500,
        height: 500,
        transparent: false,
        antialias: true,
    });

    app.renderer.resize(window.innerWidth, window.innerHeight);
    app.renderer.view.style.position = 'absolute';
    document.body.appendChild(app.view);

    const game = new Game(app);
    const ticker = Ticker.shared;
    ticker.add(game.update.bind(game));

}
