function writeInConsole (msg):string {
    console.log(msg)
    return '44'
}
console.log('00')

let result = writeInConsole(
    writeInConsole(
        writeInConsole("22")
    )
)



//let result = writeInConsole();
//console.log(result);