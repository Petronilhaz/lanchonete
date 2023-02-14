import { ContextProvider } from './contexts/ContextProvider/Context'
import { ComponenteTeste } from '../src/components/ComponenteTeste'

function App() {
  return (
    <ContextProvider>
      <ComponenteTeste />
    </ContextProvider>
  );
}

export default App;
