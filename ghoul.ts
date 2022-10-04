import { Game } from "./game";

type name = string;
type age = number | string;
type kagune = kaguneStr;
type kaguneStr = "low" | "normal" | "high" | "very high";
type dangerous = dangerousStr | dangerousN;
type dangerousStr = "C" | "B" | "A" | "S" | "SS" | "SSS";
type dangerousN = 1 | 2 | 3 | 4 | 5;

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
        constructor(readonly name: name, public age: age, public kagune: kagune, public dangerous: dangerous){
            super(name, age, kagune, dangerous);
        }
        get GhoulName(){
            return this.name;
        }
        set GhoulAge(age: age){
            console.log(this["GhoulAge"]);
            this.age = age;
        }
        get GhoulAge(): age{
            return this.name;
        }
        set GhoulKagune(kagune: kagune){
            this.kagune = kagune;
        }
        get GhoulKagune(): kagune{
            return this.kagune;
        }
        set GhoulDangerous(dangerous: dangerous){
            this.dangerous = dangerous;
        }
        get GhoulDangerous(): dangerous{
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
