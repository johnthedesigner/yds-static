const Pingpong = (props) => {
    return (
        <div
            className={`pingpong pingpong--${
                props.side == 'left' ? 'left' : 'right'
            }`}
        >
            <div className="pingpong__image">
                <img
                    src={props.image}
                    width={props.ratioWidth || 1}
                    height={props.ratioHeight || 1}
                />
            </div>
            <div className="pingpong__text">{props.children}</div>
        </div>
    )
}

export default Pingpong
