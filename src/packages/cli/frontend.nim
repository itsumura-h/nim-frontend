import ./functions/buildImpl

when isMainModule:
  import cligen
  dispatchMulti(
    [build],
  )
