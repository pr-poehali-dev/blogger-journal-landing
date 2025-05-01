import React, { useEffect, useState } from 'react';
// Импортируем несуществующий пакет, чтобы вызвать ошибку
import { nonExistentFunction } from './non-existent-package';

const BuggyComponent: React.FC = () => {
  const [error, setError] = useState<boolean>(false);
  
  // Используем несуществующую функцию, чтобы вызвать ошибку
  useEffect(() => {
    nonExistentFunction();
  }, []);
  
  return (
    <div className="buggy-container my-8">
      <h2 className="text-xl font-bold mb-4">Компонент с ошибками</h2>
      
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          // Вызываем ошибку при клике
          throw new Error('Это намеренно вызванная ошибка!');
        }}
      >
        Нажми, чтобы вызвать ошибку
      </button>
      
      {/* Блок с ошибкой переполнения */}
      <div className="overflow-hidden h-20 my-4 border border-gray-300">
        <p>Этот текст должен быть виден полностью, но из-за ошибки CSS он обрезается и не имеет полос прокрутки.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      {/* Блок с проблемой контрастности */}
      <div className="bg-gray-200 text-gray-300 p-4 my-4">
        <p>Этот текст плохо виден из-за проблем с контрастностью</p>
      </div>
    </div>
  );
};

export default BuggyComponent;