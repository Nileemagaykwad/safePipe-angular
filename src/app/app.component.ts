import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  htmlSnippet: string = `<a href="#" onclick="alert('I am a popup!');">Link</a>`;
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
