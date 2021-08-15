var count = 0;
var flag = true;
var cw = 10, ch = 20;
let diagonal = Math.sqrt((500)/4)
// var winline = [[248,496],[248,506],[248,518],[248,525],[248,534],[248,542],[248,546],[248,551]]
var exarr = []
// var exarr = [[258,558],[256,490],[548,484],[541,82],[504,47],[448,44],[416,151],[468,187],[366,118],[361,55],[344,317],[161,271],[458,416],[416,442],[112,554],[68,518],[406,49],[248,164],[368,177],[469,246],[112,269],[203,173]];



var obst1 = [[294,570],[301,570],[312,571],[328,572],[335,572],[345,573],[351,573],[360,573],[371,573],[383,573],[395,572],[405,572],[416,569],[432,570],[440,570],[456,566],[464,566],[476,563],[491,555],[500,554],[509,547],[522,540],[528,536],[536,523],[550,508],[557,489],[560,467],[565,446],[568,431],[567,419],[565,408],[565,394],[564,382],[566,367],[566,359],[565,346],[564,333],[566,320],[566,303],[563,288],[565,276],[567,261],[567,248],[568,238],[567,222],[564,211],[567,198],[567,188],[568,173],[568,163],[566,150],[568,137],[564,124],[560,110],[557,94],[548,78],[536,61],[521,46],[506,37],[485,30],[467,30],[452,32],[431,32],[416,31],[404,32],[389,37],[378,41],[365,41],[347,39],[333,45],[321,49],[303,47],[285,42],[270,42],[292,46],[256,42],[245,31],[235,37],[220,30],[209,32],[196,32],[176,30],[165,28],[148,30],[132,34],[120,38],[108,39],[89,48],[80,53],[68,59],[61,72],[59,85],[45,100],[37,115],[36,129],[32,142],[32,158],[31,169],[34,181],[38,196],[41,214],[48,225],[56,238],[64,250],[76,258],[93,266],[103,272],[118,277],[136,282],[152,280],[174,275],[188,273],[199,266],[208,262],[214,259],[219,255],[219,255],[219,255],[219,255],[219,255],[220,257],[220,260],[221,266],[223,270],[224,278],[230,281],[231,291],[236,298],[243,305],[249,312],[257,314],[271,319],[283,324],[294,326],[308,326],[327,326],[344,326],[361,317],[375,303],[380,291],[385,282],[391,281],[391,281],[392,279],[393,277],[393,277],[393,277],[393,277],[393,277],[393,277],[393,277],[393,277],[393,277],[392,286],[392,289],[392,289],[392,294],[392,298],[392,301],[392,305],[393,308],[392,314],[394,318],[394,326],[394,335],[393,342],[393,351],[392,351],[390,355],[390,359],[390,359],[389,362],[389,362],[389,362],[382,362],[381,362],[381,362],[370,358],[364,355],[360,354],[348,351],[339,349],[329,344],[317,339],[308,340],[294,336],[288,332],[277,329],[268,326],[245,320],[253,320],[233,314],[216,304],[198,298],[186,296],[170,293],[156,293],[138,293],[126,293],[119,295],[105,298],[88,310],[82,316],[74,325],[66,337],[60,348],[53,355],[47,372],[45,389],[44,405],[40,421],[40,426],[40,439],[39,452],[40,458],[40,466],[40,474],[40,482],[44,490],[48,510],[51,514],[60,523],[71,535],[81,544],[96,550],[111,560],[124,564],[139,564],[148,568],[163,569],[178,569],[190,566],[201,572],[208,570],[212,570],[216,570],[221,570],[232,570],[239,570],[246,569],[257,568],[269,569],[281,569]];

