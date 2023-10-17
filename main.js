// GET REQUEST
async function getTodos() {
  // axios
  //   .get("https://jsonplaceholder.typicode.com/todos")
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.error(err));
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}
// POST REQUEST
async function addTodo() {
  // axios
  //   .post("https://jsonplaceholder.typicode.com/todos", {
  //     title: "Hacer un buen readme en los próximos meses",
  //     completed: false,
  //   })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.error(err));
  try {
    const res = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: "Hacer un buen readme en los próximos meses",
      completed: false,
    });
    showOutput(res);
  } catch (error) {
    console.error(error);
  }
}

// PUT/PATCH REQUEST
async function updateTodo() {
  // axios
  //   .put("https://jsonplaceholder.typicode.com/todos/7", {
  //     title: "Hacer un buen readme en los próximos meses",
  //     completed: true,
  //   })
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.error(err));
  try {
    const res = await axios.put(
      "https://jsonplaceholder.typicode.com/todos/7",
      {
        title: "Hacer un buen readme en los próximos meses",
        completed: true,
      }
    )
    showOutput(res)
  } catch (error) {
    console.error(error);
  }
}

// DELETE REQUEST
async function removeTodo() {
  // axios
  //   .delete("https://jsonplaceholder.typicode.com/todos/7")
  //   .then((res) => showOutput(res))
  //   .catch((err) => console.error(err));
  try {
    const res = await axios
    .delete("https://jsonplaceholder.typicode.com/todos/7")
    showOutput(res)
  } catch (error) {
    console.error(error);
  }
}

// Show output in browser
function showOutput(res) {
  document.getElementById("res").innerHTML = `
    <div class="card card-body mb-4">
      <h5>Status: ${res.status}</h5>
    </div>
    <div class="card mt-3">
      <div class="card-header">
        Data
      </div>
      <div class="card-body">
        <pre>${JSON.stringify(res.data, null, 2)}</pre>
      </div>
    </div>
  `;
}

// Event listeners
document.getElementById("get").addEventListener("click", getTodos);
document.getElementById("post").addEventListener("click", addTodo);
document.getElementById("update").addEventListener("click", updateTodo);
document.getElementById("delete").addEventListener("click", removeTodo);
