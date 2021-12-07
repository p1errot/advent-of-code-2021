import createList from "./modules/createList";
import "./styles.css";

const app = document.getElementById("app");

createList().then((list) => {
  app.append(list);
});
