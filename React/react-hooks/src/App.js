import './App.css';
import { useState } from 'react'
// import Count from '@/views/01-Count'
// import MultiState from '@/views/02-MultiState'
// import ComplexStateModify from '@/views/03-ComplexStateModify'
// import UseEffect from '@/views/04-useEffect'
// import UseEffectCancel from '@/views/05-useEffectCancel'
// import MultiuseEffect from '@/views/06-MultiuseEffect'
import ContextHook from './views/07-ContextHook';
// import UseReducer from './views/08-useReducer';
// import UseReducer2 from './views/08-useReducer/counter2';
// import UseCallback from './views/09-useCallback'
// import UseMemo from './views/10-useMemo/index2';
// import UseRef from './views/11-useRef';
// import UseImperativeHandle from './views/12-useImperativeHandle';
// import UseLayoutEffect from './views/13-useLayoutEffect';
import CustomHook from './views/14-customHook';

import { UserContext, ThemeContext } from '@/context'

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
        {/* { show && <UseEffectCancel />} */}
        {/* <MultiuseEffect /> */}
        <UserContext.Provider value={{name: 'lynne', age: 25}}>
          <ThemeContext.Provider value={{color: 'red', fontSize: '18px'}}>
            <ContextHook />
          </ThemeContext.Provider>
        </UserContext.Provider>
        {/* <UseReducer />
        <UseReducer2 /> */}
        {/* <UseCallback /> */}
        {/* <UseMemo /> */}
        {/* <UseRef /> */}
        {/* <UseImperativeHandle /> */}
        {/* <UseLayoutEffect /> */}
        <button onClick={() => setShow(!show)}>切换展示</button>
        { show && <CustomHook /> }
      </main>
    </div>
  );
}

export default App;
