import React from "react";
import ReviewRowComponent from "./ReviewRowComponent";
import {fetchProfile} from "../services/UserService";
import {Link} from "react-router-dom";


export default class ReviewTableComponent
    extends React.Component {

    state = {
        reviews: [],
        review: '',
        currentUser: {
            id: ''
        }
    }

    componentDidMount() {
        fetchProfile()
            .catch(e => {})
            .then(currentUser => {
                if(currentUser) {
                    this.setState({currentUser: currentUser})
                }
            })
    }




    render() {
        return (
            <div>
                <br/>
                <h3>
                    Review from local Database
                </h3>
                <table className="table">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>Review</th>
                        <th>Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {
                        this.props.reviews.map(review =>
                            <ReviewRowComponent
                                deleteReview={this.props.deleteReview}
                                key={review.id}
                                review={review}/>
                        )}
                    </tbody>
                </table>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <h3>Add your review here</h3>
                    <input
                        className="form-control"
                        onChange={(event) => this.setState({
                            review: event.target.value
                        })}
                        value={this.state.review}
                        placeholder="This product is awesome"/>

                    {
                        this.state.currentUser.id &&
                        <button className="btn btn-success"
                            onClick={() => this.props.addReview(
                            this.props.did,
                            {
                                uid: this.state.currentUser.id,
                                content: this.state.review
                            }
                        )}>
                            Add Review
                        </button>
                    }

                    {
                        !this.state.currentUser.id &&

                        <Link to='/login'>
                            <button className={"btn btn-primary"}>
                                Login to review
                            </button>
                        </Link>

                    }


                </div>


                <br/>
                <br/>
            </div>
        )
    }
}
