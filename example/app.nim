import ../src/frontend

proc hello():string {.exportc.} =
  let msg = "Hello"
  jsxPragma()
  return "<h1>${msg}</h1>"

# proc main() {.exportc.} =
#   echo "nim load"
#   esImport("h, render", "dyo")
#   jsxPragma()
#   render(
#     "<h1>Hello</h1>",
#     "document.getElementById('App')"
#   )

proc main() {.exportc.} =
  echo "nim load"
  esImport("h, render", "dyo")
  jsxPragma()
  render(
    hello,
    "document.getElementById('App')"
  )

main()
