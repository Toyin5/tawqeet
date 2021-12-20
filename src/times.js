function addTime (time, toAdd)  {
    let timeToAddArr = toAdd.split(":");             
    let ms = (60 * 60 * parseInt(timeToAddArr[0]) +  60 * (parseInt(timeToAddArr[1])) ) * 1000;

    let newTime =new Date('1970-01-01T' + time ).getTime() + ms
    return new Date(newTime).toLocaleString('en-GB').slice(12 ,20)
}
function subTime (time, toAdd)  {
    let timeToAddArr = toAdd.split(":");             
    let ms = (60 * 60 * parseInt(timeToAddArr[0]) -  60 * (parseInt(timeToAddArr[1])) ) * 1000;
        
    let newTime =new Date('1970-01-01T' + time ).getTime() + ms
    return new Date(newTime).toLocaleString('en-GB').slice(12 ,20)
}
    
//console.log(subTime("18:15:00", "00:56").slice(0,-3));
export {addTime, subTime};