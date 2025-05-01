import React from 'react';
// Намеренно импортируем несуществующий модуль с точным названием для воспроизведения ошибки
import { someFunction } from '@/non-existent-module.js';

const FailedModuleComponent: React.FC = () => {
  return (
    <div className="p-4 bg-red-100 rounded-lg">
      <h2 className="text-xl font-bold">Ошибка загрузки модуля</h2>
      <p>Этот компонент намеренно импортирует несуществующий модуль.</p>
      <button 
        onClick={() => someFunction()}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors mt-2"
      >
        Вызвать функцию
      </button>
    </div>
  );
};

export default FailedModuleComponent;