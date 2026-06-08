const Card = (props) => {
    return (
        <div className="Card">
            <img src={props.restaurantImg}/>
            <h3>{props.restaurantName}</h3>
            <h4>{props.restaurantType}</h4>
            <a href={props.restaurantLink}>
                <button>View Website</button>
            </a>
        </div>
    );
}

export default Card;