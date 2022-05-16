import StarRating from "../StarRating/StarRating"
import { useState } from "react"

export default function FeedBackGroup(){

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(comment)
    }

    function handleComment(e){
        setComment(e.target.value)
    }

    function handleSubmit(e){
        e.preventDefault()
    }

    function getRating(rating){
        console.log(rating)
    }

    return(
        <div className="Box Box--spacious col-10 col-md-6 mx-auto text-center mt-2">
            <div className="Box-body">
            <form>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-text">Example Text</label>
                    </div>
                    <div className="form-group-body">
                    <input className="form-control" type="text" value={name} id="example-text" onChange={handleName} />
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-select">Example Select</label>
                    </div>
                    <div className="form-group-body">
                    <StarRating getRating={getRating}></StarRating>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-textarea">Example Textarea</label>
                    </div>
                    <div className="form-group-body">
                    <textarea className="form-control" value={comment} id="example-textarea" maxLength="2000" onChange={handleComment}></textarea>
                    </div>
                </div>
                <button className="btn btn-primary btn-block" onClick={handleSubmit}>
                    Submit
                </button>
            </form>
            </div>
        </div>
    )
}