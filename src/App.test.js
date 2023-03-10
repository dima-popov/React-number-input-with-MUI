import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Input", () => {
  test("check number input field on integers", async () => {
    render(<App />);
    const input = screen.getByTestId("nmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "-" } });
    expect(input).toHaveValue("-");
    fireEvent.change(input, { target: { value: "-1" } });
    expect(input).toHaveValue("-1");
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input).toHaveValue("1");
    fireEvent.change(input, { target: { value: "+1" } });
    expect(input).toHaveValue("1");
    fireEvent.change(input, { target: { value: "11" } });
    expect(input).toHaveValue("11");
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input).toHaveValue("1234");
    fireEvent.change(input, { target: { value: "1-" } });
    expect(input).toHaveValue("1");
  });

  test("check number input field on float numbers", async () => {
    render(<App />);
    const input = screen.getByTestId("nmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "." } });
    expect(input).toHaveValue("0.");
    fireEvent.change(input, { target: { value: "0.." } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "0.1" } });
    expect(input).toHaveValue("0.1");
    fireEvent.change(input, { target: { value: "-0.1" } });
    expect(input).toHaveValue("-0.1");
    fireEvent.change(input, { target: { value: "-0.1234" } });
    expect(input).toHaveValue("-0.1234");
    fireEvent.change(input, { target: { value: "-0.12-34." } });
    expect(input).toHaveValue("-0.1234");
    fireEvent.change(input, { target: { value: "1.111111111111111e+94" } });
    expect(input).toHaveValue("1.11111111111111194");
  });

  test("check number input field on letters and symbols", async () => {
    render(<App />);
    const input = screen.getByTestId("nmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "a" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "?%.^)(" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "?" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "+" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "e" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "," } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "#!'" } });
    expect(input).toHaveValue("");
  });

  ////

  test("check number input field with prefix $ on integers", async () => {
    render(<App />);
    const input = screen.getByTestId("prefnmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "-" } });
    expect(input).toHaveValue("$-");
    fireEvent.change(input, { target: { value: "-1" } });
    expect(input).toHaveValue("$-1");
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveValue("$0");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input).toHaveValue("$1");
    fireEvent.change(input, { target: { value: "+1" } });
    expect(input).toHaveValue("$1");
    fireEvent.change(input, { target: { value: "11" } });
    expect(input).toHaveValue("$11");
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input).toHaveValue("$1234");
    fireEvent.change(input, { target: { value: "1-" } });
    expect(input).toHaveValue("$1");
  });

  test("check number input field with prefix $ on float numbers", async () => {
    render(<App />);
    const input = screen.getByTestId("prefnmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "." } });
    expect(input).toHaveValue("$0.");
    fireEvent.change(input, { target: { value: "0.." } });
    expect(input).toHaveValue("$0");
    fireEvent.change(input, { target: { value: "0.1" } });
    expect(input).toHaveValue("$0.1");
    fireEvent.change(input, { target: { value: "-0.1" } });
    expect(input).toHaveValue("$-0.1");
    fireEvent.change(input, { target: { value: "-0.1234" } });
    expect(input).toHaveValue("$-0.1234");
    fireEvent.change(input, { target: { value: "-0.12-34." } });
    expect(input).toHaveValue("$-0.1234");
    fireEvent.change(input, { target: { value: "1.111111111111111e+94" } });
    expect(input).toHaveValue("$1.11111111111111194");
  });

  test("check number input field with prefix $ on letters and symbols", async () => {
    render(<App />);
    const input = screen.getByTestId("prefnmbinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "a" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "?%.^)(" } });
    expect(input).toHaveValue("$0");
    fireEvent.change(input, { target: { value: "?" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "+" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "e" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "," } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "#!'" } });
    expect(input).toHaveValue("");
  });

  ////

  test("check positive integer input field on integers", async () => {
    render(<App />);
    const input = screen.getByTestId("intinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "-" } });
    expect(input).toHaveValue("-");
    fireEvent.change(input, { target: { value: "-." } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "-1" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input).toHaveValue("1");
    fireEvent.change(input, { target: { value: "+1" } });
    expect(input).toHaveValue("1");
    fireEvent.change(input, { target: { value: "11" } });
    expect(input).toHaveValue("11");
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input).toHaveValue("1234");
    fireEvent.change(input, { target: { value: "1-" } });
    expect(input).toHaveValue("1");
  });

  test("check positive integer input field on float numbers", async () => {
    render(<App />);
    const input = screen.getByTestId("intinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "." } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "0.." } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "0.1" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "-0.1" } });
    expect(input).toHaveValue("-0");
    fireEvent.change(input, { target: { value: "-0.1234" } });
    expect(input).toHaveValue("-0");
    fireEvent.change(input, { target: { value: "-0.12-34." } });
    expect(input).toHaveValue("-0");
    fireEvent.change(input, { target: { value: "1.111111111111111e+94" } });
    expect(input).toHaveValue("1");
  });

  test("check positive integer input field on letters and symbols", async () => {
    render(<App />);
    const input = screen.getByTestId("intinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "a" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "?%.^)(" } });
    expect(input).toHaveValue("0");
    fireEvent.change(input, { target: { value: "?" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "+" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "e" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "," } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "#!'" } });
    expect(input).toHaveValue("");
  });

  test("check positive integer input with suffix % field on integers", async () => {
    render(<App />);
    const input = screen.getByTestId("suffintinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "-" } });
    expect(input).toHaveValue("-%");
    fireEvent.change(input, { target: { value: "-." } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "-1" } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "0" } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "1" } });
    expect(input).toHaveValue("1%");
    fireEvent.change(input, { target: { value: "+1" } });
    expect(input).toHaveValue("1%");
    fireEvent.change(input, { target: { value: "11" } });
    expect(input).toHaveValue("11%");
    fireEvent.change(input, { target: { value: "1234" } });
    expect(input).toHaveValue("1234%");
    fireEvent.change(input, { target: { value: "1-" } });
    expect(input).toHaveValue("1%");
  });

  test("check positive integer input with suffix % field on float numbers", async () => {
    render(<App />);
    const input = screen.getByTestId("suffintinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "." } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "0.." } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "0.1" } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "-0.1" } });
    expect(input).toHaveValue("-0%");
    fireEvent.change(input, { target: { value: "-0.1234" } });
    expect(input).toHaveValue("-0%");
    fireEvent.change(input, { target: { value: "-0.12-34." } });
    expect(input).toHaveValue("-0%");
    fireEvent.change(input, { target: { value: "1.111111111111111e+94" } });
    expect(input).toHaveValue("1%");
  });

  test("check positive integer input with suffix % field on letters and symbols", async () => {
    render(<App />);
    const input = screen.getByTestId("suffintinput");
    expect(input).toBeInTheDocument();
    fireEvent.change(input, { target: { value: "a" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "abc" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "?%.^)(" } });
    expect(input).toHaveValue("0%");
    fireEvent.change(input, { target: { value: "?" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "+" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "e" } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "," } });
    expect(input).toHaveValue("");
    fireEvent.change(input, { target: { value: "#!'" } });
    expect(input).toHaveValue("");
  });
});
