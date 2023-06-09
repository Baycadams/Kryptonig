

const Comment = ()=>{

    const SubmitComment = (e)=>{
        e.preventDefault()
        alert('comment collected')
    }

    return(
        <div className="comment">
            <h3>Add a Comment</h3>
            <form action="" onSubmit={SubmitComment}>
                <div>
                    <input type="text" name="" id="comment-name" placeholder="Name"/>
                </div>
                <div>
                    <textarea name="" id="" cols="30" rows="10" placeholder="Your Comment"></textarea>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default Comment