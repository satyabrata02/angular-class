import { Component } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  books:any[]=[]
  constructor(private cs: CrudService) {
    this.cs.getData().subscribe((data:any)=>this.books=data)
  }
  remove(id:number){
    let d = confirm("Are you sure?");
    if (d) {
      this.cs.deleteData(id).subscribe((data: any) => {
        this.books = data;
        window.location.reload();
      });
    }
  }
}