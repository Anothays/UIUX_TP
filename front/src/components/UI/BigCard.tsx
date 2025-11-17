
type BigCardProps = {
    id: number
}

export default function BigCard({id}: BigCardProps){
    console.log(id)
    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
                <h1 className="card-title">New movie is released!</h1>
                <h2>categorie: {"categ"}</h2>
                
                <p>Click the button to watch on Jetflix app.</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                </div>
            </div>
        </div>
    )
}