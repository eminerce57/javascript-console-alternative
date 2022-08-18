const { log } = console;

log("hello world!")

log("hi")


const { log: myLog } = console;


myLog("hello world!","(in mylog)")

myLog("hi","(in mylog)")


const { table: tableView } = console;
const arr = [1, 2, 3, 4, 5];

tableView(arr);





// console group
console.group("groupName");
console.log("hi");
console.log("testing");
console.groupEnd();
// console group end

console.trace("I'm here") 