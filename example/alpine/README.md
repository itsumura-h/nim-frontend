- `Alpine.reactive()`と`Alpine.effect()`をラップすることでstateとeffectを表現できる
- effectの中でDOMを更新しようとすると`innerHTML`に代入する必要があり、inputタグではフォーカスが外れる