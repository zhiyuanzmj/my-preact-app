
import { useState } from 'preact/hooks'

export default () => {
  const [list] = useState<number[]>([1, 2, 3]);
  const [selected, setSelected] = useState(0);

  return (
    <>
      <fieldset>
        <legend>v-memo</legend>

        <div
          v-for={i in list}
          v-memo={[selected === i]}
          onClick={() => setSelected(() => i)}
        >
          {i}: {selected}
        </div>
      </fieldset>

      <fieldset>
        <legend>v-once</legend>

        <div v-once>
          {selected}
        </div>
      </fieldset>
    </>
  );
};
