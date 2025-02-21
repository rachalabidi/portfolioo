import React, { Component } from "react";
import { PinContainer } from "./ui/3d-pin";

class AnimatedPinDemo extends Component {
  render() {
    const { title, href, h3Text, spanText, imageSrc } = this.props; // Destructure props

    return (
      <div className=" h-[40rem] w-full  flex">
        <PinContainer title={title} href={href}>
          <div className=" cw flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ">
            <h3 className="max-w-xs !pb-2 !mt-3 font-bold text-base text-slate-100">
              {h3Text}
            </h3>
            <div className="text-base !m-0 !p-0 font-normal ">
              <span className="text-white">{spanText}</span>
            </div>
            <div className="flex flex-1 w-4/5 rounded-lg mt-4 ">
              <img
               src={require('./'+`${imageSrc}`)}
                alt={h3Text} // Set alt text dynamically based on h3Text
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </PinContainer>
      </div>
    );
  }
}

export default AnimatedPinDemo;
