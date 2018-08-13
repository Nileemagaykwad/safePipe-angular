import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  htmlSnippet = `<form action="/test">
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <input type="submit" value="Submit">
</form> 
`;
  @ViewChild('element') public viewElement: ElementRef;
  public element: any;
  flag = true

  constructor(public renderer: Renderer2) {}

  public ngOnInit()
  {
    this.appendHTMLSnippetToDOM();
  }
  public appendHTMLSnippetToDOM()
  {
    this.element = this.viewElement.nativeElement;
    const fragment = document.createRange().createContextualFragment(this.htmlSnippet);
    this.element.appendChild(fragment);
  }
  goHome() {
    this.flag = false
  }

}
