function App() {
    // 一般變數
    const catName="襪襪"
    // 屬性名稱變數
    const myClassName="myClass"
    // 方法
    function myClick(){
        alart("我是按鈕一")
    }
    return (
        <>
            <div>
                <p className={myClassName}>姓名：{catName}</p>
                <button type="button" onclick={myClick}>按鈕一</button>
                <button type="button" onclick={()=>{
                    alart("我是按鈕二")
                }}>按鈕二</button>
            </div>
        </>
    )
}
export default App;