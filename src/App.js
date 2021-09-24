import React, {useEffect, useState} from 'react';
import s from './appStyle.module.css';
import Progress from "./module/progress/Progress";
import ContentPage from "./module/content/ContentPage";

const App = () => {

  const [progressElements, setProgressElement] = useState([
    {id : 1, value : 'Категория', status : false,},
    {id : 2, value : 'Описание', status : false,},
    {id : 3, value : 'Цена', status : false,},
    {id : 4, value : 'Фотографии', status : false,},
    {id : 5, value : 'Местоположение', status : false,},
    {id : 6, value : 'Контакты', status : false,},
  ])

  const handleProgressElement = (value, status) => setProgressElement(progressElements.map(el =>{
    if(el.value === value) el.status = status
    return el
  }))

  return (
    <div className={s.wrapper}>
      <Progress classes={s.progress__bar} progress={progressElements}/>
      <div className={s.content}>
        <h1 className={s.title}>Новое объявление</h1>
        <ContentPage handleProgressElement={handleProgressElement}/>
      </div>
    </div>
  );
}

export default App;
