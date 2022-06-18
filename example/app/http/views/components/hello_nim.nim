import web_components


proc helloNim() {.exportc.} =
  let helloNim = WebComponents(
    className: "HelloNim",
    tag: "hello-nim",
    textContent:"hello Nim"
  )
  bindJs(helloNim)
