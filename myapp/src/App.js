
function App() {
  return (
<>
  <h1>To Do List</h1>
  <section id="container">
    <div className="task">
      <span className="icon-star-full icon" />
      <p>Task 1</p>
      <div>
        <span className="icon-cross icon" />
        <span className="icon-checkmark icon" />
      </div>
    </div>
    <div className="task">
      <span className="icon-star-full icon" />
      <p>Task 2</p>
      <div>
        <span className="icon-cross icon" />
        <span className="icon-checkmark icon" />
      </div>
    </div>
  </section>
  <form>
    <h2>New Task</h2>
    <input type="text" placeholder="what is your next task?" />
    <button id="btn" className="icon-arrow-up icon" />
  </form>
</>
);
}

export default App;
