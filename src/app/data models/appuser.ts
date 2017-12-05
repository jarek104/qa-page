export class AppUser {
    constructor(
      public username: string,
      public password: string,
      public email?: string,
      public admin?: boolean
    ) {}
  }
