import ./js_definitions

# proc hImpl(a:cstring, b:JsObject, c:cstring):JsObject {.importcpp: "h(#, #, #)".}
# proc h*(a="", b=newJsObject(), c=""):JsObject = hImpl(a.cstring, b, c.cstring)

# proc render*(a, b:JsObject) {.importcpp: "render(#, #)".}

# proc renderSrtImpl*(a:cstring, b:JsObject) {.importjs: "render(#, #)".}
# template render*(a:string, b:JsObject) = renderSrtImpl(a.cstring, b)

template jsxPragma*() = {.emit: "/* @jsx h */".}

proc renderImpl(a, b:string):string =
  result = ""
  result.add("render(")
  result.add(a)
  result.add(", ")
  result.add(b)
  result.add(");")

template render*(a, b:string) =
  {.emit: renderImpl(a, b).}



# proc renderImpl(a:proc():string, b:string):string =
#   result = ""
#   result.add("render(h(")
#   result.add(a.repr)
#   result.add("), ")
#   result.add(b)
#   result.add(");")

proc renderImpl(a:proc():string, b:cstring) {.importjs: "render(h(#), #);".}
proc render*(a:proc():string, b:string) {.exportc.} = renderImpl(a, b.cstring)