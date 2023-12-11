import {useState} from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
    const {img, title, text, category, categoryClass} = props;
    const [likes, setLikes] = useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }

    return (
        <div className="col">
            <div className="card">
                <img src={img} className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{text}</p>
                    <p>
                        <span className={`badge rounded-pill p-1 ${categoryClass}`}>{category}</span>
                    </p>

                    <a onClick={handleClick} className="btn btn-primary">+</a>
                    <p className="">{likes}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;
