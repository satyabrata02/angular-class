import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DbService } from '../../services/db/db.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  title = 'Dashboard';
  userList: any[] = [];
  currentUser: any;

  constructor(private titleService: Title, private data:DbService){ 
    titleService.setTitle(this.title);
    const userEmail = localStorage.getItem('currentUser');
    
    this.data.getUser().subscribe(res => {
      this.userList = res.map((e:any) => {
        const data = e.payload.doc.data();
        // data.id = e.payload.doc.id;
        if(data.email === userEmail){
          this.currentUser = data;
          console.log(this.currentUser);
        }
        
      })
    }, err => {
      console.log(err);
    })

  }
}
