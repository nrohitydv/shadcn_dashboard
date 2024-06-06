import Image from "next/image";
import React from "react";

const Cards = () => {
  return (
    <div>
      <h2>list of cards</h2>
      <Image src="/icons/inbox.svg" alt="" width={50} height={50} />
    </div>
  );
};

export default Cards;
