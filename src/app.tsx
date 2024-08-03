import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import VMemo from "./v-memo";
import VSlots from "./v-slots.tsx";

export function App() {
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>

      <VSlots>
        <div>default Slot</div>
        <template v-slot:title={{ name }}>{name} Slot</template>
      </VSlots>

      <VMemo />
    </>
  );
}
