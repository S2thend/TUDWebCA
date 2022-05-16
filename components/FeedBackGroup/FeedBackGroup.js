import StarRating from "../StarRating/StarRating"

export default function FeedBackGroup(){
    return(
        <div class="Box Box--spacious col-6 mx-auto text-center m-5">
            <div class="Box-body">

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
                    <textarea className="form-control" id="example-textarea"></textarea>
                    </div>
                </div>
                <button class="btn btn-primary btn-block">
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}