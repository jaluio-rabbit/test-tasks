import { Game } from "./game";

type name = string;
type age = number | string;
type kagune = kagune_str;
type kagune_str = "low" | "normal" | "high" | "very high";
type dangerous = dangerous_str | dangerous_n;
type dangerous_str = "C" | "B" | "A" | "S" | "SS" | "SSS";
type dangerous_n = 1 | 2 | 3 | 4 | 5;

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

        createUser(){
            console.log(Game);
        }

        #sayComplete(){
            const keyPharse = "Task is completed";
            
            console.log(keyPharse);
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

    const dead_inside = new Koukagune("Kaneki Ken", 18, "normal", "A");

    console.log(dead_inside);

    dead_inside.GhoulAge = 23;
    dead_inside.GhoulKagune = "low";
    dead_inside.GhoulDangerous = "SS";

    console.log(dead_inside);
}