var obst2 = [[284,480],[294,480],[304,480],[319,480],[329,480],[341,480],[348,480],[356,480],[365,480],[382,478],[388,479],[398,480],[411,477],[420,478],[424,474],[432,475],[439,477],[444,478],[453,475],[460,470],[468,466],[470,465],[472,460],[476,457],[476,449],[476,449],[476,447],[476,441],[477,432],[476,420],[480,410],[480,401],[481,390],[480,376],[482,362],[482,348],[481,327],[481,315],[482,298],[480,282],[481,271],[481,257],[481,245],[484,229],[483,214],[483,201],[483,194],[483,182],[482,169],[482,154],[480,142],[477,133],[477,133],[477,133],[473,125],[473,125],[473,125],[463,122],[463,122],[463,122],[454,122],[447,122],[437,122],[428,125],[411,125],[392,127],[378,132],[364,132],[347,132],[336,134],[320,134],[305,134],[292,132],[275,132],[266,129],[248,123],[229,123],[222,117],[207,117],[197,114],[188,115],[176,115],[166,117],[157,114],[145,118],[140,122],[147,120],[132,123],[128,129],[122,134],[122,138],[119,142],[118,147],[118,148],[118,150],[118,151],[116,159],[118,166],[120,171],[122,179],[126,183],[127,189],[131,190],[140,191],[143,193],[149,194],[155,194],[160,191],[165,184],[173,184],[180,179],[188,173],[196,170],[204,164],[210,162],[217,160],[228,158],[239,156],[248,158],[255,158],[264,163],[268,166],[271,172],[278,180],[282,188],[284,192],[289,198],[294,206],[295,214],[296,220],[298,223],[302,227],[304,236],[308,240],[308,243],[312,242],[313,238],[316,236],[321,228],[327,222],[328,219],[332,207],[338,202],[342,194],[351,187],[356,181],[362,170],[376,157],[391,148],[405,145],[421,145],[437,146],[449,154],[460,166],[468,182],[472,199],[475,222],[474,234],[474,257],[475,281],[475,294],[476,306],[473,314],[474,322],[476,327],[477,338],[473,345],[475,346],[475,357],[478,373],[475,382],[468,402],[467,417],[454,426],[441,436],[428,446],[406,450],[387,450],[378,449],[368,446],[347,440],[333,438],[338,441],[319,432],[304,428],[312,428],[289,421],[267,412],[273,418],[255,409],[233,402],[244,405],[223,398],[195,387],[207,390],[184,382],[173,379],[164,379],[148,378],[156,378],[148,378],[140,381],[137,381],[136,382],[136,390],[136,390],[132,391],[131,396],[128,402],[129,402],[128,408],[128,414],[128,417],[128,425],[130,433],[128,439],[130,452],[131,455],[132,455],[133,465],[132,469],[133,469],[137,474],[136,477],[137,475],[141,475],[143,478],[144,478],[150,479],[160,479],[164,479],[172,479],[177,480],[180,480],[192,480],[200,480],[213,480],[222,480],[228,481],[232,481],[244,481],[256,481],[269,481]];

var arr1 = [[285,558],[318,556],[350,558],[381,558],[412,555],[448,554],[478,549],[508,536],[538,507],[556,458],[557,420],[557,378],[557,340],[558,299],[558,258],[557,218],[558,185],[560,150],[552,106],[523,63],[474,44],[427,44],[387,51],[340,60],[303,58],[265,52],[226,42],[186,38],[144,41],[100,53],[65,82],[46,117],[40,158],[47,201],[68,237],[94,258],[140,272],[188,262],[212,250],[223,242],[228,250],[235,270],[248,292],[266,310],[316,320],[364,303],[383,278],[396,258],[402,256],[401,262],[402,278],[403,295],[403,310],[401,331],[402,352],[401,366],[398,374],[388,376],[369,369],[343,358],[314,347],[278,337],[240,321],[203,310],[167,301],[130,301],[94,318],[70,342],[56,378],[48,414],[51,446],[52,472],[58,500],[87,537],[136,554],[166,557],[191,555],[208,558],[234,556]];
var arr2 = [[280,490],[314,490],[346,490],[379,487],[410,486],[429,486],[455,484],[473,476],[484,462],[489,446],[488,418],[490,375],[489,339],[490,299],[489,258],[489,216],[490,178],[488,144],[484,122],[473,113],[460,111],[435,114],[394,120],[344,124],[302,126],[259,120],[216,109],[183,108],[152,107],[131,114],[116,128],[109,145],[109,159],[109,177],[121,196],[136,202],[147,205],[169,195],[190,182],[223,164],[265,180],[287,214],[296,240],[309,257],[316,254],[328,241],[340,218],[352,198],[384,161],[448,162],[468,217],[470,274],[469,309],[469,334],[468,353],[468,392],[442,430],[397,443],[360,437],[331,427],[299,415],[268,403],[232,388],[195,376],[163,368],[141,369],[127,378],[122,390],[117,403],[119,422],[119,447],[120,466],[124,482],[132,487],[141,491],[163,494],[190,491],[216,489],[235,490]];




