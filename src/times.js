    var time="18:15:00"; // Original Time
    var timeToadd = "00:15:00";  // Time to be added in min
    var timeToAddArr = timeToadd.split(":");             
    var ms = (60 * 60 * parseInt(timeToAddArr[0]) + 60 * (parseInt(timeToAddArr[1])) ) * 1000;
    
    var newTime =new Date('1970-01-01T' + time ).getTime() + ms
    var finalTime = new Date(newTime).toLocaleString('en-GB').slice(12 ,20)
