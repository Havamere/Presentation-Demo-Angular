import { Component } from '@angular/core';

@Component({
  selector: 'app-lorem-ipsum',
  templateUrl: './lorem-ipsum.component.html',
  styleUrls: ['./lorem-ipsum.component.css']
})
export class LoremIpsumComponent {

  more() {
    var readToggle = document.getElementById("read-more");
    var moreText = document.getElementById("theRest");

    if (moreText.style.display === "inline") {
      readToggle.innerHTML = "<u>Read more</u>";
      moreText.style.display = "none";
      // console.log("showing more");
    } else {
      readToggle.innerHTML = "<u>Read less</u>";
      moreText.style.display = "inline";
      // console.log("showing less");
    }
  }

}
