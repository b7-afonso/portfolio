function Header () {
  return(
    <div>
      <div className="card">
        <div className="row" onclick="handleClick()" role="button" tabindex="0" aria-expanded="false" aria-label="Open Menu">
          <div className="title">MENU</div>
          <svg width="32" height="32" viewBox="0 0 100 100" class="icon">
            <path className="path1">
              <animate className="animate1" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze" />
            </path>
            <path className="path2">
              <animate className="animate2" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze" />
            </path>
            <path className="path3"> 
              <animate className="animate3" attributeName="d" dur="0.35s" repeatCount="1" fill="freeze" />
            </path>
          </svg>
        </div>
      </div>
      <nav className="main-navigation">
      <div className="logo">Bianca Afonso</div>
        <ul>
          <li className="menu-item"><a href="/">Home</a></li>
          <li className="menu-item"><a href="/about">About</a></li>
          <li className="menu-item"><a href="/work">Work</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header