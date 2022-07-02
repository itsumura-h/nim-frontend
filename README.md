```nim
import dom, jsffi, templates

proc component(arr:seq[string]):string = tmpl html"""
<ul>
  $for row in arr{
    <li>$row</li>
  }
</ul>
"""

proc display() {.exportc.} =
  let arr = @["a","b","c","d"]
  document.getElementById("a1").innerHTML = component(arr)
```

```nim
import macros

template jsCode*(body: untyped): untyped =
  when hostCPU == "js":
    body

template nativeCode*(body: untyped): untyped =
  when hostCPU != "js":
    body

macro procedure*(head, body: untyped): untyped =
  return quote do:
    jsCode:
      discard # ここにRPCコールのコードを生成
    nativeCode:
      discard # ここでAPIルーターのコードを生成

runnableExample:
  import strformat

  # js側からはこれを呼びだすだけでAPIコールになってくれるとうれしい
  procedure hello(name: str) =
    return fmt"Hello, {name} san!!"
```

- マスターデータ（セレクトボックスの選択肢など）
- トランザクションデータwithセッション（ユーザー固有の値）
- UIをアプリケーションとして動かすためのデータ（モーダルの状態、サイドバーの開閉など）