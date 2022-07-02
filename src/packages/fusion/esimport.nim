# https://github.com/nim-lang/Nim/issues/13297#issuecomment-579936505
proc esImportUrlImpl(name: string, nameOrPath: string): string =
  result = "import { " & name & " } from "
  result.addQuoted(nameOrPath)
  result.add(";")

template esImportUrl*(name: string, nameOrPath: string) =
  {.emit: esImportUrlImpl(name, nameOrPath).}


proc esImportImpl(name: string, nameOrPath: string): string =
  result = "const { " & name & " } = "
  result.add(nameOrPath)
  result.add(";")

template esImport*(name: string, nameOrPath: string) =
  {.emit: esImportImpl(name, nameOrPath).}
