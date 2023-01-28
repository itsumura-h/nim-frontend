import std/asyncjs
import std/dom
import std/jsconsole
import std/jscore
import std/jsffi
import ../../src/templates
import ../../src/alpine
import ./alpine_view


var num:IntState
var message: StringState

proc mount(domId:cstring) {.exportc.} =
  let dom = document.getElementById(domId)
  console.log(dom)

  num = useState(1)
  message = useState("CSRされました")

  useEffect(
    proc() =
      console.log("=== effect")
      console.log(num.get)
      console.log(message.get)
      dom.innerHTML = $(alpineView(num.get, message.get)) # ユーザー操作でCSR
  )

proc incrementNum() {.exportc.} =
  num.update(num.get + 1)

proc setMessage(event:Event) {.exportc.} =
  console.log(event.target)
  console.log(event.target.value)
  message.update($event.target.value)
