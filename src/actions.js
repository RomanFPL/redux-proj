export const inc = () => {return {type: "INC"}}
export const dec = () => {return {type: "DEC"}}
export const upd = () => {return {type: "UPT"}}
export const rnd = (value) => {
    return {type: "RND", value: Math.floor(Math.random()*10)}
}