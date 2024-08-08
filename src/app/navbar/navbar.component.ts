import { Component, ElementRef, HostListener, ViewChild} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {


  @ViewChild('nav') nav!:ElementRef;
  onScroll(){
    if(scrollY>=0&&scrollY<=20)
    {
      this.nav.nativeElement.classList.add('py-4');
    }
    else if(scrollY>20)
    {

      this.nav.nativeElement.classList.remove('py-4');
    }
  }
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event): void {
    this.onScroll();
  }
  
  


}

