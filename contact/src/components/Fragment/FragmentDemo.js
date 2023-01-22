import React from "react";
import Column from "./Column";

function FragmentDemo() {
  return (
    <div>
      <>
        <h1>About React Fragment</h1>
      </>
      <table>
        <tbody>
          <tr>
            <Column />
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default FragmentDemo;
