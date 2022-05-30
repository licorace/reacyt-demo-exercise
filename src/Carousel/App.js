import React, { memo, useRef, useState } from "react"

import { Carousel } from "antd"

import { BannerWrapper, BannerControl, CerouselBallDots } from "./style"

import { LeftOutlined, RightOutlined } from "@ant-design/icons"

const contentStyle = {
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
}

const App = memo(() => {
  const onChange = (currentSlide) => {
    console.log(currentSlide)
  }

  const [currentIndex, setcurrentIndex] = useState(0)

  const handleItemClick = (index) => {
    bannerRef.current.goTo(index)
    setcurrentIndex(index)
  }

  const bannerRef = useRef()

  const titles = [1, 2, 3, 4]

  return (
    <BannerWrapper>
      <div className="banner">
        <Carousel dots={false} afterChange={onChange} ref={bannerRef}>
          <div>
            <h3 style={contentStyle}>1</h3>
          </div>
          <div>
            <h3 style={contentStyle}>2</h3>
          </div>
          <div>
            <h3 style={contentStyle}>3</h3>
          </div>
          <div>
            <h3 style={contentStyle}>4</h3>
          </div>
        </Carousel>
        <BannerControl>
          <div className=" left" onClick={(e) => bannerRef.current.prev()}>
            <LeftOutlined style={{ fontSize: "33px", color: "#ccc" }} />
          </div>
          <div className=" right" onClick={(e) => bannerRef.current.next()}>
            <RightOutlined style={{ fontSize: "33px", color: "#ccc" }} />
          </div>
        </BannerControl>
        <CerouselBallDots>
          {titles.map((item, index) => (
            <div
              key={item}
              className={"tab-item" + (index === currentIndex ? " active" : "")}
              onClick={() => handleItemClick(index)}
            >
              <span></span>
            </div>
          ))}
        </CerouselBallDots>
      </div>
    </BannerWrapper>
  )
})

export default App
