import { observable } from "mobx";

class Greeter {
  @observable greet;
  constructor(greet="Hello World") {
    this.greet=greet;
  }
}

export default Greeter