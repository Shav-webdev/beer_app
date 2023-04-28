import { FC } from 'react';
import './styles.scss';
import ThemeToggle from 'components/ThemeToggle';

const Header: FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
