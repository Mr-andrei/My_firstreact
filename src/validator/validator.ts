

export const required = (value:string) => {
  if(value) return undefined
    return  "Field is required"
}

// export const maxlength30 = (value:string) => {
//     if(value.length > 30) return "Max length 30 symbols"
//     return  undefined
// }

export const maxLengthCreator = (maxlength:number) => (value:string) => {
    if(value.length > maxlength) return `Max length ${maxlength} symbols`
    return  undefined
}

// export const minlength2 = (value:string) => {
//     if(value.length < 2) return "Min length 2 symbols"
//     return  undefined
// }