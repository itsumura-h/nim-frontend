import ./packages/js_def
import strformat


type WebComponents* = object
  className*:string
  tag*:string
  textContent*:string


proc element(self:WebComponents):string = return """
class [self.className] extends HTMLElement {
  connectedCallback() {
    this.textContent = '[self.textContent]';
  }
}
customElements.define('[self.tag]', [self.className]);
""".fmt('[', ']')

proc bindJs*(self:WebComponents) =
  let el = document.createElement("script".cstring)
  el.innerText = element(self).cstring
  let app = document.getElementById("app".cstring)
  app.appendChild(el)
