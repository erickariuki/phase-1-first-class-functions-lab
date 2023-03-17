// Code your solution in this file!
const drivers=['Stacy', 'Eric', 'Kanambo', 'Johnie']
function returnFirstTwoDrivers(drivers){
    return drivers.slice(0,2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2)
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
function createFareMultiplier(integer) {
    return function(fare) {
        return fare*integer;
    }
}
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}
