import './styles.scss'

const Card = ({title, image, handleClick, width}: any) => {
    return (
        <div className="card" onClick={handleClick}>
            <img className={`card__image ${width && 'card--width'}`} src={`https://image.tmdb.org/t/p/w500/${image}`} />
            {
                title && <span className="card__title">{title}</span>
            }
        </div>
    )
}

export default Card