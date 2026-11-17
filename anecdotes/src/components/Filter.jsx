import { useAnecdoteControls } from "../store";
export default function Filter() {
  const { setFilter } = useAnecdoteControls();
  function handleChangue(e) {
    const filtro = e.target.value;
    setFilter(filtro);
  }
  return (
    <>
      Filter <input type="search" name="" id="" onChange={handleChangue} />
    </>
  );
}
