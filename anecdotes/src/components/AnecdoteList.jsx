import { useAnecdotes, useFilter } from "../store";
export default function AnecdoteList({ vote }) {
  const anecdotes = useAnecdotes();
  const filter = useFilter();
  const filteredAnecdotesList = anecdotes.filter((filteredAnecdotes) => {
    return filteredAnecdotes.content.includes(filter);
  });

  const ordenatedAnecdotesList = filteredAnecdotesList.toSorted(
    (a, b) => b.votes - a.votes,
  );
  return (
    <section>
      {ordenatedAnecdotesList.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
    </section>
  );
}
