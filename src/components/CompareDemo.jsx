import React, { Component } from "react";
import { Compare } from "./ui/compare";


class CompareDemo extends Component {
  render() {
    const {
      firstImage,
      secondImage,
      firstImageClassName,
      secondImageClassname,
      className,
      slideMode,
    } = this.props;

    return (
      <Compare
        firstImage={require('../Data/design/'+`${firstImage}`)}
        secondImage={require('../Data/design/'+`${secondImage}`)}
        firstImageClassName={firstImageClassName}
        secondImageClassname={secondImageClassname}
        className=""
        style={{
          width: '200px  !important',
          height: '200px !important',
        }}
        slideMode={slideMode}
      />
    );
  }
}

export default CompareDemo;
