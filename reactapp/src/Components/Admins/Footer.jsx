import React from "react";

export default function Footer(props) {



  return (
    <React.Fragment>
      <footer className="card__footer">
        <button data-card-controller className="card__toggle" onClick={ () => props.btnClick(props.id) }>
          <i className="fa-solid fa-plus card__toggle-icon"></i>
        </button>
      </footer>
    </React.Fragment>
  );
}
