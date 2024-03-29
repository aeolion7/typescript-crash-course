interface UserInterface {
  name: string;
  email: string;
  age: number;
  register(): void;
  payInvoice(): void;
}

class User implements UserInterface {
  name: string;
  email: string;
  age: number;

  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;

    console.log('User Created:', this.name);
  }

  payInvoice() {
    console.log(this.name + ' paid invoice.');
  }

  register() {
    console.log(this.name + ' is now registered.');
  }
}

class Member extends User {
  private id: number;

  constructor(id: number, name: string, email: string, age: number) {
    super(name, email, age);
    this.id = id;
  }

  payInvoice() {
    super.payInvoice();
  }
}

// let john = new User('John Doe', 'jdoe@gmail.com', 34);
// john.register();

let mike: User = new Member(1, 'Mike Smith', 'msmith@aol.com', 33);
mike.payInvoice();
