class Masina {
  constructor(marca, model, culoare, kilometraj) {
    this.marca = marca;
    this.model = model;
    this.culoare = culoare;
    this.kilometraj = kilometraj;
  }
  get proprietati() {
    return {
      marca: this.marca,
      model: this.model,
      culoare: this.culoare,
      kilometraj: this.kilometraj,
    }
  }
}

function main() {
  const masina1 = new Masina('Volvo', 'XC-60', 'Negru', 234000);
  const masina2 = new Masina('Mazda', 'CX-5', 'Verde', 111000);
  const masina3 = new Masina('Dacia', 'Biggster', 'Albastru', 20000);
  console.log(masina1.proprietati);
  console.log(masina2.proprietati);
  console.log(masina3.proprietati);
}
main();

class MasinaDeCurse extends Masina {
  constructor(marca, model, culoare, kilometraj, pozitiaInCampionat) {
    super(marca, model, culoare, kilometraj);
    this.pozitiaInCampionat = pozitiaInCampionat;
  }
  participaLaCampionat() {
    if (this.pozitiaInCampionat > 0) {
      return `Am castigat locul ${this.pozitiaInCampionat}`;
    } else {
      return 'Nu am castigat niciun premiu';
    }
  }
}

function curse() {
  const masina5 = new MasinaDeCurse('Toyota', 'Turbo', 'Rosu', 10000, 2);
  const masina6 = new MasinaDeCurse('Opel', 'Astra', 'Alb', 275000, -1)
  console.log(masina5.proprietati, masina5.participaLaCampionat());
  console.log(masina6.proprietati, masina6.participaLaCampionat());
}
curse();