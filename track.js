let matrix =    [[00, 23, 22, 13, 12],
                [01, 20, 21, 14, 11],
                [02, 19, 18, 15, 10],
                [03, -1, 17, 16, 09],
                [04, 05, 06, 07, 08]]

function setup(){
    createCanvas(500,500);
    stroke(255);
}

function draw(){
    background(100);
    fill(100,100,0);
    line(0,0,0,100);
    line(100,0,100,100);

    //logix
    let x=0 , y=0, dir=[0,1], prevdir = [0,1];
    let index = 0;
    while(true){
        if(index > 22){
            break;
        }
        console.log(x,y,index);
        prevdir = dir;
        if(x+1<5 && matrix[y][x+1] == index + 1){
            x += 1;
            dir = [0,1];
        }
        else if(x-1>=0 && matrix[y][x-1] == index + 1){
            x -= 1;
            dir = [0,-1];
        }
        else if(y+1<5 && matrix[y+1][x] == index + 1){
            y += 1;
            dir = [1,0];
        }
        else if(y-1>=0 && matrix[y-1][x] == index + 1){
            y -= 1;
            dir = [-1,0];
        }
        index++;

        if(dir[0] == 1 && dir[1] == 0){
            line(100*x, 100*y, 100*(x+1), 100*y);
            line(100*x, 100*(y+1), 100*(x+1), 100*(y+1))
        }
        if(dir[0] == -1 && dir[1] == 0){
            line(100*x, 100*y, 100*(x-1), 100*y);
            line(100*x, 100*(y+1), 100*(x-1), 100*(y+1))
        }
        else if(dir[0] == 0 && dir[1] == 1){
            line(100*x, 100*y, 100*(x), 100*(y+1));
            line(100*(x+1), 100*y, 100*(x+1), 100*(y+1))
        }
        else if(dir[0] == 0 && dir[1] == -1){
            line(100*x, 100*y, 100*(x), 100*(y-1));
            line(100*(x+1), 100*y, 100*(x+1), 100*(y-1))
        }
        else if(dir[0] == 1 && dir[1] == 1){
            arc(100*(x+1), 100*y, 200, 200, HALF_PI, PI)
        }
        // else if(dir[0] == 1 && dir[1] == -1){
        //     arc(100*x, 100*y, 200, 200, 0, HALF_PI)
        // }
        // else if(dir[0] == -1 && dir[1] == 1){
        //     arc(100*x, 100*(y+1), 200, 200, 3*HALF_PI, 4*HALF_PI)
        // }
        // else if(dir[0] == 1 && dir[1] == -1){
        //     arc(100*x, 100*(y+1), 200, 200, 3*HALF_PI, 4*HALF_PI)
        // }

    }
    noLoop();
    x = 4;
    y = 0;
    // arc(100*(x+1), 100*y, 200, 200, HALF_PI, PI)
    // arc(100*x, 100*y, 200, 200, 0, HALF_PI)
    // arc(100*x, 100*(y+1), 200, 200, 3*HALF_PI, 4*HALF_PI)

}