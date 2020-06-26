import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Link} from 'react-router-dom';


export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="media-nav">
        <Link to='/'> <h1>WonderBook</h1></Link>
<div className="menu">
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{color: 'white'}}
      >
        <MoreVertIcon />
      </IconButton >
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}><Link className="navElement" className="navElement" to="/about">O nas</Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="navElement" to='/this-month'> Temat miesiąca </Link></MenuItem>
        <MenuItem onClick={handleClose}><Link className="navElement" to='/contact'> Kontakt </Link> </MenuItem>
      </Menu>
      </div>
    </div>
  );
}