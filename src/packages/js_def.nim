import std/jsffi, std/jsfetch, std/jscore, std/asyncjs, std/dom
export jsffi, jsfetch, jscore, asyncjs, dom

# let window* {.importc.}: JsObject
# let document* {.importc.}: JsObject
let console* {.importc.}: JsObject
