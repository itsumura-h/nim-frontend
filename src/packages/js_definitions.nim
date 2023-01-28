import std/jsffi; export jsffi
import std/jsfetch; export jsfetch
import std/jscore; export jscore
import std/asyncjs; export asyncjs
import std/jsconsole; export jsconsole
import ./fusion/jsexports; export jsexports
import ./fusion/esimport; export esimport

var
  module* {.importc, nodecl.}: JsObject
  window* {.importc, nodecl.}: JsObject
  document* {.importc, nodecl.}: JsObject
