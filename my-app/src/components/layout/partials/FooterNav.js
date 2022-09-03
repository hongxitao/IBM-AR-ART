import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="https://www.ibm.com/about/innovation-studio">Innvoation Studio Homepage</a>
        </li>
        <li>
          <a href="https://www.ibm.com">IBM Homepage</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;
