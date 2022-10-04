import { Game } from "./game";

type Name = string;
type Age = number | string;
type Kagune = KaguneStr;
type KaguneStr = "low" | "normal" | "high" | "very high";
type Dangerous = DangerousStr | DangerousN;
type DangerousStr = "C" | "B" | "A" | "S" | "SS" | "SSS";
type DangerousN = 1 | 2 | 3 | 4 | 5;

namespace Ghoul{   
    abstract class Ghoul{
        // Import
        /// <reference path="game.ts" /> // <--- Import
        
        constructor(protected name: name, protected age: age, protected kagune: kagune, protected dangerous: dangerous){
            this.name = name;
            this.age = age;
            this.kagune = kagune;
            this.dangerous = dangerous;
        }

        #sayComplete(){
            const keyPharse = "Task is completed";
            
            console.log(keyPharse);
        }
        
        createUser(){
            console.log(Game);
        }

        tellEveryone(){
            this.#sayComplete();
        }
    }

    class Koukagune extends Ghoul{
        constructor(readonly name: Name, public age: Age, public kagune: Kagune, public dangerous: Dangerous){
            super(name, age, kagune, dangerous);
        }
        get GhoulName(){
            return this.name;
        }
        set GhoulAge(age: Age){
            console.log(this["GhoulAge"]);
            this.age = age;
        }
        get GhoulAge(): Age{
            return this.name;
        }
        set GhoulKagune(kagune: Kagune){
            this.kagune = kagune;
        }
        get GhoulKagune(): Kagune{
            return this.kagune;
        }
        set GhoulDangerous(dangerous: Dangerous){
            this.dangerous = dangerous;
        }
        get GhoulDangerous(): Dangerous{
            return this.dangerous;
        }
    }

    // 🤣 d e a d   i n s i d e 🤣

    const deadInside = new Koukagune("Kaneki Ken", 18, "normal", "A");

    console.log(deadInside);

    deadInside.GhoulAge = 23;
    deadInside.GhoulKagune = "low";
    deadInside.GhoulDangerous = "SS";

    console.log(deadInside);
}
