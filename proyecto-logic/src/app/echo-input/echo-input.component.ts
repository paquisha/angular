import { Component, OnInit } from '@angular/core';
import { EchoService } from '../echo.service';

@Component({
  selector: 'app-echo-input',
  templateUrl: './echo-input.component.html',
  styleUrls: ['./echo-input.component.css'],
  providers:[EchoService]
})
export class EchoInputComponent implements OnInit {

  constructor(public echoService: EchoService) {

   }

  ngOnInit(): void {
  }

}
