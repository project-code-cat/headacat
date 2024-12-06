import useStore from '../shared/stores/useStore';

function BearCounter() {
  const {bears, increase, decrease} = useStore();

  return (
    <div>
      <h1>곰의 수: {bears}</h1>
      <button onClick={increase}>증가</button>
      <button onClick={decrease}>감소</button>
    </div>
  );
}

export default BearCounter;
