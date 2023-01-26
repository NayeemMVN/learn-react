import {T1, T2} from "./types";
export type fnType =  T1 | T2

type Options = {
    a: number,
    b: (arg: fnType) => fnType;
}

const dbCall = (call: (arg: fnType) => void) => {
    call({name: 'adfsf', address: 'assfasdf', key2: 'asdf'})


}

const handler = ({a,b}: Options) => {
    console.log(a)
    dbCall(b)
}

export default handler;