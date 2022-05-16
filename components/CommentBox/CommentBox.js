export default function CommentBox({name,rating,message}){

    const style = {cursor: 'pointer', width: '260px', maxHeight: '420px'}

    return(
        <div className="col-12 col-md-6 col-lg-4 col-xl-3 float-left">
            <div className="Box hover-grow m-3 rounded-3 mx-auto overflow-hidden" style={style}>
            <div className="Box-header">
                <h3 className="Box-title">
                {name}
                <span className="Counter Counter--gray ml-2">Rating: {rating}</span>
                </h3>
            </div>
            <div className="Box-body">
                {message}
            </div>
            </div>
      </div>
    )
}