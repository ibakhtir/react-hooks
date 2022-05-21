import React from "react";
import PropTypes from "prop-types";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
  return (
    <CollapseWrapper title="Упражнение">
      <p className="mt-3">
        У вас есть компоненты Списка. Вам необходимо к каждому из них добавить
        порядковый номер, относительно того, как они располагаются на странице.
        Вы можете использовать как <code>React.Children.map</code> так и{" "}
        <code>React.Children.toArray</code>
      </p>
      <WrapperComponent>
        <Component />
        <Component />
        <Component />
      </WrapperComponent>
    </CollapseWrapper>
  );
};

const Component = () => {
  return <div>Компонент списка</div>;
};

const WrapperComponent = ({ children }) => {
  return (
    <ol>
      {React.Children.map(children, (child) => {
        return <li>{child}</li>;
      })}
    </ol>
  );
};

WrapperComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default ChildrenExercise;
