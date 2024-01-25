

export const LinkItem = ({ name, to }) => {

    return (
        <li className="nav-item">
            <a className="nav-link" href={ to }>{ name }</a>
        </li>
    )
}
