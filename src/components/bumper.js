const Bumper = (props) => {
    return (
        <div className="bumper">
            <h3>{props.text}</h3>
            <a href={props.buttonUrl} className="button">
                {props.buttonLabel}
            </a>
        </div>
    )
}

export default Bumper
