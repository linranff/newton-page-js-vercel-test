import Image from "next/image";

const Char_Card = (props) => {
  return (
    <>
      <div className="card w-96 glass pt-8 mx-4">
        <figure>
          <Image
            src={props.src}
            alt="character card"
            layout="fixed"
            height={200}
            width={200}
          />
        </figure>
        <div className="card-body mt-0 pt-4">
          <h2 className="card-title text-black">King</h2>
          <p className="text-green-900 text-xl ">
            How to defeat your enemy with peace&love?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Learn now!</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Char_Card;
