import templates
import ../../src/dyo
import ../../src/packages/js_definitions

proc childDom():string =
  return """
    <form>
      <input type="text">
    </form>
  """

proc hello():string {.exportc.} =
  let msg = "Hello"
  tmpli html"""
    <h1>$(msg)</h1>
  """

proc main() {.exportc.} =
  echo "nim load"
  esImport("h, render", "dyo")
  jsxPragma()
  render(
    hello,
    document.getElementById("app")
  )

main()
