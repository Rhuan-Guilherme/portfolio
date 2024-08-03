import React from 'react';

const Header = () => {
  const [theme, setTheme] = React.useState(
    window.localStorage.getItem('theme'),
  );

  function toogleTheme() {
    window.document.body.classList.toggle('dark');
    if (window.document.body.classList.contains('dark')) {
      window.localStorage.setItem('theme', 'dark');
      setTheme('dark');
    } else {
      window.localStorage.setItem('theme', 'light');
      setTheme('ligth');
    }
  }

  React.useEffect(() => {
    window.document.body.classList.remove('dark' || 'ligth');
    window.document.body.classList.add(theme);
    console.log('ta aqui');
  }, [theme]);

  return (
    <header className="flex justify-between items-center h-16 w-full px-56 shadow-md fixed z-10">
      <div className="logo text-cinza-500 dark:text-cinza-200">LOGO</div>
      <ul className="flex gap-5 font-Roboto font-medium text-cinza-500 dark:text-cinza-200">
        <li>Inicio</li>
        <li>Skills</li>
        <li>Projetos</li>
        <li onClick={toogleTheme} className="cursor-pointer">
          Contato
        </li>
      </ul>
    </header>
  );
};

export default Header;
