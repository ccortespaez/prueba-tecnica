import './styles.scss'

const Card = ({title, image, handleClick}: any) => {
    return (
        <div className="card" onClick={handleClick}>
            <img className="card__image" src={`https://image.tmdb.org/t/p/w500/${image}`} />
            <span className="card__title">{title}</span>
        </div>
    )
}

export default Card