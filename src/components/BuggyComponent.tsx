import React, { useState } from 'react';

const BuggyComponent: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div className="buggy-container my-8">
      <h2 className="text-xl font-bold mb-4">Компонент с ошибками (исправленный)</h2>
      
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          // Теперь кнопка просто увеличивает счетчик, а не вызывает ошибку
          setCount((prev) => prev + 1);
        }}
      >
        Нажми меня (счётчик: {count})
      </button>
      
      {/* Исправлен блок с переполнением - добавлен scroll */}
      <div className="overflow-auto h-20 my-4 border border-gray-300">
        <p>Этот текст теперь полностью виден благодаря полосе прокрутки.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      {/* Исправлен блок с проблемой контрастности */}
      <div className="bg-gray-200 text-gray-700 p-4 my-4">
        <p>Этот текст теперь хорошо виден благодаря улучшенному контрасту</p>
      </div>
    </div>
  );
};

export default BuggyComponent;