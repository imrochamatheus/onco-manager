import { v4 as uuidv4 } from "uuid";

class User {
  id?: string;
  name: string;
  email: string;
  admin: boolean;
  created_at: Date;
  updated_at: Date;

  constructor(id?: string, created_at?: Date) {
    if (!id) {
      this.id = uuidv4();
    }
    if (!created_at) this.created_at = new Date();
    this.updated_at = new Date();
    this.admin = false;
  }
}

export { User };
