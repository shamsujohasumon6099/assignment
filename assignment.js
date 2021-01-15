// Feet to Mile convart function:

function feetToMile(feet){
    var mile = (feet/5280).toFixed(6);
    console.log(feet,'To Mile =',mile);
}

// Wood calculation function:

function woodCalculator(chare=0,table=0,bed=0){
    var totalChare = chare*1;
    var totalTable = table*3;
    var totalBed = bed*5;
    var totalWood = totalChare+totalTable+totalBed;
    console.log('Total wood need in Cubic feet =',totalWood);
}

//Brick calculation function:

function brickCalculator(floorNumber){
    var totalFeet = 0;
    if (floorNumber>=1){
        if (floorNumber<=10){
            totalFeet = floorNumber*15;
        }
        else{
            totalFeet = 10*15;
        }
    }
    if(floorNumber>=11){
        if (floorNumber<=20){
            var totalFloor = (floorNumber-10);
            totalFeet = (totalFloor*12)+totalFeet;
        }
        else{
            totalFeet = (10*12)+totalFeet;
        }
    }
    if(floorNumber>=21){
        totalFloor = floorNumber-20;
        totalFeet = (totalFloor*10)+totalFeet;
    }
    
    var totalBrick = totalFeet*1000;
    if (totalFeet>0){
        console.log('Total Bricks =',totalBrick);
    }
    else{
        console.log('Sorry There is no Floor or Bulding');
    }
    

}

// Sortest name frind in array: 

function tinyFriend(friendName){
    var minNameLength = friendName[0].length;
    for (var i=0; i<friendName.length;i++){
        if (friendName[i].length<minNameLength){
            minNameLength = friendName[i].length;
            var minName =friendName[i];
        }
    }
    console.log('Sortest name =',minName);
}




feetToMile(340);
woodCalculator(25,10,30);
brickCalculator(15);
var friendName = ['sumon','megh','shamsujoha','porag','muid','Shamsujohasumon','pranto','jui'];
tinyFriend(friendName);