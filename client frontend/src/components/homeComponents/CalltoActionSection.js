import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>¿NECESITAS MÁS CONSEJOS?</h2>
              <p>Regístrese gratis y obtenga los últimos consejos.</p>
              <form className="form-section">
                <input placeholder="Tu Correo..." name="email" type="email" />
                <input value="Si quiero!" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
