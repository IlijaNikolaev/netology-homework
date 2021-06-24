const Menu = ({menuItems}) => {
    return (
        <ul className="d-flex w-100 m-0 p-0">
            {menuItems.map(item =>
                <li key={item} className="mr-3 p-0" style={{listStyle: 'none'}}>
                    <a href="#">{item}</a>
                </li>)}
        </ul>
    )
}
export default Menu
