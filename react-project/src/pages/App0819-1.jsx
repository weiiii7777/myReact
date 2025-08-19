import React from 'react'
// // 建立子元件
// 直接使用props物件
function MyComponent(props) {
    props.c();
    return <>
        <div>Hello!標準寫法</div>
        <div>{props.a}</div>
        <div>{props.b}</div>
        <div>{props.c}</div>
    </>
}

// 物件解構=>{物件成員}
function MyComponent2({ a, b,c }) {
    // c();
    return <>
        <div>Hello!簡化寫法</div>
        <div>{a}</div>
        <div>{b}</div>
        <div>{c}</div>
        {c()}
    </>
}

// 父元件
const App0819 = () => {
    return (<>
        // 呼叫元件
        <MyComponent a="我是屬性a" b="我是屬性b"  c={()=>{console.log("123")}}/>
        <MyComponent2 a="我是屬性a" b="我是屬性b" c={()=>{console.log("456")}}/>
    </>
    )
}

export default App0819