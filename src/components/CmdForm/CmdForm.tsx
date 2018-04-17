import * as React from "react";
import CmdInput from '../CmdInput/CmdInput';

function CmdForm() {
  return (
    <div>
      <form>
        <div className="field">
          <CmdInput />
        </div>
        <div className="field">
          <div className="control">
            <button className="button is-light">Send</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CmdForm;
