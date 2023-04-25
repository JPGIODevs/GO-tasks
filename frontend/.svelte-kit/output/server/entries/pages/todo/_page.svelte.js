import { c as create_ssr_component } from "../../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1 class="title">todos</h1>

    <section class="todos"><form><input type="checkbox" id="toggle-all" class="toggle-all">
        <label aria-label="Mark all as complete" for="toggle-all">Mark all as complete
        </label>

        <input id="new-todo" class="new-todo" placeholder="What needs to be done?" type="text" autofocus></form>

      <ul class="todo-list"><li class="todo"><div class="todo-item"><div><input id="todo" class="toggle" type="checkbox">
              <label aria-label="Check todo" class="todo-check" for="todo"></label></div>
            <span class="todo-text">Todo 1</span>
            <button aria-label="Remove todo" class="remove"></button></div>

          </li></ul>

      <div class="actions"><span class="todo-count">0 left</span>
        <div class="filters"><button class="filter">All</button>
          <button class="filter">Active</button>
          <button class="filter">Completed</button></div>
        <button class="clear-completed">Clear completed</button></div></section></main>`;
});
export {
  Page as default
};
