import { useState } from 'react'

const App0818 = () => {
    // const txt='user';
    const [txt, setTxt] = useState('user');

    return (
        <div>
            <h2>文字方塊</h2><hr />
            帳號：<input type="text" value={txt} onChange={(e) => {
                setTxt(e.target.value);
                // console.log(e.target.value);
            }} />
            <button onClick={()=>{
                alert(`帳號：${txt}`);

            }}>確認送出</button>
        </div>
    )
}

export default App0818