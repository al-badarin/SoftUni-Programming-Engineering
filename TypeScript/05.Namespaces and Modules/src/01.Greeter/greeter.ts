 namespace Greeter {
  export interface Greeting {
    introduction(): string;
    sayGoodbye<T>(name: T): string;
  }
}
