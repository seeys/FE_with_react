import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { debounce } from "underscore";

const Draggable = ({ children, handleRef, onMove, x = 0, y = 0 }) => {
  const dragRef = useRef(null);
  const initX = useRef(0);
  const initY = useRef(0);
  const [position, setPosition] = useState({ x, y });

  const Move = useMemo(() => debounce((x, y) => onMove(x, y), 500), [onMove]);

  const onMouseMove = useCallback(
    (event) => {
      setPosition({
        x: event.clientX - initX.current,
        y: event.clientY - initY.current,
      });
      Move(event.clientX - initX.current, event.clientY - initY.current);
    },
    [Move]
  );

  const removeEvents = useCallback(() => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", removeEvents);
    document.body.removeEventListener("mouseleave", removeEvents);
  }, [onMouseMove]);

  const onMouseDown = useCallback(
    (event) => {
      const { left, top } = dragRef.current.getBoundingClientRect();
      initX.current = event.clientX - left;
      initY.current = event.clientY - top;
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", removeEvents);
      document.body.addEventListener("mouseleave", removeEvents);
    },
    [onMouseMove, removeEvents]
  );

  useEffect(() => {
    const handle = handleRef.current;
    handle.addEventListener("mousedown", onMouseDown);
    return () => {
      handle.removeEventListener("mousedown", onMouseDown);
      Move.cancel();
    };
  }, [handleRef, onMouseDown, Move]);
  return (
    <div
      ref={dragRef}
      className="draggable"
      style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
    >
      {children}
    </div>
  );
};

export default Draggable;
