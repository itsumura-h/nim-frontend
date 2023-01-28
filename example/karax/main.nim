import std/asyncdispatch
import std/asynchttpserver
import std/strformat
import ../../src/packages/html2karax
import ../../src/server

const karaxScript = staticRead("./karax_view.js")

proc controller(req:Request):Future[string] {.async.}=
  return &"""
<script defer src="./karax_view.js"></script>
<div id="app"></div>
"""

let route = Route(httpMethod:HttpGet, path:"/karax", controller:controller)
serve(@[route], 9001).waitFor
