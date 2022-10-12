import React, { useRef, useEffect, ReactHTMLElement } from "react";
import { EditableElementProps } from "./EditableElement.types";
import { FC } from "react";

const EditableElement = (props: any) => {
  const { onChange } = props;
  const element = useRef<HTMLInputElement | null>(null);
  let elements: any = React.Children.toArray(props.children);
  if (elements.length > 1) {
    throw Error("Can't have more than one child");
  }
  const onMouseUp = (element: any) => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange) {
      onChange(value);
    }
  };
  useEffect(() => {
    const value = element.current?.value || element.current?.innerText;
    if (onChange) {
      onChange(value);
    }
  }, []);
  elements= React.cloneElement(elements[0], {
    contentEditable: true,
    suppressContentEditableWarning: true,
    ref: element,
    onKeyUp: onMouseUp
  });
  return elements;
};

export default EditableElement;