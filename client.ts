export type Client = {
    age: number,
    color: pantsColor
}
interface kek{
    arg:string
    out:number
}

export type El = {
    minAge: number,
    permittedColor: pantsColor,
    rules: Array<checkerType>
}

type checkerType = (
    client: Client,
    el: El
) => boolean

export enum pantsColor {
    yellow= 'yellow',
    blue = 'blue',
    red = 'red'
}

// enum tuple optional converte html