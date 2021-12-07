const TOTAL_DAYS = 3;

const createList = async () => {
  const list = document.createElement("ul");
  let listHTML = "";

  list.className = "days-list";

  for (let i = 1; i <= TOTAL_DAYS; i++) {
    const { excercise1 } = await import(`../excercises/day${i}/ex1`);
    const { excercise2 } = await import(`../excercises/day${i}/ex2`);

    const ex1 = excercise1();
    const ex2 = excercise2();

    listHTML += `
      <li>
        <h2>Day ${i}</h2>
        <ol>
          <li>
            ${ex1.title}:
            <code>${ex1.value}</code>
          </li>
          <li>
            ${ex2.title}:
            <code>${ex2.value}</code>
          </li>
        </ol>
      </li>
    `;
  }

  list.innerHTML = listHTML;

  return list;
};

export default createList;
