import React from 'react';
// Намеренно импортируем несуществующий модуль
import { someFunction } from 'non-existent-module';

const ErrorComponent: React.FC = () => {
  return (
    <div className="p-4 bg-yellow-100 rounded-lg">
      <h2 className="text-xl font-bold">Ошибка загрузки модуля</h2>
      <p>Этот компонент пытается использовать несуществующий модуль.</p>
      <button 
        onClick={() => someFunction()}
        className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors mt-2"
      >
        Вызвать функцию из несуществующего модуля
      </button>
    </div>
  );
};

export default ErrorComponent;