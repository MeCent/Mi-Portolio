import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.css']
})
export class ProgressbarComponent implements OnInit {
  porcent: number = 0;
  get style(){
    return 'width:' + this.porcent + '%'
  }
  constructor() { }

  ngOnInit(): void {
    timer(1000, 100).subscribe(d => {
      if(d){
        if(this.porcent >= 100){
          this.porcent = 0;
        } else {
          this.porcent += 1;
        }
      }
    })
  }
}
