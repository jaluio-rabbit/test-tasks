export namespace Test{
    export const test = "hello, world!";
    export const getPass = <A>(data: A): A => data;
}

console.log(Test.getPass(0));