import React, { useState } from "react";
import {
  StyleBlockInput,
  Heading,
  StyleBlock,
  ValueAdjusterInput,
} from "../../../";

const Dimension = () => {
  const [isChainActive, setIsChainActive] = useState(false);

  const chainHandler = () => {
    setIsChainActive((prev) => !prev);
  };

  return (
    <>
      <StyleBlock>
        <StyleBlockInput>
          <div className="w-full">
            <ValueAdjusterInput
              className={"mb-0 px-0"}
              label={"Width"}
              inputName={"width"}
              propertyName={"width"}
            />
          </div>
          <div className="w-full">
            <ValueAdjusterInput
              className={"mb-0 px-0"}
              label={"Height"}
              inputName={"height"}
              propertyName={"height"}
            />
          </div>
        </StyleBlockInput>
      </StyleBlock>

      <StyleBlock>
        <Heading
          heading={"Spaces"}
          isChainIcon={true}
          isChainActive={isChainActive}
          chainHandler={chainHandler}
        />

        {isChainActive ? (
          <div className="w-[45%]">Slider</div>
        ) : (
          <>
            <div className="flex items-center gap-5">
              <ValueAdjusterInput
                propertyName={"padding-top"}
                label={"Top"}
                className={"mb-0 px-0"}
              />
              <ValueAdjusterInput
                propertyName={"padding-right"}
                label={"Right"}
                className={"mb-0 px-0"}
              />
            </div>
            <div className="flex items-center gap-5">
              <ValueAdjusterInput
                propertyName={"padding-left"}
                label={"Left"}
                className={"mb-0 px-0"}
              />
              <ValueAdjusterInput
                propertyName={"padding-bottom"}
                label={"Bottom"}
                className={"mb-0 px-0"}
              />
            </div>
          </>
        )}
      </StyleBlock>
    </>
  );
};

export default Dimension;
