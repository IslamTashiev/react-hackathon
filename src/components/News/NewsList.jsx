import React from 'react'
import NewsItem from './NewsItem'
import "./style.css"
import news1 from "../../assets/images/news-1.svg";
import news2 from "../../assets/images/news-2.svg";
import news3 from "../../assets/images/news-3.svg";
import news4 from "../../assets/images/news-4.svg";
import mobilenews1 from "../../assets/images/mobilenews-1.svg";
import mobilenews2 from "../../assets/images/mobilenews-2.svg";
import mobilenews3 from "../../assets/images/mobilenews-3.svg";
import mobilenews4 from "../../assets/images/mobilenews-4.svg";

const items = [
  {
      id: 1,
      title: "Открытие нового магазина",
      subtitle: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
      image: news1,
      imagemobile: mobilenews1,
      data: "05 июня 2021"
  },
  {
    id: 2,
    title: "Работа в праздничные дни",
    subtitle: "Разнообразный и богатый опыт говорит нам, что консультация с широким активом требует от нас анализа анализа существующих паттернов поведения",
    image: news2,
    imagemobile: mobilenews2,
    data: "05 июня 2021"
},
  {
      id: 3,
      title: "Идейные соображения",
      subtitle: "Идейные соображения высшего порядка, а также семантический разбор внешних противодействий позволяет выполнить важные задания по разработке прогресса профессионального сообщества ",
      image: news3,
      imagemobile: mobilenews3,
      data: "05 июня 2021"
  },
  {
      id: 4,
      title: "Показатели успешности социально-экономического развития",
      subtitle: "Принимая во внимание показатели успешности, социально-экономическое развитие играет",
      image: news4,
      imagemobile: mobilenews4,
      data: "05 июня 2021"
  },

]

const NewsList = () => {
    return (
      <>
        <div className="news-mt">
      <div className="news__container">
      <div className="news__items">
      <NewsItem items={items}/>
      <NewsItem items={items}/>
      </div>
    </div>
  </div>
</>
)}


export default NewsList