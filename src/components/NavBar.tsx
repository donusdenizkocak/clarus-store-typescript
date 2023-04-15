import {Link} from 'react-router-dom'

 const NavBar = () => {
  return (
    <div>
        <h3>Clarus Store</h3>
        <div>
            <Link to="/" >Home</Link>
            <Link to="/favorites" >Favorites</Link>
        </div>
    </div>
  )
}
export default NavBar
