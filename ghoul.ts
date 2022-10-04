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
        
        constructor(protected name: Name, protected age: Age, protected kagune: Kagune, protected dangerous: Dangerous){
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
        get ghoulName(){
            return this.name;
        }
        set ghoulAge(age: Age){
            console.log(this["GhoulAge"]);
            this.age = age;
        }
        get ghoulAge(): Age{
            return this.name;
        }
        set ghoulKagune(kagune: Kagune){
            this.kagune = kagune;
        }
        get ghoulKagune(): Kagune{
            return this.kagune;
        }
        set ghoulDangerous(dangerous: Dangerous){
            this.dangerous = dangerous;
        }
        get ghoulDangerous(): Dangerous{
            return this.dangerous;
        }
    }

    // 🤣 d e a d   i n s i d e 🤣

    const DEAD_INSIDE = new Koukagune("Kaneki Ken", 18, "normal", "A");

    console.log(DEAD_INSIDE);

    DEAD_INSIDE.ghoulAge = 23;
    DEAD_INSIDE.ghoulKagune = "low";
    DEAD_INSIDE.ghoulDangerous = "SS";

    console.log(DEAD_INSIDE);
}
