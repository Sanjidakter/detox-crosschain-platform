import React from "react";
import "./Token.css";

const Token = () => {
  return (
    <div className="p-12 w-3/4 flex flex-col md:flex-row token text-white">
      <div className="p-8 w-1/2">
        <h2 className="text-2xl font-bold">Token Sale</h2>
        <p>
          Etiam imperdiet porttitor nisi, vitae maximus nisl porta id. Etiam ut
          nunc eget ligula ornare dignissim ut id mauris. Curabitur tristique
          eros id orci scelerisqu honcus a in metus. Aliquam erat volutpat. Duis
          et enim vel turpis dictum consectetur in id tortor. Mauris pulvinar
          eget. <br />
          <br />
          Mauris vel tortor sollicitudin, suscipit augue ut, aliquam erat. Sed
          varius leo id augue tempus ultricies. Integer in sapien mattis.
        </p>
        <button className="btn bg-orange-500 mt-3">Token-sale Document</button>
      </div>
      <div className="mt-12 ml-4 leading-8">
        <ul className="list-disc list-inside">
          <li className="flex items-start">
            <button className="mr-2 text-blue-500">&#9679;</button>
            Overhead Token Distribution
          </li>
          <li className="flex items-start">
            <button className="mr-2 text-blue-500">&#9679;</button>
            Supporting Blockchain Projects
          </li>
          <li className="flex items-start">
            <button className="mr-2 text-blue-500">&#9679;</button>
            Network Growth Marketing Strategies
          </li>
          <li className="flex items-start">
            <button className="mr-2 text-blue-500">&#9679;</button>
            Suspendisse erat risus scelerisque
          </li>
          <li className="flex items-start">
            <button className="mr-2 text-blue-500">&#9679;</button>
            Nam blandit fringilla tincidunt
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Token;