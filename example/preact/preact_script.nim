import std/jsffi
import std/dom
import ../../src/preact


proc child(props: JsObject) {.exportc.} =
  let propsName{.exportc.} = props.name
  let (msg {.exportc.}, setMsg) = useState("message")
  let (msgLen {.exportc.}, setMsgLen) = useState(0)

  proc setMsgFunc(e: Event) {.exportc.} =
    setMsg(e.target.value)

  useEffect(proc() =
    setMsgLen(msg.len)
  )

  useEffect((proc() =
    setMsgLen(msg.len)
  ),@[msg])

  render("""
    <p>Hello ${propsName}!</p>
    <form>
      <input type="text" oninput=${setMsgFunc} value=${msg} />
      <p>this is a ${msg}</p>
      <p>message lenght is ${msgLen}</p>
    </form>
  """)

proc App() {.exportc.} =
  render("""
    <h1>Hello</h1>
    <${child} name="John"/>
  """)

renderApp(App, document.getElementById("app"))