nCars = 250;
let cars = [];
class Car {
    constructor(x, y, flag, speed, angle, score)
    {
        this.x = x;
        this.y = y;
        this.flag = flag;
        this.speed = speed;
        this.angle = angle;
        this.score = score;
        this.lap = 1;
        this.brain = new neuralNetwork(8, 10, 2);
        this.x1 = this.x + diagonal * Math.cos(this.angle + Math.acos(cw/diagonal));
        this.y1 = this.y + diagonal * Math.sin(this.angle + Math.acos(cw/diagonal));
        this.x2 = this.x + diagonal * Math.cos(this.angle + 3.14/2  + Math.asin(cw/diagonal));
        this.y2 = this.y + diagonal * Math.sin(this.angle + 3.14/2  + Math.asin(cw/diagonal));
        this.x3 = this.x + diagonal * Math.cos(this.angle + 3.14  + Math.acos(cw/diagonal));
        this.y3 = this.y + diagonal * Math.sin(this.angle + 3.14  + Math.acos(cw/diagonal));
        this.x4 = this.x + diagonal * Math.cos(this.angle + 3 * 3.14/2  + Math.asin(cw/diagonal));
        this.y4 = this.y + diagonal * Math.sin(this.angle + 3 * 3.14/2 + Math.asin(cw/diagonal));
        this.sensors = [];
    }
}
for(let i = 0; i < nCars; i++){
    cars.push(new Car(300 + Math.random(-10,10), 525 + Math.random(-10,10), true, 3, 0, 4));
}

let car1 = new Car(300, 525, true, 1, 0, 4)
let car2 = new Car(300, 520, true, 1, 0, 4)

var cline = 4;

var x = 300;
var y = 520;
var angle = 0;

var speed = 1;
let trackimg;
function preload(){
    carimg = loadImage('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnFolIEFS9Uh88m_m2_XQw4HIfmHHoK0BmOoRJLbdCjRqUaUG4HjnGUIZQzvAdG_gdCVk&usqp=CAU');
    
}
function setup(){
    createCanvas(600,600);
    stroke(255);
    trackimg = loadImage('https://st2.depositphotos.com/4275257/6307/v/600/depositphotos_63070825-stock-illustration-cartoon-racing-map-for-game.jpg');
}

