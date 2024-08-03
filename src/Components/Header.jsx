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
    <header className="flex justify-between items-center h-16 px-56 shadow-md">
      <div className="logo">LOGO</div>
      <ul className="flex gap-5 font-Roboto font-medium text-cinza-500 dark:text-cinza-300">
        <li>Inicio</li>
        <li>Skills</li>
        <li>Projetos</li>
        <li onClick={toogleTheme}>Contato</li>
      </ul>
    </header>
  );
};

export default Header;
