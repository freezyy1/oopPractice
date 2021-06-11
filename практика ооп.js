function ElectricalAppliances (name, light, model){
    this.appNum = 33
    this.name = name
    this.turn = false
    this.light = light
    this.model = model
}


function ElectricalAppliancesOutput (name, energyconsumption, weight){
    this.appNum = 345
    this.name = name
    this.turn = false
    this.electro = `${energyconsumption} watt`
    this.weight = `${weight} g`
}

ElectricalAppliancesOutput.prototype.ConnectionOn = function(connection){
    console.log(`connection is ${connection}`)
    this.turn = true
}

ElectricalAppliances.prototype.ConnectionOn = function(connection){
    console.log(`connection is ${connection}`)
    this.turn = true
}

ElectricalAppliancesOutput.prototype.ConnectionOff = function(connection){
    console.log(`connection is ${connection}`)
    this.turn = false
}

ElectricalAppliances.prototype.ConnectionOff = function(connection){
    console.log(`connection is ${connection}`)
    this.turn = false
}

const pc = new ElectricalAppliances('pc', 'on', 'intel 332');

const lamp = new ElectricalAppliances('lamp', 'on', 'xiaomi 123');

const monitor = new ElectricalAppliancesOutput('monitor', 324, 3300);

const mouse = new ElectricalAppliancesOutput('mouse', 32, 130);


pc.ConnectionOn('on');

lamp.ConnectionOn('on');

monitor.ConnectionOn('on');

mouse.ConnectionOn('on');

mouse.ConnectionOff('off');


console.log(pc);
console.log(lamp);
console.log(monitor);
console.log(mouse);