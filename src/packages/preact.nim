import ./js_definitions


esImport("h, render", "preact")

proc jsxPragma*() {.importjs: "/* @jsx h */".}


proc renderImpl(jsx:string, element:string):string =
  return "render((" & jsx & "), " & element & ");"

template render*(jsx:string, element:string) =
  {.emit: renderImpl(jsx, element).}


proc renderImpl(jsx:Compoent, args:varges[ComponentArg]):string =
  return "<" & jsx.value & args.join() "/>, " & element & ");"

template render*(jsx:Compoent, element:string) =
  {.emit: renderImpl(jsx, element).}



proc renderImpl(jsx:cstring):string =
  result.add("return " & jsx & ";")

template render*(jsx:string) =
  return renderImpl(jsx.cstring)


