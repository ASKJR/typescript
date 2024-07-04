import { sum } from "./sum";
(function () {
  function normalF() {
    console.log("normalF");
  }
  const anonymous = function anonymousF() {
    console.log("anonymousF");
  };
  const arrow = () => console.log("arrowF");
  let idade: number = 31;
  let nome: string = "A.K";
  console.log(`Meu nome eh ${nome} e tenho ${idade} anos.`);
  normalF();
  anonymous();
  arrow();
  console.log(sum(50, idade));
})();
