import React, { Component } from 'react';

import './css/main.css';

class Main extends Component {
  render() {
    return (
      <main className="text-justify">
        <p className="text-justify ">
          <span>Grace Murray Hopper</span> ( <a href="https://es.wikipedia.org/wiki/Nueva_York">Nueva York</a>, <a href="https://es.wikipedia.org/wiki/9_de_diciembre">9 de diciembre</a>  de
          <a href="https://es.wikipedia.org/wiki/1906">1906 </a> - <a href="https://es.wikipedia.org/wiki/Condado_de_Arlington">Condado de Arlington</a> , <a href="https://es.wikipedia.org/wiki/1_de_enero">1 de enero </a>
          de <a href="https://es.wikipedia.org/wiki/1992">1992</a> ) fue una <a href="https://es.wikipedia.org/wiki/Inform%C3%A1tico_te%C3%B3rico">científica de la computación</a>  y militar estadounidense con grado de contraalmirante.
          Es pionera en el mundo de las <a href="https://es.wikipedia.org/wiki/Ciencias_de_la_computaci%C3%B3n">ciencias de la computación</a> y fue la primera programadora que utilizó el Mark I. Entre las décadas de los 50 y 60 desarrolló
          el primer compilador para un lenguaje de programación así como también propició métodos de validación.
          <br /> Popularizó la idea de una máquina independiente de los lenguajes de programación, lo que derivó en el desarrollo de <a href="https://es.wikipedia.org/wiki/COBOL">COBOL</a> , un lenguaje de alto nivel de programación que aún se utiliza.
          Hopper intentó enlistarse en la <a href="https://es.wikipedia.org/wiki/Armada_de_los_Estados_Unidos">marina estadounidense</a> durante la <a href="https://es.wikipedia.org/wiki/Segunda_Guerra_Mundial">Segunda Guerra Mundial</a> ,
          pero debió unirse a las reservas de la armada porque era adulta para sus 34 años. Era conocida por sus amistades como <em>Amazing Grace</em> .
        </p>
        <h3>Biografía</h3>
        <hr></hr>
        <p className="text-justify">Grace Brewster Murray, nació en Nueva York (EE. UU.). Grace fue una bisnieta de Alexander Russell, un almirante de la Armada de los Estados Unidos. Éste
        fue su modelo y su héroe personal. También fue nieta de un ingeniero civil,John Van Horne. Sus padres fueron Walter Fletcher Murray, corredor de seguros
        y Mary Campbell Van Horne. Desde muy pequeña demostró aptitudes para las ciencias y las matemáticas. Recibió siempre el apoyo de su abuelo y de su
        padre para que las estudiara, pues quería que sus hijas tuvieran las mismas oportunidades que su hijo varón. También le atrajo mucho cualquier tipo de
        dispositivo mecánico, tanto fue así, que con 7 años desarmó todos los relojes de su casa para ver si podía entender cómo funcionaban. En 1930
        se casa con Vincent Foster Hopper, un doctor en literatura en lenguaje inglés, que durante muchos años fue presidente del departamento de inglés
        de la universidad de Nueva York. Vincent y Grace se divorciaron en 1945 sin tener hijos.</p>

        <h4>Estudios</h4>
        <p className="text-justify">Hopper estudió en varias escuelas privadas para mujeres, y en 1924 ingresó en Vassar College en Nueva York, donde estudió matemáticas y física, graduándose con honores en 1928. Poco después, obtuvo una beca para cursar una maestría en matemática en la universidad de Yale, donde se graduó en 1930.
        <br />  Le ofrecieron un puesto como asistente en el departamento de matemática de Vassar College, en donde permaneció hasta 1943. Mientras continuó sus estudios en Yale, donde se doctoró en matemática en 1934.
        </p>

        <h4>Ingreso en la armada</h4>
        <p className="text-justify"> Siguiendo los pasos de su bisabuelo, en 1943 decidió unirse a las fuerzas armadas en plena segunda guerra mundial, para lo que tuvo que obtener un permiso especial. Asistió a la escuela de cadetes navales para mujeres, graduándose la primera de su clase en 1944 y con el rango de teniente. Fue enviada a Harvard para trabajar en el proyecto de computación que dirigía el comandante Howard Aiken, la construcción de la Mark I. Al acabar la Segunda Guerra Mundial, Hopper quiso seguir en la armada pero había cumplido los 40 años en 1946 (el límite eran 38) por lo que fue rechazada, aunque pudo permanecer en la reserva. Así que siguió en Harvard como investigadora junto a Aiken. Desarrolló varias aplicaciones contables para la Mark I, que estaba siendo utilizada por una compañía de seguros.
        <br /> Permaneció en Harvard hasta 1949, cuando Hopper empezó a trabajar en la Eckert - Mauchly Corporation en Filadelfia, que en esos momentos estaban desarrollando las computadoras BINAC y UNIVAC I. Trabajó en esa compañía y en sus sucesoras hasta su retiro en 1971. Allí fue donde Hopper realizó sus mayores contribuciones a la programación moderna. En 1952, desarrolló el primer compilador de la historia, el A-0, y en 1957 realizó el primer compilador para procesamiento de datos que usaba órdenes en inglés, el B-0 (FLOW-MATIC), utilizado principalmente para el cálculo de nóminas. </p>
      </main>
    );
  }
}

export default Main;
