import { Test } from ".";

export namespace Game{
    abstract class User<T, K>{
        protected name: T;
        protected age: K;
        constructor(name: T, age: K){
            this.name = name;
            this.age = age;
        }
        getPass<G>(data: G): G {
            // Import
            /// <reference path="index.ts" /> // <--- Import
            console.log(Test.getPass(0));
            return data;
        }
    }
    class Student<T, K> extends User<T, K>{
        constructor(name: T, age: K){
            super(name, age);
        }
    }

    const STUDENT1 = new Student<string, string>("A", "2");
    STUDENT1.getPass("Ha-ha-ha!");

    console.log(STUDENT1);
}
