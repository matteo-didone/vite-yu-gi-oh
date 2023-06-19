// What is reactive? It is a feature provided by the Vue Composition API that allows us to create reactive objects. 
// What is a reactive object? It is an object that when a property is changed, it will trigger a re-render of the component that is using it.
// What is reactivity? It is the ability of Vue to detect changes to an object and update the DOM accordingly. 
// So, whenever a property's value is accessed or modified, Vue automatically detects the change and updates any part of the user interface that depends on that property.
// https://v3.vuejs.org/guide/reactivity.html#what-is-reactivity 
import { reactive } from 'vue';

// We are creating a reactive object called store. 
// Inside this object, we'll add all the properties that we want to be reactive.
const store = reactive({
    searchText: '',
    loading: true,
    cards: [],
    card: {},
});

// We are exporting the store object so that we can use it in other components. 
export {store}; 
// We can export the store object as a default export because we are only exporting one object. If we were exporting multiple objects, we would have to use named exports.