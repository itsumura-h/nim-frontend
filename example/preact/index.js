import { html, Component, render } from 'https://unpkg.com/htm/preact/index.mjs?module';

const child=(props)=>{
  return html`<p>Hello ${props.name}!</p>`;
}

// const child=(props)=>{
//   return eval("html`<p>Hello ${props.name}!</p>`");
// }


function App () {
  return html`
    <h1>Hello</h1>
    <${child} name="John"/>
  `;
}

render(html`<${App} />`, document.getElementById('app'));
