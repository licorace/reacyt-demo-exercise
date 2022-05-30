import styled from "styled-components"

export const BannerWrapper = styled.div`
  .banner {
    /* height: 270px; */
    /* background-color: red; */

    /* display: flex; */
    /* position: relative; */
  }
`

export const BannerControl = styled.div`
  .left {
    position: absolute;
    top: 60px;
    left: 700px;
    cursor: pointer;
    width: 37px;
    height: 53px;
    /* line-height: 63px; */
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .right {
    position: absolute;
    top: 60px;
    right: 700px;
    cursor: pointer;
    width: 37px;
    height: 53px;
    /* line-height: 63px; */
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
`

export const CerouselBallDots = styled.div`
  position: relative;
  bottom: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* 200px是圆点的 */
  width: 200px;
  /* 96px是模仿antdesign的 */
  /* width: 96px; */
  height: 20px;
  margin: 0 auto;

  /* 以下是自己写的圆点格式的面板指示器 */
  .tab-item {
    display: inline-block;

    width: 9px;
    height: 9px;
    border-radius: 50%;

    margin-left: 10px;
    margin-right: 10px;
    cursor: pointer;
    background-color: #fff;
    opacity: 0.3;
    transition: all 0.5s;

    &:hover,
    &.active {
      opacity: 1;
      background-color: #ff0066;
    }
  }

  /* 以下是模仿antdesign的 */
  /* .tab-item {
    display: inline-block;
    flex: 1;
    height: 3px;

    margin-left: 3px;
    margin-right: 3px;
    cursor: pointer;
    background-color: #fff;
    opacity: 0.3;
    transition: all 0.5s;

    &:hover {
      opacity: 1;
    }

    &.active {
      flex: 1.5;
      opacity: 1;
    }
  } */
`
