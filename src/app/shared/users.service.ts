import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';





@Injectable()
export class UserService {
       public users: BehaviorSubject<string[]> = new BehaviorSubject([]);
       public currentUsers: string[];

       addUser(user: string): void {
          this.currentUsers =  this.users.getValue();
          this.currentUsers.push(user);
          this.users.next(this.currentUsers);
       }
}
