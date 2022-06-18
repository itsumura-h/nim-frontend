import
  std/asyncdispatch,
  std/json,
  basolato/view,
  ../layouts/application_view


proc impl():Future[Component] {.async.} =
  style "css", style:"""
    <style>
      .className {
      }
    </style>
  """

  tmpli html"""
    <div id="app">
      <script src="/js/hello_nim.js"></script>
      <script>window.addEventListener('load', helloNim)</script>
      <hello-nim />
    </div>
  """

proc helloWorldView*():Future[string] {.async.} =
  let title = ""
  return $applicationView(title, impl().await)
