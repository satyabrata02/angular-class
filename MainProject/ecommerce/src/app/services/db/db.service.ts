import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(private db: AngularFireDatabase) { }
  createData(path: string, data: any) {
    return this.db.list(path).push(data);
  }
}
