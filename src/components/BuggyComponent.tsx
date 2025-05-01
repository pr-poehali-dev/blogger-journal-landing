import React, { useState, useEffect } from 'react';

const BuggyComponent: React.FC = () => {
  const [data, setData] = useState<any>(undefined);
  
  // Этот код намеренно вызовет ошибку "Cannot read property of undefined"
  useEffect(() => {
    // Попытка обратиться к свойству несуществующего объекта
    try {
      console.log(data.user.name); // Здесь возникнет ошибка TypeError
    } catch (error) {
      console.error("Произошла ошибка:", error);
      // Не перехватываем ошибку, чтобы она отобразилась в консоли
      throw new Error("Cannot read property 'name' of undefined");
    }
  }, []);

  return (
    <div className="buggy-container my-8">
      <h2 className="buggy-title text-xl font-bold mb-4">Компонент с ошибкой доступа к свойству</h2>
      
      {/* Блок с ошибкой переполнения */}
      <div className="overflow-box h-20 bg-gray-100 p-4 mb-4">
        <p>Этот текст должен быть виден полностью, но из-за ошибки CSS он обрезается и не имеет полос прокрутки.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
      
      {/* Кнопка, которая вызовет ошибку при клике */}
      <button 
        className="bg-red-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => {
          // Вызываем ту же ошибку, но уже при клике на кнопку
          console.log(data.items[0].title);
        }}
      >
        Нажми меня, чтобы вызвать ошибку
      </button>
      
      {/* Намеренно обращаемся к свойству undefined */}
      <div>
        {data && data.user ? (
          <p>Имя пользователя: {data.user.name}</p>
        ) : (
          <p>Данные загружаются...</p>
        )}
      </div>
      
      {/* Блок с проблемой выравнивания */}
      <div className="alignment-issue flex my-4">
        <span className="mr-1">Этот</span>
        <span className="mr-1">текст</span>
        <span className="mr-1">имеет</span>
        <span className="mr-1">проблемы</span>
        <span className="mr-1">с</span>
        <span>выравниванием</span>
      </div>
      
      {/* Блок с проблемой контрастности */}
      <div className="contrast-issue bg-gray-200 p-4">
        <p className="text-gray-300">Этот текст плохо виден из-за проблем с контрастностью</p>
      </div>
    </div>
  );
};

export default BuggyComponent;