import { TextField } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { FC } from "react";

const CustomTextField = styled(TextField)({
  "& input:valid:focus  + div + fieldset": {
    borderWidth: 1,
    borderColor: "#5ea3cb",
  },
  "& input:valid:focus": {
    backgroundColor: "white",
  },
  "& input:invalid:focus + fieldset": {
    borderWidth: 1,
    borderColor: "#5ea3cb",
  },
  "& input:invalid:focus": {
    backgroundColor: "white",
  },
  "& .MuiFormHelperText-root": {
    marginLeft: 0,
  },
  "& .Mui-disabled": {
    backgroundColor: "#F3F6F9",
    color: "#212529",
  },
});

function firValue(
  val: string,
  precision: number | null,
  min: number | null,
  max: number | null,
  prefix: string = "",
  suffix: string = ""
) {
  let value = val.replace(prefix, "").replace(suffix, "");
  let result: string;
  const parts = value.split(".");
  let sign = value[0];
  let part_one = parts[0].replace(/\D/gi, "");
  if (parts.length > 1 && part_one === "") {
    part_one = "0";
  }
  let part_two = parts
    .filter((elm, i) => i !== 0)
    .join("")
    .replace(/\D/gi, "");
  if (part_two) {
    if (sign !== "-") {
      sign = "";
    }
    result = sign + part_one + "." + part_two;
  } else {
    if (sign !== "-") {
      sign = "";
    }
    if (parts.length === 2 && parts[1] === "") {
      result = sign + part_one + ".";
    } else {
      result = sign + part_one;
    }
  }
  if (Number.isInteger(precision) && precision !== null) {
    const fraction = result.split(".");
    const result_fixed = Number(result).toFixed(precision);
    const result_fixed_fraction = result_fixed.split(".");
    if (
      fraction.length > 1 &&
      fraction[1] !== "" &&
      fraction[1].length > precision
    ) {
      if (precision === 0) {
        result = String(result_fixed_fraction[0]);
      } else {
        result = result_fixed_fraction[0] + "." + result_fixed_fraction[1];
      }
    } else if (fraction.length > 1) {
      if (precision === 0) {
        result = String(result_fixed_fraction[0]);
      }
    }
  }

  if (max !== null) {
    if (Number(result) > max) {
      result = String(max);
    }
  }
  if (min !== null) {
    if (Number(result) < min) {
      result = String(min);
    }
  }
  return result;
}

interface NumberInputProps {
  onChange: any;
  value: number | string;
  onBlur?: any;
  name?: string;
  step?: number;
  precision?: number;
  max?: number;
  min?: number;
  length?: number;
  sx?: { [key: string]: string };
  inputStyle?: { [key: string]: string };
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
  prefix?: string;
  suffix?: string;
  "data-testid"?: string;
}

const NumberInput: FC<NumberInputProps> = ({ ...props }) => {
  return (
    <CustomTextField
      disabled={props.disabled === true}
      onChange={(e) => {
        const result = firValue(
          e.target.value,
          props.precision !== undefined ? props.precision : null,
          props.min !== undefined ? props.min : null,
          props.max !== undefined ? props.max : null,
          props.prefix,
          props.suffix
        );
        if (props.onChange) {
          props.onChange({ target: { value: result, name: props.name } });
        }
      }}
      onBlur={props.onBlur || null}
      name={props.name || ""}
      label=""
      value={
        String(props.value).length === 0
          ? props.value
          : (props.prefix ? props.prefix : "") +
            props.value +
            (props.suffix ? props.suffix : "")
      }
      size="small"
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        "data-testid": props["data-testid"],
        maxLength: props.length || 50,
        style: {
          padding: ".2rem .6rem",
          fontSize: ".875rem",
          height: "29px",
          ...props.inputStyle,
        },
      }}
      sx={{
        marginTop: "20px",
        width: "157px",
        ...props.sx,
      }}
      error={props.error}
      helperText={props.helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment
            position="end"
            sx={
              props.disabled === true
                ? { display: "none" }
                : { lineHeight: "14px" }
            }
          >
            <div>
              <div>
                <IconButton
                  onBlur={() => {
                    if (props.onBlur) {
                      props.onBlur({
                        target: { value: props.value, name: props.name },
                      });
                    }
                  }}
                  disabled={props.disabled === true}
                  onClick={(e) => {
                    e.stopPropagation();

                    if (props.step) {
                      if (props.onChange) {
                        const result = firValue(
                          String(Number(props.value) + props.step),
                          props.precision !== undefined
                            ? props.precision
                            : null,
                          props.min !== undefined ? props.min : null,
                          props.max !== undefined ? props.max : null,
                          props.prefix,
                          props.suffix
                        );
                        props.onChange({
                          target: {
                            value: result,
                            name: props.name,
                          },
                        });
                      }
                    } else {
                      if (props.onChange) {
                        const result = firValue(
                          String(Number(props.value) + 1),
                          props.precision !== undefined
                            ? props.precision
                            : null,
                          props.min !== undefined ? props.min : null,
                          props.max !== undefined ? props.max : null,
                          props.prefix,
                          props.suffix
                        );
                        props.onChange({
                          target: {
                            value: result,
                            name: props.name,
                          },
                        });
                      }
                    }
                  }}
                  size="small"
                  sx={{
                    width: "10px",
                    height: "10px",
                    margin: 0,
                    padding: "1px 4px !important",
                  }}
                >
                  <KeyboardArrowUpIcon sx={{ width: "18px", height: "18px" }} />
                </IconButton>
              </div>
              <div>
                <IconButton
                  onBlur={() => {
                    if (props.onBlur) {
                      props.onBlur({
                        target: { value: props.value, name: props.name },
                      });
                    }
                  }}
                  disabled={props.disabled === true}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (props.step) {
                      if (props.onChange) {
                        const result = firValue(
                          String(Number(props.value) - props.step),
                          props.precision !== undefined
                            ? props.precision
                            : null,
                          props.min !== undefined ? props.min : null,
                          props.max !== undefined ? props.max : null,
                          props.prefix,
                          props.suffix
                        );
                        props.onChange({
                          target: {
                            value: result,
                            name: props.name,
                          },
                        });
                      }
                    } else {
                      if (props.onChange) {
                        const result = firValue(
                          String(Number(props.value) - 1),
                          props.precision !== undefined
                            ? props.precision
                            : null,
                          props.min !== undefined ? props.min : null,
                          props.max !== undefined ? props.max : null,
                          props.prefix,
                          props.suffix
                        );
                        props.onChange({
                          target: {
                            value: result,
                            name: props.name,
                          },
                        });
                      }
                    }
                  }}
                  size="small"
                  sx={{
                    width: "10px",
                    height: "10px",
                    margin: 0,
                    padding: "1px 4px !important",
                  }}
                >
                  {" "}
                  <KeyboardArrowDownIcon
                    sx={{ width: "18px", height: "18px" }}
                  />
                </IconButton>
              </div>
            </div>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default NumberInput;
