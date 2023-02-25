function consoleWithDeley(message: string, delay: number): void {

    let result = setTimeout(() => {
        console.log(message);
    }, delay)

    setTimeout(() => {
        clearTimeout(result);
        console.log('aborted')
    }, 1000)

}

consoleWithDeley('22', 2000)

function makeTimeout(delay: number, cb: Function): () => void {
    const timeoutId = setTimeout(() => {
        cb();
    }, delay);

    return function(): void {
        clearTimeout(timeoutId);
    }
}

let iii=makeTimeout(55,()=>{})
iii()