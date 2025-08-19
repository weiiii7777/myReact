import { useState } from 'react'

// 建立元件方法一 元件名稱
function MyComponent() {
    const [counts, setCounts] = useState(0);
    const handleClick = () => {
        setCounts(counts + 1);
    }
    return (
        // 呼叫函示不用加小括號
        <button id="btn1" onClick={handleClick}>點擊次數:{counts}</button>
    )
}

// 建立元件方法二 元件名稱
// const Mycomponent=()=>{
//     return(

//     )
// }

const App0818 = () => {
    // let counts=0;
    // const [counts, setCounts] = useState(0);

    return (
        <div>
            {/* <button id="btn1" onClick={() => {
                // counts++;
                setCounts(counts+1);
                console.log(counts);
            }}>點擊次數:{counts}</button> */}
            <MyComponent />
        </div>

    )
}

export default App0818