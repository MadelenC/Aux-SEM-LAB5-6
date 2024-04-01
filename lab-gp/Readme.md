# SOLID 
***
##  ¿QUÉ ES SOLID?
*SOLID se compone de una serie de principios y de buenas practixas que deberiam tener ocmo base antes de proponer una arquitectura de software para el desarrollo de nuestras aplicaciones.*
## SOLID: LOS 5 PRINCIPIOS
- *S.. Single Responsability Principle(SRP)*
- *O.. Open/Colsed Principle (OCP)*
- *L.. Liskov Substitution Principle(LSP)*
- *I.. Interface Segregation Principle(ISP)*
- *D.. Dependency Inversion Principle (DIP)*
### 1. Principio de responsabilidad unica
*El principio de Responsabilidad Única es el más importante y fundamental de SOLID, muy sencillo de explicar, pero el más difícil de seguir en la práctica.*

*El propio Bob resume cómo hacerlo: “Gather together the things that change for the same reasons. Separate those things that change for different reasons”, es decir: “Reúne las cosas que cambian por las mismas razones. Separa aquellas que cambian por razones diferentes”.*
### 2. Principio de abierto/cerrado
*El segundo principio de SOLID lo formuló Bertrand Meyer en 1988 en su libro “Object Oriented Software Construction” y dice: “Deberías ser capaz de extender el comportamiento de una clase, sin modificarla”. En otras palabras: las clases que usas deberían estar abiertas para poder extenderse y cerradas para modificarse.*
### 3. Principio de sustitucion de liskov
*La L de SOLID alude al apellido de quien lo creó, Barbara Liskov, y dice que “las clases derivadas deben poder sustituirse por sus clases base”.*

*Esto significa que los objetos deben poder ser reemplazados por instancias de sus subtipos sin alterar el correcto funcionamiento del sistema o lo que es lo mismo: si en un programa utilizamos cierta clase, deberíamos poder usar cualquiera de sus subclases sin interferir en la funcionalidad del programa.*

### 4. Principio de segrecion de la interfaz
*En el cuarto principio de SOLID, el tío Bob sugiere: “Haz interfaces que sean específicas para un tipo de cliente”, es decir, para una finalidad concreta.*

*En este sentido, según el Interface Segregation Principle (ISP), es preferible contar con muchas interfaces que definan pocos métodos que tener una interface forzada a implementar muchos métodos a los que no dará uso.*
### 5. Principio de inversion de dependencias
*El objetivo del Dependency Inversion Principle (DIP) consiste en reducir las dependencias entre los módulos del código, es decir, alcanzar un bajo acoplamiento de las clases.*