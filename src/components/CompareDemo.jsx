import React, { Component } from "react";
import { Compare } from "./ui/compare";

class CompareDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: window.innerWidth < 768,
    };
  }

  updateWidth = () => {
    this.setState({ isMobile: window.innerWidth < 768 });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWidth);
  }

  render() {
    const { firstImage, secondImage, firstImageClassName, secondImageClassname, slideMode } = this.props;
    const { isMobile } = this.state;

    return (
      <div
        className="flex h-screen w-full"
        style={{
          justifyContent: isMobile ? "center" : "flex-start",
          alignItems: "center",
        }}
      >
        <Compare
          firstImage={require("../Data/design/" + `${firstImage}`)}
          secondImage={require("../Data/design/" + `${secondImage}`)}
          firstImageClassName={firstImageClassName}
          secondImageClassname={secondImageClassname}
          slideMode={slideMode}
        />
      </div>
    );
  }
}

export default CompareDemo;
