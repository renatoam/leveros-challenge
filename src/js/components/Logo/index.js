import React from 'react';

import './style.scss';
import { LogoIcon } from '../Images';

export default function Logo() {
  return <h1><img src={LogoIcon} alt="Logo"/></h1>
}