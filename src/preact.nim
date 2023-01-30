import std/jsffi
import std/dom

{.emit: """
import { html, render } from 'https://unpkg.com/htm/preact/index.mjs?module';
import { useState, useEffect } from 'https://unpkg.com/preact@latest/hooks/dist/hooks.module.js?module'
""".}


type StrSateSetter* = proc(arg: cstring)

proc strUseState(arg: cstring): JsObject {.importcpp: "useState(#)".}
proc useState*(arg: cstring): (cstring, StrSateSetter) =
  let state = strUseState(arg)
  let value = to(state[0], cstring)
  let setter = to(state[1], StrSateSetter)
  return (value, setter)


type IntSateSetter* = proc(arg: int)

proc intUseState(arg: int): JsObject {.importcpp: "useState(#)".}
proc useState*(arg: int): (int, IntSateSetter) =
  let state = intUseState(arg)
  let value = to(state[0], int)
  let setter = to(state[1], IntSateSetter)
  return (value, setter)

type States = cstring|int

proc useEffect*(cb: proc()) {.importcpp: "useEffect(#)".}
  ## Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
  ## Whether or not you’re used to calling these operations “side effects” (or just “effects”), you’ve likely performed them in your components before.
proc useEffect*(cb: proc(), dependency:seq[States]) {.importcpp: "useEffect(#, #)".}
  ## effect with dependancy

template render*(arg: string) =
  proc renderImpl(innerArg: string): string =
    "return html``" & innerArg & "``"
  {.emit: renderImpl(arg).}


{.emit: """
function renderApp(component, dom){
  render(html``<${component} />``, dom)
}
""".}
proc renderApp*(component: proc(), dom: Node) {.importcpp: "renderApp(#, #)".}
