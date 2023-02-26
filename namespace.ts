function namespace(innerString:string): any {
    const array = innerString.split('.');

    const result = array.reduceRight((previousValue: any, currentValue, index): any => {
        if(index == array.length-2) {
            previousValue = {[previousValue]: {}}
        }
        return {[currentValue]: previousValue}
    })

    return result;
}

namespace('a.b.c.d.e')

// initial value