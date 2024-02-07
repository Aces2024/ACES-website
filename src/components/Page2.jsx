import { Link } from "react-router-dom";
const Page2 = ({key, imageUrl1, title1, description1, imageUrl2, title2, description2, imageUrl3, title3, description3}) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-center bg-[#ECE8E2] h-[50%]">
        {/* <Link to="/img"> */}
          <div id="col-1" className="m-6 sm:w-[50%] flex flex-col items-center h-[50%]">
            <img
              className="w-auto h-[50%] sm:h-full"
              src={imageUrl1}
              alt="Image 1"
            />
            <h1  style={{fontFamily : 'Merriweather'}} className="text-center">{title1}</h1>
            <p style={{fontFamily: 'Libre Baskerville'}} className="text-s" >{description1}</p>
          </div>
        {/* </Link> */}
        <div id="col-2" className="p-4 border-l-2 border-black w-[100%] sm:w-[25%] flex flex-col items-center sm:items-start h-[50%]">
          <img
            className="w-auto h-[50%] sm:h-full"
            src= {imageUrl2}
            alt="Image 2"
          />
          <h1 style={{fontFamily : 'Merriweather'}} className="text-center sm:text-left" >{title2}</h1>
          <p style={{fontFamily: 'Libre Baskerville'}} className="text-s">{description2}</p>
        </div>

        <div id="col-3" className="h-[50%] p-4 border-l-2 border-black w-[100%] sm:w-[25%] flex flex-col items-center sm:items-start">
          <img
            className="w-auto h-auto sm:h-full"
            src= {imageUrl3}
            alt="Image 3"
          />
          <h1 style={{fontFamily : 'Merriweather'}} className="text-center sm:text-left" >{title3}</h1>
          <p style={{fontFamily: 'Libre Baskerville'}} className="text-s" >{description3}</p>
        </div>
      </div>
    </>
  );
};

export default Page2;