function draw(){
    background(trackimg);
    // loadPixels();

    fill(255,255,255);
    let bestScore = 0;
    let bestCar = 0;
    for(let n = 0; n < cars.length; n++){
        if(cars[n].flag == true){
            push();
            translate(cars[n].x, cars[n].y);
            rotate(cars[n].angle);
            if(n == 0){
                fill(255,0,255);
                rect(-ch/2 + 2, -cw/2 + 2, ch + 2, cw + 2);
            }
            
            else{
                fill(255,0,0);
                // rect(-ch/2, -cw/2, ch, cw);
            }
            rect(-ch/2, -cw/2, ch, cw);
            
            pop();
        }
        
    }

    let over = true;
    for(let n = 0; n < cars.length; n++){
        if(cars[n].flag == true){
            over = false;
            break;
        }    
    }
    
    if(over == true || keyIsDown(109) || keyIsDown(189)){
        for(let n = 0; n < cars.length; n++){
            if(bestScore < cars[n].score /*+ 79 * cars[n].lap*/){
                bestScore = cars[n].score /*+ 79 * cars[n].lap*/;
                bestCar = n;
            }
        }   
        
        let weights = cars[bestCar].brain.copy();
        for(let n = 0; n < cars.length; n++){
            

            // cars[n].brain.wih = weights[0];
            // cars[n].brain.who = weights[1];
            // cars[n].brain.mutate();
            // console.log(Math.random())

            if(true){
                for(let i = 0; i < cars[n].brain.wih.length; i++){
                    for(let j = 0; j < cars[n].brain.wih[i].length; j++){
                        if(Math.random() < 0.2 && n!=0){
                            cars[n].brain.wih[i][j] = weights[0][i][j] + randomGaussian(0, 0.1);
                        }
                        else{
                            cars[n].brain.wih[i][j] = weights[0][i][j] ;
                        }
                    }
                }
                for(let i = 0; i < cars[n].brain.who.length; i++){
                    for(let j = 0; j < cars[n].brain.who[i].length; j++){
                        if(Math.random() < 0.2 && n!=0){
                            cars[n].brain.who[i][j] = weights[1][i][j] + randomGaussian(0, 0.1);
                        }
                        else{
                            cars[n].brain.who[i][j] = weights[1][i][j] ;
                        }
                    }
                }
            }
                        
            cars[n].x = 300 ;
            cars[n].y = 515  ;
            cars[n].flag = true;
            cars[n].speed = 3 ;
            cars[n].angle = 0 ;
            cars[n].score = 4;

            // console.log(cars[n].brain);
        }       
    }
    function reLU(x){
        if (x < 0) return 0;
        else if (x > obst1.length) return obst1.length;
        else return x;
    }

    
    for(let i = 0; i < cars.length; i++){
        cars[i].sensors = [];
        for(let a = -2; a <= 2; a++){
            let lx = cars[i].x, ly = cars[i].y, cangle = cars[i].angle;
            cangle += a * 3.14 / 4;
            let oflag = true;
            while(oflag){
                lx += 10 * cos(cangle)
                ly += 10 * sin(cangle)
                for(let j = 0 ; j < obst1.length ; j++){
                    let dist = (obst1[j][0] - lx)*(obst1[j][0] - lx) + (obst1[j][1] - ly)*(obst1[j][1] - ly)
                    if(dist < 200){
                        
                        oflag = false;
                        break;
                    }
                    dist = (obst2[j][0] - lx)*(obst2[j][0] - lx) + (obst2[j][1] - ly)*(obst2[j][1] - ly)
                    if(dist < 200){
                        
                        oflag = false;
                        break;
                    }
                }  
            }
            cars[i].sensors.push([lx, ly]);
            
            // line(cars[i].x, cars[i].y, lx, ly);
        }
        // console.log(sensors)
            // line(cars[i].x, cars[i].y, cars[i].sensors[0][0], cars[i].sensors[0][1]);
            // line(cars[i].x, cars[i].y, cars[i].sensors[1][0], cars[i].sensors[1][1]);
            // line(cars[i].x, cars[i].y, cars[i].sensors[2][0], cars[i].sensors[2][1]);
            // line(cars[i].x, cars[i].y, cars[i].sensors[3][0], cars[i].sensors[3][1]);
            // line(cars[i].x, cars[i].y, cars[i].sensors[4][0], cars[i].sensors[4][1]);
            
    }
        

    // let sensors = [];
    // for(let i = 0; i < cars.length; i++){
    //     for(let a = -2; a <= 2; a++){
    //         let lx = cars[i].x, ly = cars[i].y, cangle = cars[i].angle;
    //         cangle += a * 3.14 / 4;
            
    //         for(let j = cars[i].score * 3 ; j < obst1.length; j++){
    //             let dist = ((obst1[j][1] - ly) - Math.sin(cangle)/Math.cos(cangle) * (obst1[j][0] - lx)) / Math.sqrt(1 + Math.sin(cangle)/Math.cos(cangle) * Math.sin(cangle)/Math.cos(cangle));
               
    //             if(dist < 50){
                    
    //                 oflag = false;
    //                 sensors.push([obst1[j][0], obst1[j][1]]);
    //                 break;
    //             }
    //             dist = ((obst2[j][1] - ly) - Math.sin(cangle)/Math.cos(cangle) * (obst2[j][0] - lx)) / Math.sqrt(1 + Math.sin(cangle)/Math.cos(cangle) * Math.sin(cangle)/Math.cos(cangle));
    //             if(dist < 50){
                    
    //                 oflag = false;
    //                 sensors.push([obst2[j][0], obst2[j][1]]);
    //                 break;
    //             }
            
    //         }
            
            
    //         // line(cars[i].x, cars[i].y, lx, ly);
    //     }
    //     // console.log(sensors)
    //     // for(let s = 0; s < sensors.length; s++){
    //         line(cars[i].x, cars[i].y, sensors[0][0], sensors[0][1]);
    //         line(cars[i].x, cars[i].y, sensors[1][0], sensors[1][1]);
    //         line(cars[i].x, cars[i].y, sensors[2][0], sensors[2][1]);
    //         line(cars[i].x, cars[i].y, sensors[3][0], sensors[3][1]);
    //         line(cars[i].x, cars[i].y, sensors[4][0], sensors[4][1]);
    //     // }
        
    // }
    

    for(let n = 0; n < cars.length; n++){
        if (cars[n].flag) {
        cars[n].x += cars[n].speed*cos(cars[n].angle);
        cars[n].y += cars[n].speed*sin(cars[n].angle);
        }


        
        
        // fp = nn.forwardpropagation([cars[n].x, cars[n].y, arr1[cars[n].score][0], arr1[cars[n].score][1], arr2[cars[n].score][0], arr2[cars[n].score][1], arr1[cars[n].score + 2][0], arr1[cars[n].score + 2][1] , arr2[cars[n].score + 2][0], arr2[cars[n].score] + 2][1]);
        if(cars[n].flag){
            fp = cars[n].brain.forwardpropagation([
                cars[n].x/600 ,
                cars[n].y/600 ,
                cars[n].angle/6.28,
                ((cars[n].x - cars[n].sensors[0][0])*(cars[n].x - cars[n].sensors[0][0]) +
                    (cars[n].y - cars[n].sensors[0][1])*(cars[n].y - cars[n].sensors[0][1])),
    
                    ((cars[n].x - cars[n].sensors[1][0])*(cars[n].x - cars[n].sensors[1][0]) +
                    (cars[n].y - cars[n].sensors[1][1])*(cars[n].y - cars[n].sensors[1][1])),
    
                    ((cars[n].x - cars[n].sensors[2][0])*(cars[n].x - cars[n].sensors[2][0]) +
                    (cars[n].y - cars[n].sensors[2][1])*(cars[n].y - cars[n].sensors[2][1])),
    
                    ((cars[n].x - cars[n].sensors[3][0])*(cars[n].x - cars[n].sensors[3][0]) +
                    (cars[n].y - cars[n].sensors[3][1])*(cars[n].y - cars[n].sensors[3][1])),
                    
                    ((cars[n].x - cars[n].sensors[4][0])*(cars[n].x - cars[n].sensors[4][0]) +
                    (cars[n].y - cars[n].sensors[4][1])*(cars[n].y - cars[n].sensors[4][1]))])
            // fp = cars[n].brain.forwardpropagation(((cars[n].x - cars[n].sensors[0][0])*(cars[n].x - cars[n].sensors[0][0]) +
            //     (cars[n].y - cars[n].sensors[0][1])*(cars[n].y - cars[n].sensors[0][1])),

            //     ((cars[n].x - cars[n].sensors[1][0])*(cars[n].x - cars[n].sensors[1][0]) +
            //     (cars[n].y - cars[n].sensors[1][1])*(cars[n].y - cars[n].sensors[1][1])),

            //     ((cars[n].x - cars[n].sensors[2][0])*(cars[n].x - cars[n].sensors[2][0]) +
            //     (cars[n].y - cars[n].sensors[2][1])*(cars[n].y - cars[n].sensors[2][1])),

            //     ((cars[n].x - cars[n].sensors[3][0])*(cars[n].x - cars[n].sensors[3][0]) +
            //     (cars[n].y - cars[n].sensors[3][1])*(cars[n].y - cars[n].sensors[3][1])),
                
            //     ((cars[n].x - cars[n].sensors[4][0])*(cars[n].x - cars[n].sensors[4][0]) +
            //     (cars[n].y - cars[n].sensors[4][1])*(cars[n].y - cars[n].sensors[4][1])))
        }
        

        // fp = [0, 1, 2, 3,4 , 5,6 ,7, 8, 2]
        if ((keyIsDown(UP_ARROW) || fp[0] > 0.65) && cars[n].flag) {
            cars[n].speed += 0.001;
        }
        if ((keyIsDown(DOWN_ARROW) || fp[0] < 0.35) && cars[n].flag) {
            cars[n].speed -= 0.00005;
        }
        if ((keyIsDown(LEFT_ARROW) || fp[1] >= 0.5) && cars[n].flag) {
            cars[n].angle -= cars[n].speed * 0.02 ;
        }
        if ((keyIsDown(RIGHT_ARROW) || fp[1] < 0.5) && cars[n].flag) {
            cars[n].angle += cars[n].speed * 0.02 ;
        }

    }
    
    // for(let i = 0; i < arr1.length; i++){
    //     fill(255,0,0);
    //     ellipse(arr1[i][0], arr1[i][1], 10, 10);
    // }
    // for(let i = 0; i < arr2.length; i++){
    //     fill(120,0,150);
    //     ellipse(arr2[i][0], arr2[i][1], 10, 10);
    // }
    // for(let i = 0; i < exarr.length; i++){
    //     fill(120,100,10);
    //     ellipse(exarr[i][0], exarr[i][1], 10, 10);
    // }
    // for(let i = 0; i < obst1.length; i++){
    //     fill(0,55,0);
    //     ellipse(obst1[i][0], obst1[i][1], 12, 12);
    // }
    // for(let i = 0; i < obst2.length; i++){
    //     fill(0,55,0);
    //     ellipse(obst2[i][0], obst2[i][1], 12, 12);
    // }

    // for(let i = 0; i < winline.length; i++){
    //     fill(0,55,0);
    //     ellipse(winline[i][0], winline[i][1], 10, 10);
    // }

    for(let n = 0; n < cars.length; n++){
        cars[n].x1 = cars[n].x + diagonal * Math.cos(cars[n].angle + Math.acos(cw/diagonal));
        cars[n].y1 = cars[n].y + diagonal * Math.sin(cars[n].angle + Math.acos(cw/diagonal));
        cars[n].x2 = cars[n].x + diagonal * Math.cos(cars[n].angle + 3.14/2  + Math.asin(cw/diagonal));
        cars[n].y2 = cars[n].y + diagonal * Math.sin(cars[n].angle + 3.14/2  + Math.asin(cw/diagonal));
        cars[n].x3 = cars[n].x + diagonal * Math.cos(cars[n].angle + 3.14  + Math.acos(cw/diagonal));
        cars[n].y3 = cars[n].y + diagonal * Math.sin(cars[n].angle + 3.14  + Math.acos(cw/diagonal));
        cars[n].x4 = cars[n].x + diagonal * Math.cos(cars[n].angle + 3 * 3.14/2  + Math.asin(cw/diagonal));
        cars[n].y4 = cars[n].y + diagonal * Math.sin(cars[n].angle + 3 * 3.14/2 + Math.asin(cw/diagonal));
    }
   

    // for(let n = 0; n < cars.length; n++){
    //     ellipse(cars[n].x1,cars[n].y1,4,4);
    //     ellipse(cars[n].x2,cars[n].y2,4,4);
    //     ellipse(cars[n].x3,cars[n].y3,4,4);
    //     ellipse(cars[n].x4,cars[n].y4,4,4);
    // }
  
    for(let n = 0; n < cars.length; n++){
        if(cars[n].flag){
            for(let i = 0; i < obst1.length; i++){
                pointx = obst1[i][0];
                pointy = obst1[i][1];
        
                if((pointx - cars[n].x1)*(pointx - cars[n].x1) + (pointy - cars[n].y1)*(pointy - cars[n].y1) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x2)*(pointx - cars[n].x2) + (pointy - cars[n].y2)*(pointy - cars[n].y2) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x3)*(pointx - cars[n].x3) + (pointy - cars[n].y3)*(pointy - cars[n].y3) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x4)*(pointx - cars[n].x4) + (pointy - cars[n].y4)*(pointy - cars[n].y4) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
            }
            for(let i = 0; i < obst2.length; i++){
                pointx = obst2[i][0];
                pointy = obst2[i][1];
        
                if((pointx - cars[n].x1)*(pointx - cars[n].x1) + (pointy - cars[n].y1)*(pointy - cars[n].y1) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x2)*(pointx - cars[n].x2) + (pointy - cars[n].y2)*(pointy - cars[n].y2) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x3)*(pointx - cars[n].x3) + (pointy - cars[n].y3)*(pointy - cars[n].y3) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
                if((pointx - cars[n].x4)*(pointx - cars[n].x4) + (pointy - cars[n].y4)*(pointy - cars[n].y4) < 100){
                    console.log("Car "+ n + " collide with score " + cars[n].score);
                    cars[n].flag = false;
                    // return true;
                }
            }
            
        }
        fill(100,100,100);
        // line(arr1[cars[n].score][0], arr1[cars[n].score][1], arr2[cars[n].score][0], arr2[cars[n].score][1])
        //line intersection
        if((cars[n].y1 - arr1[cars[n].score][1] - (arr1[cars[n].score][1] - arr2[cars[n].score][1])/(arr1[cars[n].score][0] - arr2[cars[n].score][0]) * (cars[n].x1 - arr1[cars[n].score][0])) * (cars[n].y3 - arr1[cars[n].score][1] - (arr1[cars[n].score][1] - arr2[cars[n].score][1])/(arr1[cars[n].score][0] - arr2[cars[n].score][0]) * (cars[n].x3 - arr1[cars[n].score][0])) < 0){
            cars[n].score += 1;
            if(cars[n].score >= 79){
                cars[n].lap ++;
            }
            cars[n].score = cars[n].score % 79;
        }
    }
}



