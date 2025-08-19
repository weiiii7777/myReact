// 捕捉下拉式方塊內容
import React, { useState } from 'react'

const App0818 = () => {
    const [subject, setSubject] = useState('');
    const opList=['HTML','CSS','JavaScript','React'];
    // 建立下接清單內容
    const opListValue=['html','css','js','react']
    return (
        <div>
            <h2>捕捉下拉式方塊內容</h2><hr />
            <p>目前被選取的項目：{subject}</p>
            <select
                name=""
                id=""
                value={subject}
                onChange={(e) => {
                    setSubject(e.target.value);
                }}>
                    {/* disabled=失能,失效 只能看不能用 */}
                <option value="" disabled>請選擇</option>
                {/* 使用陣列map方法 */}
                {
                    opList.map((item,index)=>{
                        return <option key={item} value={opListValue[index]}>{item}</option>
                    })
                }
                {/* <option value="html">HTML</option>
                <option value="css">CSS</option>
                <option value="js">JavaScript</option>
                <option value="react">React</option> */}
            </select>

        </div>

    )
}

export default App0818