import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  lapTime = 1.45467834756478;
  name = "SaTyAM geHAnI"

  log(object) {
    console.log(object);
  }

  submit(formValue) {

  }

  constructor() { }

  ngOnInit() {
  }

}