// function mouseClicked() {
   
//     obst2.push([mouseX,mouseY])    

//     console.log(obst2)
// }
// function keyPressed() {
//     if (keyCode === UP_ARROW) {
//       x = x + 10;
//     } else if (keyCode === DOWN_ARROW) {
//      y = y + 10;
//     }
//     if (keyCode === LEFT_ARROW) {
//       x = x - 5;
//     } else if (keyCode === RIGHT_ARROW) {
//       x = x + 5;
//     }
// }

// // function getPixel(img, x, y) {

// //     let canvas = document.createElement('canvas');
// //     canvas.width = 1;
// //     canvas.height = 1;
// //     canvas.getContext('2d').drawImage(img, x, y, 1, 1, 0, 0, 1, 1);;
// //     let pixelData = canvas.getContext('2d').getImageData(0, 0, 1, 1).data;

// //     return pixelData;   
// // 

// function draw(){
//     background(trackimg)
    
//     image(trackimg, 600, 600);
//     pxarr = new Array(600);
//     for(let i = 0; i < 600; i++){
//         pxarr[i] = new Array(600);
//     }
//     for(let i = 0; i < 600; i++){
//         for(let j = 0; j < 600; j++){
//             pxarr[i][j] = get(i, j) ;
//         }
//     }
//     // // console.log(pxarr)
//     // let c = get(400, 300);
//     // // // fill();
//     // console.log(c)
//     // noLoop();

// }

