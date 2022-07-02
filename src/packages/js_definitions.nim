import
  std/jsffi,
  std/jsfetch,
  std/jscore,
  std/asyncjs,
  std/jsconsole,
  ./fusion/jsexports,
  ./fusion/esimport

export
  jsffi,
  jsfetch,
  jscore,
  asyncjs,
  jsconsole,
  jsexports,
  esimport

var
  module* {.importc, nodecl.}: JsObject
  window* {.importc, nodecl.}: JsObject
  document* {.importc, nodecl.}: JsObject
