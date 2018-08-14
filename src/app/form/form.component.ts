import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  htmlSnippet = `
  First name:<br>
  <input type="text" name="firstname" value="Mickey">
  <br>
  Last name:<br>
  <input type="text" name="lastname" value="Mouse">
  <br><br>
  <!--<a [routerLink]="[/test]" (click)="goHome()">Click me</a>-->
  <a href="javascript:void(0)" onclick="goHome()">Click me</a>
  <script>
  function goHome() {
    window.history.pushState('page2', 'Title', 'test');
    console.log("shini pagal")
  }
</script>
`;
  @ViewChild('element') public viewElement: ElementRef;
  public element: any;
  flag = true

  constructor(public renderer: Renderer2) {

    console.log(window.location.href, "1111111111111111")
  }

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
