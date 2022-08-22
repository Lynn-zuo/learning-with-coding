import './App.css';
import { useState } from 'react'
// import Count from '@/views/01-Count'
// import MultiState from '@/views/02-MultiState'
// import ComplexStateModify from '@/views/03-ComplexStateModify'
// import UseEffect from '@/views/04-useEffect'
import UseEffectCancel from '@/views/05-useEffectCancel'
function App() {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        APP
      </header>
      <main>
        {/* <Count /> */}
        {/* <MultiState /> */}
        {/* <ComplexStateModify /> */}
        {/* <UseEffect /> */}
        { show && <UseEffectCancel />}
        <button onClick={() => setShow(!show)}>切换展示</button>
      </main>
    </div>
  );
}

export default App;
