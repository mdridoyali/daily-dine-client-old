import { Parallax} from "react-parallax";

const Cover = ({ title, subHeder, img }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-20}
      >
        <div
          className="hero h-[300px] md:h-[500px]"
          // style={{
          //   backgroundImage: `url("${img}")`,
          // }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">{title}</h1>
              <p className="mb-5">{subHeder}</p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
