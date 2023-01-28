import std/asyncdispatch
import ../../src/templates
import ./alpine_view

const script = staticRead("./alpine_script.js")

proc impl():Future[Component] {.async.} =
  tmpli html"""
    <script src="https://unpkg.com/alpinejs@3.10.5/dist/cdn.min.js"></script>

    <div id="hoge">
      $(alpineView(1, "SSRされました")) <!-- ===== SSRで描画 -->
    <div>
    <script>
      $script
      document.addEventListener("alpine:init", mount("hoge"))
    </script>
  """

proc alpinePage*():Future[string] {.async.} =
  return $impl().await
