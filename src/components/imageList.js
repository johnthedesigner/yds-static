const ImageList = (props) => {
    return (
        <div className="imagelist__item">
            <div className="imagelist__image">
                <img src={props.image} width="100" height="100" />
            </div>
            <div className="imagelist__text">{props.children}</div>
        </div>
    )
}

export default ImageList
