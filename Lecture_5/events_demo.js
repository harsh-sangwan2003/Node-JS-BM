const event = require('events');
const eventEmitterObject = new event.EventEmitter();

function openDoor(){

    console.log("Door is open");
}

function openGate(){

    console.log("Gate is open");
}

function pickUpTheCall(userName){

    console.log("Call is picked up",userName);
}

eventEmitterObject.on('doorOpen', openDoor);
eventEmitterObject.on('gateOpen', openGate);
eventEmitterObject.once('call', pickUpTheCall);

eventEmitterObject.emit('doorOpen');
eventEmitterObject.emit('gateOpen');
eventEmitterObject.emit('call',"Amit");
eventEmitterObject.emit('call');