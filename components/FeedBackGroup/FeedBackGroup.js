import StarRating from "../StarRating/StarRating"

export default function FeedBackGroup(){
    return(
        <div className="Box Box--spacious col-10 col-md-6 mx-auto text-center">
            <div className="Box-body">

            <form>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-text">Example Text</label>
                    </div>
                    <div className="form-group-body">
                    <input className="form-control" type="text" value="Example Value" id="example-text" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-select">Example Select</label>
                    </div>
                    <div className="form-group-body">
                    <StarRating></StarRating>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-textarea">Example Textarea</label>
                    </div>
                    <div className="form-group-body">
                    <textarea className="form-control" id="example-textarea" maxLength="2000"></textarea>
                    </div>
                </div>
                <button className="btn btn-primary btn-block">
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}