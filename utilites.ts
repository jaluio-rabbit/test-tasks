interface animal{
    title: string,
    description: string,
    quantity: number
};

const cat: Readonly<animal> = {
    title: "British cat",
    description: "The cutest animal.",
    quantity: 200000,
};

interface iceCream{
    title: string,
    description: string,
    opinion?: string
};

const Lasunka: Required<iceCream> = {
    title: "Lasunka",
    description: "Just the ice-cream",
    opinion: "Not bad",
};

interface NetWorks {
    title: string,
}

type NetWork = "youtube" | "facebook" | "twitter";

const favoritesNetwork: Record<NetWork, NetWorks> = {
    youtube: { title: "youtube" },
    facebook: { title: "facebook" },
    twitter: { title: "twitter" }
}

interface Completed {
    quantity: number,
    list: string[],
    description: string,
}

const completed: Pick<Completed, "quantity" | "list"> = {
    quantity: 1,
    list: ["geography tests"]
}

interface Opened {
    quantity: number,
    list: string[],
    description: string,
}

const opened: Omit<Opened, "description"> = {
    quantity: 1,
    list: ["homework"]
}

type Marks = "8" | "9" | "10";
type GoodMarks = Exclude<Marks, "8" | "9">;
type NormalMark = Extract<Marks, "8" | "9">;
type filteredType = NonNullable<null | undefined | number | string | boolean | object | Array<any>>;

const goodMark: GoodMarks = "10"
const normalMark: NormalMark = "9";
const box: filteredType = {};

function getSomething<T extends (number | string)>(input: T): unknown{
    return +input * 2;
}

console.log(getSomething("3"));

declare function foo(): {a: number, b: number}

type FooType = ReturnType<typeof foo>;

function testFoo(num1: number, num2: number): FooType{
    return { a: num1, b: num2 }
}

type ReturnString = ReturnType<() => string>;
type ReturnNumberOrString = ReturnType<() => number|string>;
type ReturnGenericType = ReturnType<<T>(params: T) => T>;
type ReturnArr = ReturnType<<L extends string[]>(params: L) => L>;
type ReturnAny = ReturnType<(params: any) => any>;

abstract class BitterFood{
    protected description: string = "Bitter Food";
    constructor(protected title = "unknown"){
        this.title = title;
    }
}

class Perets extends BitterFood{
    protected description: string = "Bitter Food";
    constructor(public title: string = "unknown"){
        super(title);
    }
}

type perets = InstanceType<typeof Perets>;