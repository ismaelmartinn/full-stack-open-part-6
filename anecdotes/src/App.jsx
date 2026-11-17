import AnecdoteForm from "./components/AnecdoteForm";
import AnecdoteList from "./components/AnecdoteList";
import Filter from "./components/Filter";
import { useAnecdoteControls } from "./store";

const App = () => {
  const { addVote } = useAnecdoteControls();

  const vote = (id) => {
    addVote(id);
  };

  return (
    <div>
      <Filter />
      <h2>Anecdotes</h2>
      <AnecdoteList vote={vote} />
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  );
};

export default App;
