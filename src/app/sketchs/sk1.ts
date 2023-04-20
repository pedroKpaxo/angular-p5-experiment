import { Papirum } from "../papirum/papirum";

export class PulseController extends Papirum {

    constructor(_parent: HTMLElement) {
        super(_parent);
        this.startP5JS();
    }

    setup() {
        this.p5.createCanvas(400, 400);
    }

    draw() {
        console.log('PULSE')
        this.p5.stroke(0);
        this.p5.circle(200, 200, 2);
    }
}