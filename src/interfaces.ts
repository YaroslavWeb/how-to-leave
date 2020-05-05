export interface ICountry {
    readonly id: string
    show       : boolean
    name       : string
    code       : string
    status     : number
    minPrice   : number
    maxPrice   : number
    tags       : string[]
    capital    : string
    population : string
    coordinate : number[]
    intro      : string
    aboutVisa  : string
    tableVisa  : string[]
    aboutWork  : string
    tableWork  : any[]
    linkWork   : string[]
    facts      : string[]
}


export interface IFilter{
    readonly id: string
    status     : string
    active     : boolean
}