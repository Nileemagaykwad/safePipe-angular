import {Component, OnInit, ViewChild, ElementRef, Renderer2, HostListener} from '@angular/core';
import {Router} from '@angular/router'

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
  <a href="javascript:void(0)" onclick="goHome()">Click me</a>
  <script>
  function goHome() {
    var event = new CustomEvent("CallAngularService");
    window.dispatchEvent(event);
  }
</script>
`;
  @ViewChild('element') public viewElement: ElementRef;
  public element: any;
  flag = true;


  constructor(public renderer: Renderer2, private router: Router) {

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
@HostListener("window:CallAngularService")
  public fun(){
    this.router.navigate(["test"])
}
}
