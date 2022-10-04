interface Animal{
    title: string,
    description: string,
    quantity: number
};

const CAT: Readonly<Animal> = {
    title: "British cat",
    description: "The cutest animal.",
    quantity: 200000,
};

interface IceCream{
    title: string,
    description: string,
    opinion?: string
};

const LASUNKA: Required<IceCream> = {
    title: "Lasunka",
    description: "Just the ice-cream",
    opinion: "Not bad",
};

interface NetWorks {
    title: string,
}

type NetWork = "youtube" | "facebook" | "twitter";

const FAVOURITES_NETWORKS: Record<NetWork, NetWorks> = {
    youtube: { title: "youtube" },
    facebook: { title: "facebook" },
    twitter: { title: "twitter" }
}

interface Completed {
    quantity: number,
    list: string[],
    description: string,
}

const COMPLETED: Pick<Completed, "quantity" | "list"> = {
    quantity: 1,
    list: ["geography tests"]
}

interface Opened {
    quantity: number,
    list: string[],
    description: string,
}

const OPENED: Omit<Opened, "description"> = {
    quantity: 1,
    list: ["homework"]
}

type Marks = "8" | "9" | "10";
type GoodMarks = Exclude<Marks, "8" | "9">;
type NormalMark = Extract<Marks, "8" | "9">;
type FilteredType = NonNullable<null | undefined | number | string | boolean | object | Array<any>>;

const GOOD_MARK: GoodMarks = "10"
const NORMAL_MARK: NormalMark = "9";
const BOX: FilteredType = {};

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

type Perets = InstanceType<typeof Perets>;
