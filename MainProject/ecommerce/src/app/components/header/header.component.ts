import { Component, HostListener } from '@angular/core';
import { ApiService } from '../../services/api/api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isDarkMode = false;
  isSearchMode = false;
  isOpened = false;
  c!: number;
  pagename!: string;
  st:string = "";

  constructor(private as:ApiService){
    this.as.currentPageName.subscribe(pageName => {
      this.pagename = pageName;
    });

    this.as.cartSubObs.subscribe((data)=>this.c=data);
    let getMode = localStorage.getItem('mode');
    if (getMode === 'dark-mode') {
      document.body.classList.add('dark');
      this.isDarkMode = true;
    }
  }
  searchHide(){
    this.pagename = "";
  }
  darkOn(){
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark');
    if (!document.body.classList.contains('dark')) {
      localStorage.setItem('mode', 'light-mode');
    } else {
      localStorage.setItem('mode', 'dark-mode');
    }
  }
  searchOn(){
    this.isSearchMode = !this.isSearchMode;
  }
  openSlide(){
    this.isOpened = !this.isOpened;
  }
  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement;

   if (!clickedElement.classList.contains('sidebarOpen') && !clickedElement.classList.contains('menu')) {
      this.isOpened = false;
    }
  }

  searchProduct(){
    this.as.sendSearchValue(this.st);
  }
}
