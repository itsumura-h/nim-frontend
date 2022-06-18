import json
# framework
import basolato/controller
import basolato/core/base
# view
import ../views/pages/welcome_view
import ../views/pages/hello_world_view


proc index*(context:Context, params:Params):Future[Response] {.async.} =
  return render(helloWorldView().await)

proc indexApi*(context:Context, params:Params):Future[Response] {.async.} =
  return render(%*{"message": "Basolato " & BasolatoVersion})
