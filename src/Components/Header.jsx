import React from 'react';

export default function HeaderComponent( props ){
  return(
    <header className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        Company Name
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="#">Features</a>
        <a class="p-2 text-dark" href="#">Enterprise</a>
        <a class="p-2 text-dark" href="#">Support</a>
        <a class="p-2 text-dark" href="#">Pricing</a>
      </nav>
    </header>
  )
};