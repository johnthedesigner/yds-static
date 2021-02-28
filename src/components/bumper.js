import Link from 'next/link'

const BumperLink = (props) => {
    if (props.buttonUrl) {
        return (
            <Link href={props.buttonUrl}>
                <a className="button">{props.buttonLabel}</a>
            </Link>
        )
    } else {
        return null
    }
}

const Bumper = (props) => {
    return (
        <div className="bumper">
            <h3>{props.text}</h3>
            <BumperLink
                buttonUrl={props.buttonUrl}
                buttonLabel={props.buttonLabel}
            />
        </div>
    )
}

export default Bumper
