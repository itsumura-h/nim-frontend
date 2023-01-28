import std/asyncdispatch
import std/asynchttpserver
import ../../src/server

proc controller(req:Request):Future[string] {.async.}=
  return """
<script src="https://unpkg.com/dyo"></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

<div id="app"></div>
<script src="./dyo_script.js" type="text/babel"></script>
"""

let route = Route(httpMethod:HttpGet, path:"/dyo", controller:controller)
serve(@[route], 9001).waitFor
