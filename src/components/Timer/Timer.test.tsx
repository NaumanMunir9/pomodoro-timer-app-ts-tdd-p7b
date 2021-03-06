import React from "react";
import { mount, shallow } from "enzyme";
import Timer from "./Timer";

describe("Timer Component", () => {
  let container: any;

  beforeEach(() => (container = shallow(<Timer />)));

  it("should render a div", () => {
    expect(container.find("div").length).toEqual(6);
  });

  it("should render instances of TimerButton component", () => {
    expect(container.find("TimerButton").length).toBeGreaterThanOrEqual(1);
  });
});

describe("Mounted Timer", () => {
  let container: any;

  beforeEach(() => (container = mount(<Timer />)));

  it("invokes startTimer when the start button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "startTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".start-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it("invokes stopTimer when the stop button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "stopTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".stop-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it("invokes resetTimer when the reset button is clicked", () => {
    const spy = jest.spyOn(container.instance(), "resetTimer");
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find(".reset-timer").first().simulate("click");
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it("should change isOn state to true when the start button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".start-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
  });

  it("should change isOn state to false when the stop button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".stop-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
  });

  it("should change isOn state to false when the reset button is clicked", () => {
    container.instance().forceUpdate();
    container.find(".stop-timer").first().simulate("click");
    expect(container.instance().state.isOn).toEqual(false);
    expect(container.instance().state.minutes).toEqual(25);
    expect(container.instance().state.seconds).toEqual(0);
  });
});
