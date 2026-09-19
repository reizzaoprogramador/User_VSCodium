export const useCase = () => true;

const arg = "arg ok";
const bar = "bar"

class FooClass1 {
  foo1 = "foo";

  metodo(arg: string) {
    return useCase + arg;
  }
}

const instance1 = new FooClass1();
instance1.metodo(arg);

console.log(instance1);

// mudado_01
