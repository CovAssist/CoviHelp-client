import './Header.css';

const Header = () => {
  return (
    <div className='background'>
      <nav className="header">
          <span className="heading">coviCare</span>
          <p>Home</p>
          <p>Verified Covid Resources</p>
          <p>Contact Us</p>
          <button className="btn">Donate</button>
      </nav>
      <div className='hero'>
        <p><h1>coviCARE<br /></h1>
        stay HOME, stay SAFE
        </p>
      </div>
    </div>
  );
};

export default Header;
