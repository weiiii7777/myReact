import React from 'react'
// 次元件
function SecondComponent({c}) {
    return <>
    <h1>我是SecondComponent元件</h1>
    <p>SecondComponent接收的屬性是:{c}</p>
    </>
}




function MyComponent2({b}) {
    return (
        <>
            <h2>呼叫外部元件來自於主元傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias optio doloribus vitae! Totam natus placeat debitis sed, mollitia illum soluta inventore officia unde, esse, accusantium ipsam. Nulla, eveniet vel.</p>
            <SecondComponent c={b}/>
            我是：{b}
        </>
    )
}


// 子元件接收主元件的原件
function MyComponent({ a,children }) {
    // console.log(props)
    return (
        <>
            <h2>呼叫外部元件來自於主元傳遞</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio molestias optio doloribus vitae! Totam natus placeat debitis sed, mollitia illum soluta inventore officia unde, esse, accusantium ipsam. Nulla, eveniet vel.</p>
            {children}
            我是：{a}
        </>
    )
}

// 主元件
const App0819 = () => {
    return (
        <div>
            <h1>元件之間傳遞元件</h1><hr />
            {/* 此方法比較進階，現階段理解即可 */}
            <MyComponent a="屬性a">
                <SecondComponent c="屬性a"/>
            </MyComponent>

            <hr/>
            {/* 現階段使用此方法(逐層各自呼叫元件) */}
            <MyComponent2 b="屬性b"/>
        </div>
    )
}

export default App0819