import handler, {fnType} from "./my_module";

const f2 = (arg: fnType): fnType => {
        return arg
}

handler({a: 10, b: f2})