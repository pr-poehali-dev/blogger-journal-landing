import React from 'react';

const BuggyComponent: React.FC = () => {
  return (
    <div className="buggy-container my-8">
      <h2 className="buggy-title">Компонент с CSS-ошибками</h2>
      
      {/* Блок с ошибкой переполнения */}
      <div className="overflow-box">
        <p>Этот текст должен быть виден полностью, но из-за ошибки CSS он обрезается и не имеет полос прокрутки.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      {/* Блок с проблемой наложения */}
      <div className="position-issue">
        <div className="box box1">Блок 1</div>
        <div className="box box2">Блок 2</div>
        <div className="box box3">Блок 3</div>
      </div>
      
      {/* Блок с проблемой выравнивания */}
      <div className="alignment-issue">
        <span>Этот</span>
        <span>текст</span>
        <span>имеет</span>
        <span>проблемы</span>
        <span>с</span>
        <span>выравниванием</span>
      </div>
      
      {/* Блок с проблемой контрастности */}
      <div className="contrast-issue">
        <p>Этот текст плохо виден из-за проблем с контрастностью</p>
      </div>
    </div>
  );
};

export default BuggyComponent;
