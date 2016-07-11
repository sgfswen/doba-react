import React from 'react';
import { Link } from 'react-router';

const renderCelebrityName = (celebs) => {
  let res = celebs.map((celeb, idx) => {
    return (
      <span key={idx}>
        {idx === 0 ? '' : ' / '}
        <Link to={'celebrity/' + celeb.id}>{celeb.name}</Link>
      </span>
    );
  });

  return res;
}

const Movie = (props) => {
  let m = props.data;
  let countries = m.countries
    ? ' / ' + m.countries.join(',')
    : '';
  let info = m.year + countries + ' / ' + m.genres.join(',');
  let backgroundImage = 'url(' + m.images.large +')';
  let directors = renderCelebrityName(m.directors);
  let casts = renderCelebrityName(m.casts);

  let title = m.title === m.original_title
  ? (
      <div className="subject-title">
        <div className="title-1">{m.title}</div>
      </div>
    )
  : (
      <div className="subject-title">
        <div className="title-1">{m.title}</div>
        <div className="title-2">{m.original_title}</div>
      </div>
    );
  let subjectTitle = null;
  let subjectTitleInline = null;
  props.inlineTitle
  ? subjectTitleInline = title
  : subjectTitle = title;


  return (
    <section className="subject-header">
      {subjectTitle}
      <section className="subject-hero">
        <div className="subject-hero-container">
          <img src={m.images.large} />
          <div className="subject-hero-info">
            {subjectTitleInline}
            <div className="rating">
              <span>{m.rating.average}</span>/10
            </div>
            <div>{info}</div>
            <div>导演： {directors}</div>
            <div>主演： {casts}</div>
            <a href={m.alt}>豆瓣</a>
          </div>
        </div>
        <div className="subject-hero-bg" style={{backgroundImage}}></div>
      </section>
    </section>
  );
}

export default Movie;