export namespace Test{
    export const TEST = "hello, world!";
    export const GET_PASS = <A>(data: A): A => data;
}

console.log(Test.GET_PASS(0));
