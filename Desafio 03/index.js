class hero {
    constructor(name, age, type, ataque){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let ataque = " "
        if (this.type === "Mago"){
            this.ataque = "magia"
        } else if (this.type === "Guerreiro"){
            this.ataque = "espada"
        } else if (this.type === "Monge"){
            this.ataque = "usou artes marciais"
        } else if (this.type === "Ninja"){
            this.ataque = "usou shuriken"
        }
        console.log(`o ${this.type} atacou usando ${this.ataque}`)
    }
}

let hero1 =  new hero("Lancelot", 23, "Guerreiro")
hero1.attack()

let hero2 = new hero("Merlin", 80, "Mago")
hero2.attack()
