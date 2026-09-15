export const useCase = () => true;

class FooClass1 {
  foo1 = "foo";

  metodo() {
    return useCase;
  }
}

const instance1 = new FooClass1();
console.log(instance1);

// mudado_01
