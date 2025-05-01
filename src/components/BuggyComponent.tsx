import React, { useState } from 'react';

const BuggyComponent: React.FC = () => {
  const [isError, setIsError] = useState(false);
  
  const handleClick = () => {
    setIsError(true);
  };
  
  if (isError) {
    throw new Error("Это намеренно созданная ошибка для демонстрации");
  }
  
  return (
    <div className="p-4 my-4 bg-red-100 rounded-lg text-center">
      <h2 className="text-xl font-bold">Тестирование обработки ошибок</h2>
      <p className="my-2">Нажмите кнопку, чтобы вызвать ошибку рендеринга:</p>
      <button 
        onClick={handleClick}
        className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
      >
        Вызвать ошибку
      </button>
    </div>
  );
};

export default BuggyComponent;
