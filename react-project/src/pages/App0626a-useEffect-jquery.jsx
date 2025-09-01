import $ from 'jquery'
import { useEffect } from 'react'
import '../css/App0826a.css'
const App = () => {
    // useEffect 把東西記在記憶體 不會進來跑
    useEffect(() => {
        // 當滑鼠碰到圖片時，放大圖片
        $('.zoom').on('mouseover',  ()=> {
            $(".zoom").addClass('imgScale');
        })

        //當滑鼠離開圖片時，還原圖片
        $('.zoom').on('mouseout', ()=> {
            $(".zoom").removeClass('imgScale');
        })
    },[])
    return (
        <div>
            {console.log('return')}
            <h1>useEffect</h1>
            <h2>jQuery-圖片縮放</h2>
            <a href="#" className="zoom">
                <img src="./images/p3.jpg" alt="" />
            </a>
        </div>
    )
}

export default App