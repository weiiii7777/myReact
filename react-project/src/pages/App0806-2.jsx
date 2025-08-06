import Card from '../conponents/Card'
import '../css/App0806-1.css'
const App = () => {
    // 資料抽離
    // 物件資料
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '小胖',
            desc: "可愛的小胖",
            btnName: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '叮噹',
            desc: "可愛的叮噹",
            btnName: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '公主',
            desc: "可愛的公主",
            btnName: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        }
    }
}

// 建立物件資料
const arrPhotos = [
    {
        id: 1,
        imgURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '小胖',
        desc: "可愛的小胖",
        btnName: '放大看',
        btnURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id=2,
        imgURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '叮噹',
        desc: "可愛的叮噹",
        btnName: '放大看',
        btnURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
        id=3,
        imgURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title: '公主',
        desc: "可愛的公主",
        btnName: '放大看',
        btnURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
]

return (
    <>
        <div className="container">
            {
                arrPhotos.map((emp))=>{
                return(
            <Empoyee
                imgURL={emp.imgURL}
                title={emp.title}
                desc={emp.desc}
                btnName={emp.btnName}
                btnURL={emp.btnURL}
            ></Empoyee>
            )
                }}
                // <Card
                //     imgURL={photos.photo1.imgURL}
                //     title={photos.photo1.title}
                //     desc={photos.photo1.desc}
                //     btnName={photos.photo1.btnName}
                //     btnURL={photos.photo1.btnURL}
                // ></Card>

                {/* <Card
                    imgURL={photos.photo2.imgURL}
                    title={photos.photo2.title}
                    desc={photos.photo2.desc}
                    btnName={photos.photo2.btnName}
                    btnURL={photos.photo2.btnURL}
                ></Card>

                <Card
                    imgURL={photos.photo3.imgURL}
                    title={photos.photo3.title}
                    desc={photos.photo3.desc}
                    btnName={photos.photo3.btnName}
                    btnURL={photos.photo3.btnURL} */}
            ></Card>
        </div>
    </>
)
}

export default App