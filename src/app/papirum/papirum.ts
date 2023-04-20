import * as p5 from 'p5';
import { Injectable } from '@angular/core';

@Injectable()
export abstract class Papirum {
    protected p5!: p5;
    protected parent:HTMLElement;

    abstract setup(): void;
    abstract draw(): void;

    constructor(_parent:HTMLElement){
        this.parent = _parent;
    }

    startP5JS(): void {
        this.p5 = new p5(this.generate_sketch(), this.parent);
    }

    protected generate_sketch() {

        return ((p: p5) => {
            p.setup = function () {
                this.setup();
            };

            p.draw = function () {
                this.draw();
            };
        })
    }
}