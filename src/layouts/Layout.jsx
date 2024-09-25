import React from "react";

function Layout({ children }) {
  return (
    <>
      <header>
        <h1>Crypto App</h1>
        <p>
          <a href="https://botostart.ir">BotoStart</a> | React.js
        </p>
      </header>
      {children}
      <footer>
        <p>Developed By Mary with Love</p>
      </footer>
    </>
  );
}

export default Layout;
