let args = process.argv.slice(2);
let num = parseInt(args);
if(isNaN(num)){
    console.log("Not a number")
}else {
    console.log("My number: " + args[0])
}
