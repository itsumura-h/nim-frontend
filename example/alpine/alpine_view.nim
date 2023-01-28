import ../../src/templates


proc alpineView*(num:int, text:string):Component =
  tmpli html"""
    <button @click="incrementNum">Increment</button>
    <p>$(num)</p>
    <input type="text" @change="setMessage">
    <p>$(text)</p>
  """
