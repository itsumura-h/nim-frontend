import std/asyncjs
import std/dom
import std/jsconsole
import std/jscore
import std/jsffi
import std/strformat
include karax/prelude

let str = "<script>alert('dainger')</script>"

proc kAlertEvent(e:Event, n:VNode) =
  window.alert("aaa")

proc app():VNode =
  result = buildHtml(tdiv):
    h1:
      text("Hello")
    form:
      input(`type`="text")
    button(onclick=kAlertEvent):
      text("click")
    p:
      text(str)

setRenderer(app, "app")
