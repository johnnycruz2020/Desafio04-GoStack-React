import React, { Component } from 'react';
import { AccountCircle } from '@material-ui/icons'

import './styles.css';

import logoFacebook from '../../assets/facebook.png';

class Header extends Component {
  render() {
    return (
      <header>
        <img src={logoFacebook} alt="Facebook" className="logo"/>
        <div className="perfil">
          <h3>Meu perfil</h3>
          <AccountCircle size="16" style={{ color: '#FFF' }} />
        </div>
      </header>
    );
  }
}

export default Header;