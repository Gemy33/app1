import {
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { log } from 'console';
@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  @ViewChild('fixed') fixed!: ElementRef;
  @ViewChild('fixed') save_fixed!: ElementRef;

  @ViewChildren('item') items!: QueryList<ElementRef>;
  arr: any[] = [];
  sorce:string='';
  show(): void {
    this.fixed.nativeElement.classList.remove('d-none');
    document.querySelector('.stop')?.addEventListener('click',function prevent(e){
      e.stopPropagation();
      })
    this.items.forEach((item) => {
      this.arr.push(item.nativeElement);
    });
  }
  show_img(n: number) {
    this.sorce=this.arr[n].getAttribute('src')
  }
  disapper(){
    this.fixed.nativeElement.classList.add('d-none')
    // document.querySelector('.stop')?.addEventListener('click',function prevent(e){
    //   e.stopPropagation();
    //   })
  }
  // fee()
  // {
  //   document.querySelector('.stop')?.addEventListener('click',function prevent(e){
  //     e.stopPropagation();
  //     })
  // }
}
