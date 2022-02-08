function doingSomething(anyFunctionReference, name) {
    anyFunctionReference(name);
}

const running = name => console.log(`${name}`, "is running");

doingSomething(running, "Andreas");

const drinking = name => console.log(`${name}`, "is drinking");

doingSomething(drinking, "Andreas");

const anyOtherAction = name => console.log(`${name}`, "is doing any other action");

doingSomething(anyOtherAction, "Andreas");


