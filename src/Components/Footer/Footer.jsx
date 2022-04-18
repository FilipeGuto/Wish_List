import React from "react";
import "./footer.css";

export default function Footer() {
  return (
    <>
    <hr />
      <div className="footer">
        <div className="contact">
          <span>
            <button className="button-footer">
              <a
                href="https://portfolio-react-filipe-augusto.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Sobre
              </a>
            </button>
          </span>
          <span>
            <button className="button-footer">
              <a
                href="https://github.com/FilipeGuto"
                target="_blank"
                rel="noreferrer"
              >
                Serviços
              </a>
            </button>
          </span>
          <span>
            <button className="button-footer">
              <a
                href="https://www.linkedin.com/in/filipeguto/"
                target="_blank"
                rel="noreferrer"
              >
                Contato
              </a>
            </button>
          </span>
        </div>
      </div>
    </>
  );
}
