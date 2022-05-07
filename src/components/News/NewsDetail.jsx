import React, { useContext, useEffect } from "react";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import NewsImg from "../../assets/images/news-img.svg";
import NewsMobile from "../../assets/images/NewsMobile.svg";
import "./style.css";
import { useParams } from "react-router-dom";
import { appContext } from "../../context/appContext";

const NewsDetail = () => {
  const { newsId } = useParams();

  const { getDetailNews, newsDetail } = useContext(appContext);

  useEffect(() => {
    getDetailNews(newsId);
  }, []);

  return (
    <div>
      <div className='container'>
        <h1 className='title__name-detail'>{newsDetail.title}</h1>
        <div className='detail-news'>
          <div className='detail-info'>
            <p className='detail-subtitle1'>{newsDetail.subtitle}</p>
            <h2 className='detail-title'>Бонусы и акции в честь открытия </h2>
            <p className='detail-subtitle2'>
              А ещё явные признаки победы институционализации освещают
              чрезвычайно интересные особенности картины в целом, однако
              конкретные выводы, разумеется, превращены в посмешище, хотя само
              их существование приносит несомненную пользу обществу. Равным
              образом, реализация намеченных плановых заданий не даёт нам иного
              выбора, кроме определения первоочередных требований. Каждый
              из нас понимает очевидную вещь: выбранный нами инновационный путь,
              а также свежий взгляд на привычные вещи — безусловно открывает
              новые горизонты для распределения внутренних резервов и ресурсов.
              Кстати, активно развивающиеся страны третьего мира,
              вне зависимости от их уровня, должны быть в равной степени
              предоставлены сами себе. Высокий уровень вовлечения представителей
              целевой аудитории является чётким доказательством простого факта:
              высококачественный прототип будущего проекта обеспечивает
              актуальность переосмысления внешнеэкономических политик.
              Противоположная точка зрения подразумевает, что сделанные на базе
              интернет-аналитики выводы могут быть разоблачены. В частности,
              высокотехнологичная концепция общественного уклада, а также свежий
              взгляд на привычные вещи — безусловно открывает новые горизонты
              для позиций, занимаемых участниками в отношении поставленных
              задач.
            </p>
          </div>
          <div className='detail-img'>
            <img className='newsimg' src={newsDetail.image} />
            <img className='mobileImg' src={NewsMobile} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
