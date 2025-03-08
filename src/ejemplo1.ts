class User {
    constructor(public name: string) { }

    public displayMessage(): void {
    }
  
    public addUser(name: string, email: string, password: string): void {
        console.log(`Usuario agregado: ${name} ${email} ${password}`);
    }
}
