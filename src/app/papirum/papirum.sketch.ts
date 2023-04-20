import * as p5 from 'p5';

export class Sketch {

    private engine: p5;
    protected node:string;

    constructor(_node:string) {
        this.node = _node;
        this.engine = new p5(this.drawing)
    }

    private drawing = function (p: p5,) {
        p.setup = () => {
            p.createCanvas(p.windowWidth, p.windowHeight).parent();
            console.log('SETUP')
            p.background(0);
        };
        p.draw = () => {

            p.background(0);
        }
    }
}