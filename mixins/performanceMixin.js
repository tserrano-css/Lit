export const PerformanceMixin = (superClass) => 
    class extends superClass {
        constructor() {
            super();
            this.times = 0;
        }

        startTime() {
            this.timeStart = performance.now(); //milisegundos de la hora actual
        }

        endTime() {
            this.timeEnd = performance.now(); //milisegundos de la hora actual
        }

        reportPerformance() {
            console.log(`${this.times} times: ${this.timeEnd - this.timeStart} ms`);
        }
            
    }