import React from "react";

import { Button, Img, Input, Line, Text } from "components";

const FrameOnePage = () => {
  return (
    <>
      <div className="bg-gray-900 flex sm:flex-col md:flex-col flex-row font-passionone gap-[23px] items-center mx-auto p-3 w-full">
        <div className="flex flex-col gap-[23px] items-center justify-start md:ml-[0] ml-[88px] md:px-5 w-[61%] md:w-full">
          <div className="flex flex-col gap-[13px] items-start justify-start w-full">
            <Text
              className="sm:text-[30.33px] md:text-[32.33px] text-[34.33px] text-yellow-600"
              size="txtPassionOneRegular3433"
            >
              DIALOGIX
            </Text>
            <div className="bg-gray-100_6c flex flex-col font-inter items-center justify-start p-[5px] rounded-[10px] w-full">
              <div className="flex flex-col gap-[18px] items-start justify-start mb-[318px] mt-[42px] w-[97%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-start justify-start w-full">
                  <Button className="flex h-[34px] items-center justify-center mb-12 w-[34px]">
                    <Img src="images/img_settings.svg" alt="settings" />
                  </Button>
                  <Text
                    className="md:ml-[0] ml-[22px] md:mt-0 mt-1.5 text-[14.33px] text-white-A700"
                    size="txtInterLight1433"
                  >
                    Helloo...
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[473px] md:mt-0 mt-[58px] text-[14.33px] text-white-A700"
                    size="txtInterLight1433"
                  >
                    Hi! how can i help you?
                  </Text>
                  <Button className="flex h-[34px] items-center justify-center md:ml-[0] ml-[15px] md:mt-0 mt-12 w-[34px]">
                    <Img
                      className="h-[17px]"
                      src="images/img_television.svg"
                      alt="television"
                    />
                  </Button>
                  <Line className="bg-blue_gray-900 md:h-1 h-11 mb-[31px] ml-7 md:ml-[0] md:mt-0 mt-[7px] rounded-sm w-1 md:w-full" />
                </div>
                <div className="flex flex-row items-center justify-start w-[10%] md:w-full">
                  <Button className="flex h-[34px] items-center justify-center w-[34px]">
                    <Img src="images/img_settings.svg" alt="settings_One" />
                  </Button>
                  <div className="bg-blue_gray-100 h-3.5 ml-[23px] my-2.5 rounded-[1px] w-[3%]"></div>
                  <div className="bg-blue_gray-100 h-2 ml-[3px] my-[13px] rounded-[1px] w-[3%]"></div>
                  <div className="bg-blue_gray-100 h-[11px] ml-[3px] my-[11px] rounded-[1px] w-[3%]"></div>
                  <div className="bg-blue_gray-100 h-1.5 ml-[3px] my-3.5 rounded-[1px] w-[3%]"></div>
                  <div className="bg-blue_gray-100 h-2.5 ml-[3px] my-3 rounded-[1px] w-[3%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col font-inter items-center justify-start w-full">
            <Input
              name="groupOne"
              placeholder="Type Something..."
              className="font-light leading-[normal] p-0 placeholder:text-white-A700 text-[14.33px] text-left w-full"
              wrapClassName="flex w-full"
              suffix={
                <div className="h-5 ml-3 w-5 bg-white-A700">
                  <Img
                    className="h-5 my-auto"
                    src="images/img_save.svg"
                    alt="save"
                  />
                </div>
              }
            ></Input>
          </div>
        </div>
        <div className="font-inter md:h-[588px] h-[636px] mb-[9px] mr-[101px] md:px-5 relative w-1/4 md:w-full">
          <Img
            className="h-[39px] ml-auto mt-0.5 rounded-[50%] w-[39px]"
            src="images/img_ellipse4.png"
            alt="ellipseFour"
          />
          <div className="absolute md:h-[579px] h-[636px] inset-[0] justify-center m-auto w-full">
            <div className="absolute bottom-[0] h-[579px] inset-x-[0] mx-auto w-full">
              <Text
                className="ml-[37px] mt-[113px] text-[14.33px] text-white-A700"
                size="txtInterLight1433"
              >
                Hi! how can i help you?
              </Text>
              <div className="absolute bg-gray-100_6c flex flex-col gap-11 h-full inset-[0] items-center justify-center m-auto p-[22px] sm:px-5 rounded-[10px] w-full">
                <div className="bg-gray-100_6c h-14 mt-[71px] rounded-[10px] w-full"></div>
                <div className="bg-gray-100_6c h-14 mb-[308px] rounded-[10px] w-full"></div>
              </div>
            </div>
            <div className="absolute flex flex-col items-center justify-start left-[6%] top-[0] w-[77%]">
              <div className="flex flex-col items-center justify-start w-full">
                <div className="flex flex-col gap-[46px] justify-start w-full">
                  <Button
                    className="cursor-pointer font-bold leading-[normal] min-w-[161px] md:ml-[0] ml-[99px] text-[15.33px] text-center"
                    shape="round"
                    color="gray_800_6c"
                    size="sm"
                  >
                    Logout
                  </Button>
                  <div className="flex flex-col items-start justify-start">
                    <Text
                      className="text-[14.33px] text-white-A700"
                      size="txtInterSemiBold1433"
                    >
                      History
                    </Text>
                    <Text
                      className="mt-[22px] text-[12.33px] text-white-A700"
                      size="txtInterLight1233"
                    >
                      Today
                    </Text>
                    <Text
                      className="mt-[85px] text-[12.33px] text-white-A700"
                      size="txtInterLight1233"
                    >
                      Today
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FrameOnePage;
