import { useState } from "react"


function App0819c() {
    const [curImg, setCurImg] = useState(2);
    const arrPhotots = [
        "./images/p1.jpg",
        "./images/p3.jpg",
        "./images/p5.jpg",
        "./images/p7.jpg",
    ]


    return (
        <div>
            <h1>小圖換大圖</h1><hr />
            <div>
                <div>
                    {
                        arrPhotots.map((photo, index) => {
                            return (
                                <img
                                    key={index}
                                    src={photo}
                                    alt=""
                                    width={120}
                                    height={80}
                                    style={{ cursor: "pointer" }}


                                    // 左鍵一下縮圖時
                                    onClick={() => {
                                        // 更新最新縮圖的索引值
                                        setCurImg(index);
                                        let showPic = document.querySelector('#showPic');
                                        showPic.style.display = "block";
                                                                            }}


                                // 滑鼠碰到時
                                // onMouseOver={()=>{
                                //     setCurImg(index)
                                // }}
                                // 滑鼠離開時
                                // 若離開縮圖要還原預設圖，則將索引位置設定預設圖的值即可
                                // onMouseOut={()=>{
                                //     setCurImg(2)
                                // }}
                                />
                            )
                        })
                    }
                </div>
                <div>
                    {/* <img src="./images/p1.jpg" alt="" width={420} height={280} /> */}
                    {/* 顯示大圖，預設看不見，當縮圖被左鍵一下時，才會顯示 */}
                    <img
                        id="showPic"
                        src={arrPhotots[curImg]}
                        alt=""
                        width={420}
                        height={280}
                        style={{ display: "none" }}
                    />
                </div>
            </div>
        </div>
    )
}
export default App0819c