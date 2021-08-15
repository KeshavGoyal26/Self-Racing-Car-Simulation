class neuralNetwork {
    constructor(inputnodes, hiddennodes, outputnodes){
        this.inputnodes = inputnodes;
        this.hiddennodes = hiddennodes;
        this.outputnodes = outputnodes;

        let wih = new Array(hiddennodes);
        for(let i = 0; i < wih.length; i++){
            wih[i] = new Array(inputnodes);
        }

        let who = new Array(outputnodes);
        for(let i = 0; i < who.length; i++){
            who[i] = new Array(hiddennodes);
        }

        for(let i = 0; i < wih.length; i++){
            for(let j = 0; j < wih[i].length; j++){
                wih[i][j] = 2 * Math.random() - 1;
            }
        }

        for(let i = 0; i < who.length; i++){
            for(let j = 0; j < who[i].length; j++){
                who[i][j] = 2 * Math.random() - 1;
            }
        }

        this.wih = wih;
        this.who = who;

    }

    forwardpropagation(inputs){

        // inputs = this.normalize(inputs, 1);

        let hiddens = new Array(this.hiddennodes).fill(0);

        for(let i = 0; i < hiddens.length; i++){
            for(let j = 0; j < inputs.length; j++){
                hiddens[i] += inputs[j] * this.wih[i][j];
            } 
        }

        for(let i = 0; i < hiddens.length; i++){
            hiddens[i] = this.reLU(hiddens[i]);
        }

        let outputs = new Array(this.outputnodes).fill(0);

        for(let i = 0; i < outputs.length; i++){
            for(let j = 0; j < hiddens.length; j++){
                outputs[i] += hiddens[j] * this.who[i][j];
            } 
        }

        for(let i = 0; i < outputs.length; i++){
            outputs[i] = this.sigmoid(outputs[i]);
        }

        return outputs;
    }

    reLU(x){
        if (x > 0) return x;
        else return 0;
    }
    sigmoid(x) {
        return 1 / (1 + Math.exp(-x));
    }
    normalize(arr, max) {
        // find the max value
        var m = 0;
        for(var x=0; x<arr.length; x++) m = Math.max(m, arr[x]);
        // find the ratio
        var r = max / m;
        // normalize the array
        for(var x=0; x<arr.length; x++) arr[x] = arr[x] * r;
        return arr;
    }
    copy(){
        return([this.wih, this.who]);
    }
    // randon(){
    //     return Math.random();
    // }
    // mutate(){
    //     console.log("mutate");
    //     for(let i = 0; i < this.wih.length; i++){
    //         for(let j = 0; j < this.wih[i].length; j++){
    //             // if(Math.random() < 0.05)
    //             this.wih[i][j] = 2 * (this.randon()) - 1;
    //         }
    //     }
    //     for(let i = 0; i < this.who.length; i++){
    //         for(let j = 0; j < this.who[i].length; j++){
    //             // if(Math.random() < 0.05)
    //             this.who[i][j] = 2 * (this.randon()) - 1;
    //         }
    //     }

    // }
}
