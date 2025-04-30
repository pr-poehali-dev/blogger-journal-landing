import React from 'react';
// Импорт несуществующего модуля, чтобы вызвать ошибку
import { NonExistentFeature } from 'non-existent-package';

const BuggyComponent: React.FC = () => {
  // Вызываем функцию из несуществующего модуля
  const data = NonExistentFeature();
  
  return (
    <div className="p-4 bg-red-100 rounded-lg">
      <h2 className="text-xl font-bold">Компонент с ошибкой</h2>
      <p>Этот компонент специально создан с ошибкой.</p>
      <div>{data}</div>
    </div>
  );
};

export default BuggyComponent;
