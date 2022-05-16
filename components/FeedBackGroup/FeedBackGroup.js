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
        
    let rating

    function getRating(r){
        rating = r
    }

    function handleSubmit(e){
        e.preventDefault()

        fetch(
            'http://localhost:3000/api/getFeedback', 
            {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({name:name, comment:comment, rating: rating}),
            }
        )
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
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
                    <input className="form-control" type="text" value={name} id="example-text" onChange={handleName} required/>
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
                    <textarea className="form-control" value={comment} id="example-textarea" maxLength="2000" onChange={handleComment} required></textarea>
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