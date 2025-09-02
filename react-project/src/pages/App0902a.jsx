    import{useMemo,useState} from "react"

const App = () => {
    // 表格資料
    const arrProd=[
        {
            id:1,
            prodName:'筆電',
            prodPrice:80,
            prodImgUrl:'./images/p1.jpg',
        },
                {
            id:2,
            prodName:'人物1',
            prodPrice:120,
            prodImgUrl:'./images/p2.jpg',
        },
                {
            id:3,
            prodName:'街景',
            prodPrice:200,
            prodImgUrl:'./images/p3.jpg',
        },
                {
            id:4,
            prodName:'自拍視角',
            prodPrice:160,
            prodImgUrl:'./images/p4.jpg',
        },
                {
            id:5,
            prodName:'人物2',
            prodPrice:120,
            prodImgUrl:'./images/p5.jpg',
        },
    ]
    //表格元件
    const ProdTable = ({ascFilterProds}) => {
        return (
            <table style={{ width: '500px', marginTop: '20px' }}>
                <tbody>
                    {/* jsx中撰寫js語法必須先打上一組大括號 */}
                   {
                        ascFilterProds.map((prod)=>{
                            return(
                             <tr key={prod.id}>
                        <td style={{
                            borderBottom: '1px dashed #ccc',
                            padding: '5px',
                            width: '100px',
                        }}>
                            {prod.prodName}
                        </td>
                        <td style={{
                            borderBottom: '1px dashed #ccc',
                            padding: '5px',
                            width: '100px',
                        }}>
                            <img src={prod.prodImgUrl} alt=""
                            style={{width:'120px'}} />
                            </td>
                        <td style={{
                            borderBottom: '1px dashed #ccc',
                            padding: '5px',
                            width: '100px',
                        }}>{prod.prodPrice}</td>
                    </tr>
                    )
                        })
                   }
                </tbody>
            </table>
        )
    }

    //搜尋變數，預設為空字串
    const[search, setSearch]=useState('');

    // 陣列變數，預設為元商品陣列資料
    const[prods, setProds]=useState(arrProd);

    // 排序變數，預設為遞增
    const[ascending, setAscending]=useState(true);

    // 搜尋變數，預設為空字串

    // 建立排序與搜尋的韓式
    const ascFilterProds = useMemo(()=>{
        return [...prods]
        //排序
        .sort((a,b)=>{
            return ascending?a.prodPrice-b.prodPrice:b.prodPrice-a.prodPrice
        })
        // 搜尋
        .filter((prod)=>{
            // 保留關鍵字的內容
            return prod.prodName.match(search);
        })
    },[ascending,search]);

    return (
        <div className='wrap'>
            排序：
            <input 
                type="checkbox"
                //綁定排序變數
                checked={ascending}
                // 當核取方塊(checkbox)有異動時，更新排序變數
                onChange={(e)=>{setAscending(e.target.checked)}}
                />
            <br />
            搜尋：
            <input type="text"
            // 綁定搜尋變數
            value={search}
            // 當搜尋內容有異動時，更新搜尋變數
            onChange={(e)=>{setSearch(e.target.value)}}
             />

            {/* 表格 */}
            <ProdTable ascFilterProds={ascFilterProds} />
        </div>
    )
}

export default App