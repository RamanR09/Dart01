import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs";

import { Loader } from "./";

const commonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handlechange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={() => handlechange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  ></input>
);
const handleSubmit = () => {};

const Welcome = () => {
  const connectWallet = () => {};
  return (
    <div className="flex w-full justify-center items-center">
      <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start flex-col md:mr-10">
          <h1 className="text-green-500 text-3xl sm:text-5xl text-gradient py-1">
            Send Crypto <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Explore the crypto world. Buy and seel cryptocurrencies easily
          </p>
          <button
            type="button"
            onClick={connectWallet}
            className="flex flex-row justify-center items-center  my-5 bg-[#2952e3] p-3 rounded-full cursor-pointer hover:bg-[#2546bd] "
          >
            <p className=" text-base font-bold">Connect Wallet</p>
          </button>
          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${commonStyles}`}>Reliability</div>
            <div className={commonStyles}>Security</div>
            <div className={` rounded-tr-2xl ${commonStyles}`}>Etherium</div>
            <div className={`rounded-bl-2xl ${commonStyles}`}> WEB 3.0</div>
            <div className={` ${commonStyles}`}> Low fees </div>
            <div className={`rounded-br-2xl ${commonStyles}`}> BlockChain</div>
          </div>
        </div>
        <div className="flex flex-col flex-1 items-centre justify-start w-full md:mt-0 mt-10  ">
          <div className="p-3  justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 bg-gradient-to-r from-purple-500 via-red-400 to-pink-500 white-glassmorpism">
            <div className="flex justify-between flex-col w-full h-full">
              <div className=" flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <SiEthereum fontSize={23} color="#fff" />
                </div>
                <div className="w-29 h-20 mt-3 rounded-full bg-yellow-500 border-2 border-white">
                  <div className="  flex w-20 h-10 bg-gray-300 border-2 mt-2 justify-between items-start border-white rounded-full ">
                    <div className="  flex  inset-y-0 right-0 w-12 h-12 border-2 bg-blue-400 border-white rounded-full items-center justify-between">
                      <SiEthereum
                        fontSize={25}
                        color="#fff"
                        className="ml-1.5"
                      />
                    </div>
                    <div className="  flex  inset-y-0 right-0 w-12 h-12 border-2 bg-blue-400 border-white rounded-full items-center">
                      <SiEthereum
                        fontSize={25}
                        color="#fff"
                        className="ml-1.5"
                      />
                    </div>
                  </div>
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              <div>
                <p className="text-white font-light text-sm ml-2">Address</p>
                <p className="text-white font-semibold text-lg m-1 ">
                  Etherium
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism ">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Amount ETH"
              name="amount"
              type="number"
              handleChange={() => {}}
            />
            <Input
              placeholder="Keyword (Gif)"
              name="keyword"
              type="text"
              handleChange={() => {}}
            />
            <Input
              placeholder="Enter Message"
              name="message"
              type="text"
              handleChange={() => {}}
            />
            <div className="h-[1px] w-full bg-gray-400 my-2" />
            {false ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] rounded-full cursor-pointer"
              >
                Send
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
