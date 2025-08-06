import '../css/App0806-1.css'
const App = () => {
    // 資料抽離
    const photos = {
        photo1: {
            imgURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '小胖',
            desc: "可愛的小胖",
            btnNme: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1687080012580-2c5dd18a8ca5?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo2: {
            imgURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '叮噹',
            desc: "可愛的叮噹",
            btnNme: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1752252180600-ae777a6e5dec?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        photo3: {
            imgURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            title: '公主',
            desc: "可愛的公主",
            btnNme: '放大看',
            btnURL: 'https://images.unsplash.com/photo-1584995534443-a1bb03571fdf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
    }
    return (
        <>
            <div className="container">
                <div className="card">
                    <img src={photos.photo1.imgURL} className="card-img-top" alt="小胖" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo1.title}</h5>
                        <p className="card-text">{photos.photo1.desc}</p>
                        <a href={photos.photo1.btnURL} className="btn">{photos.photo1.btnNme}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo2.imgURL}  className="card-img-top" alt="叮噹" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo2.title}</h5>
                        <p className="card-text">{photos.photo2.desc}</p>
                        <a href={photos.photo2.btnURL} className="btn">{photos.photo2.btnNme}</a>
                    </div>
                </div>

                <div className="card">
                    <img src={photos.photo3.imgURL} className="card-img-top" alt="公主" />
                    <div className="card-body">
                        <h5 className="card-title">{photos.photo3.title}</h5>
                        <p className="card-text">{photos.photo3.desc}</p>
                        <a href={photos.photo3.btnURL} className="btn">{photos.photo3.btnNme}</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App