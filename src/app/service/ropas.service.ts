import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class RopasService {
  productos: any[] = [
    {
      nombre: "blusa",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/blusa.jpg",
      creacion: "1941-11-01",
      fabrica: "Adidas"
    },
    {
      nombre: "camisa",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/camisa.jpg",
      creacion: "1941-11-01",
      fabrica: "nike"
    },
    {
      nombre: "falda",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/falda.jpg",
      creacion: "1941-11-01",
      fabrica: "Polistell"
    },
    {
      nombre: "pantalon",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/pantalon.jpg",
      creacion: "1941-11-01",
      fabrica: "Polistell"
    },
    {
      nombre: "Polera",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/polera.jpg",
      creacion: "1941-11-01",
      fabrica: "Lancaster"
    },
    {
      nombre: "Polera1",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/polera1.jpg",
      creacion: "1941-11-01",
      fabrica: "Reebok"
    },
    {
      nombre: "Polo",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/polo.jpg",
      creacion: "1941-11-01",
      fabrica: "Nike"
    },
    {
      nombre: "Short",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/short.jpg",
      creacion: "1941-11-01",
      fabrica: "Reebok"
    },
    {
      nombre: "Vestido",
      bio:
        "De acuerdo con los arqueólogos y antropólogos, los signos de vestimenta más antiguos probablemente consistieron en pieles, cueros, hojas o pasturas, envueltas o atadas alrededor del cuerpo como protección de los elementos de la naturaleza, 50000 a. C. El conocimiento sobre estas ropas es una deducción, ya que los materiales mencionados se deterioran rápidamente comparados con piedra, hueso, caparazones y artefactos metálicos. Desde el principio de los tiempos hasta nuestros días, la vestimenta ha sufrido numerosas transformaciones que en la mayoría de los casos han sido debidas al descubrimiento de nuevos tejidos y materiales e, indudablemente, a las tendencias que dictan los diseñadore.",
      img: "assets/img/vestido.jpg",
      creacion: "1941-11-01",
      fabrica: "Puma"
    }
  ];
  constructor() {}
  getProductos(){
    return this.productos;
  };
  informacion(indice){
    return this.productos[indice]
  }
  buscarItem(){
    this.productos.forEach(items => {
      return items['nombre'];
    });
  }
}
