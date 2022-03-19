import { Component, OnInit } from '@angular/core';
import { EchoService } from '../echo.service';

@Component({
  selector: 'app-echo-ouput',
  templateUrl: './echo-ouput.component.html',
  styleUrls: ['./echo-ouput.component.css']
  
})
export class EchoOuputComponent implements OnInit {

  constructor(public echoService: EchoService) { }

  ngOnInit(): void {
  }

}
