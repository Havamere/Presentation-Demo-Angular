import { Component } from "@angular/core";

@Component({
  selector: 'app-peek-a-boo',
  templateUrl: './peek-a-boo.component.html',
  styleUrls: ['./peek-a-boo.component.css']
})

export class PeekComponent {

  greetings = [
    { message: "Hello there!" },
    { message: "I see you too!" },
    { message: "Peek-a-boo!" },
    { message: "Pop goes the weasel." },
    { message: "Now you see me." },
    { message: "Visible: true;" },
    { message: "Hidden: false;" },
    { message: "Presto!" },
    { message: "Hi." }
  ]

}
