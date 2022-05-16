import StarRating from "../StarRating/StarRating"
import { useState } from "react"

export default function FeedBackGroup(){

    const [name, setName] = useState("")
    const [comment, setComment] = useState("")
    const [invite, setInvite] = useState("")

    function handleName(e){
        e.preventDefault()
        setName(e.target.value)
        console.log(comment)
    }

    function handleComment(e){
        setComment(e.target.value)
    }

    function handleInvite(e){
        setInvite(e.target.value)
    }
        
    let rating

    function getRating(r){
        rating = r
    }

    function handleSubmit(e){
        // e.preventDefault()
        // console.log(rating)
        if(name!=""&&rating!=undefined&&comment!=""&&invite!=""){
            fetch(
                'http://localhost:3000/api/getFeedback', 
                {
                    method: 'POST', // or 'PUT'
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({name:name, comment:comment, rating: rating, invite:invite}),
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
    }


    return(
        <div className="Box Box--spacious col-10 col-md-6 mx-auto text-center m-5" style={{maxWidth:"400px"}}>
            <div className="Box-body">
            <form>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-text">Your Name</label>
                    </div>
                    <div className="form-group-body">
                    <input className="form-control" type="text" value={name} id="example-text" onChange={handleName} required/>
                    </div>
                </div>

                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-select">Your Rating</label>
                    </div>
                    <div className="form-group-body">
                    <StarRating getRating={getRating}></StarRating>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-textarea">Leave a comment</label>
                    </div>
                    <div className="form-group-body">
                    <textarea className="form-control" value={comment} id="example-textarea" maxLength="2000" onChange={handleComment} required></textarea>
                    </div>
                </div>
                <div className="form-group">
                    <div className="form-group-header">
                    <label htmlFor="example-text">Invite Code</label>
                    </div>
                    <div className="form-group-body">
                    <input className="form-control" type="text" value={invite} id="example-text" onChange={handleInvite} required/>
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