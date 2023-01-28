import std/asyncdispatch
import std/asynchttpserver
import ../../src/server
import ./alpine_page

proc controller(req:Request):Future[string] {.async.}=
  return alpinePage().await

let route = Route(httpMethod:HttpGet, path:"/alpine", controller:controller)
serve(@[route], 9001).waitFor
