import React, { useState } from 'react';
import './App.scss';
import './styles/header.scss';
import './styles/questions.scss';
import './styles/footer.scss';
import Swedbank from './images/swedbank-logo.svg';
import Arrow from './images/arrow.png';
import Login from './images/login.png';
import Home from './images/home.png';
import Search from './images/search.png';
import Facebook from './images/facebook.png';
import Instagram from './images/instagram.png';
import Youtube from './images/youtube.png';
import Twitter from './images/twitter.png';

const titles = ['Līzinga pieteikums', 'Personas informācija', 'Ienākumi', 'Papildus', 'Apstiprinājums'];

type InitialFormData = {
  vehicleType: string;
  vehiclePrice: string;
  education: string;
  salary: string;
  stipend: boolean;
  percent: boolean;
  pension: boolean;
  other: boolean;
  info: string;
}

const initialFormData: InitialFormData = {
  vehicleType: '',
  vehiclePrice: '',
  education: '',
  salary: '',
  stipend: false,
  percent: false,
  pension: false,
  other: false,
  info: '',
};

const App = () => {
  const [formData, setFormData] = useState<InitialFormData>(initialFormData);
  const [activeQuestion, setActiveQuestion] = useState(0);

  const symbols = 500 - formData.info.length;

  return (
    <section className="section">
      <div className="topLine" />
      <div className="header">
        <div className="left__header">
          <img className="logo" src={Swedbank} alt="Swedbank logo" width="149px" />
          <div className="private">
            <span>Privātpersonām</span>
            <img src={Arrow} alt="v" width={16} />
          </div>
        </div>
        <div className="right__header">
          <div className="private">
            <span>LV</span>
            <img src={Arrow} alt="v" width={16} />
          </div>
          <span className="client">Kļūt par klientu</span>
          <div className="login">
            <img src={Login} alt="v" width={26} height={19.5} />
            <span className="client">Pievienoties</span>
          </div>
        </div>
      </div>
      <div className="navigation">
        <button className="home">
          <img src={Home} alt="Home" width={20} />
        </button>
        <button className="nav">
          Maksājumi, konti
        </button>
        <button className="nav">
          Kartes
        </button>
        <button className="nav nav__active">
          Kredīti, līzings
        </button>
        <button className="nav">
          Apdrošināšana
        </button>
        <button className="nav">
          Uzkrājumi, ieguldījumi
        </button>
        <button className="nav">
          Pensija
        </button>
        <button className="search">
          <img src={Search} alt="Search" width={20} />
        </button>
      </div>
      <section className="section section__question">
        <div className="container container__steps">
          <div className="step">
            <span className="step1">Sākumlapa</span>
            <span className="continue">▸</span>
            <span>Kredīti, līzings</span>
            <span className="continue">▸</span>
            <span className="step3">Auto līzings</span>
          </div>
          <h1 className="title">Auto līzings</h1>
        </div>
      </section>
      {activeQuestion === 0 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">1</div>
            <span
              onClick={() => { }}
              className="href__beforeLine"
            >
              {titles[0]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 1);
              }}
              className="href__beforeLine"
            >
              {titles[1]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 2);
              }}
              className="href__beforeLine"
            >
              {titles[2]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 3);
              }}
              className="href__beforeLine"
            >
              {titles[3]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 4);
              }}
              className="href__beforeLine"
            >
              {titles[4]}
            </span>
          </div>
        </div>
        <div className="container container__question">
          <h1 className="title__questions">{titles[0]}</h1>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__form">Transportlīdzekļa veids</h4>
              <h4 className="title__form title__form--star">*</h4>
              <button className="button__question">?</button>
            </div>
            <div className="box__inputs">
              <div className="input">
                <label htmlFor="car">
                  <input
                    id="car"
                    name="vehicle"
                    type="radio"
                    value="automašīna"
                    checked={formData.vehicleType === 'automašīna'}
                    onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                  />
                  automašīna
                </label>
                <label htmlFor="bike">
                  <input
                    id="bike"
                    name="vehicle"
                    type="radio"
                    value="motocikls"
                    checked={formData.vehicleType === 'motocikls'}
                    onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                  />
                  motocikls
                </label>
                <label htmlFor="other">
                  <input
                    id="other"
                    name="vehicle"
                    type="radio"
                    value="cits"
                    checked={formData.vehicleType === 'cits'}
                    onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                  />
                  cits
                </label>
              </div>
            </div>
          </div>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__form">Transportlīdzekļa cena</h4>
            </div>
            <div className="box__input">
              <input
                className="input__number"
                type="number"
                value={formData.vehiclePrice}
                onChange={(event) => setFormData({ ...formData, vehiclePrice: event.target.value })}
              />
            </div>
          </div>
        </div>
        <div className="navigation__underline">
          <button
            className="next"
            onClick={() => { setActiveQuestion(activeQuestion + 1); }}
          >
            {'Tālāk >>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 1 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">1</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 1); }}
              className="href__beforeLine"
            >
              {titles[0]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">2</div>
            <span
              onClick={() => { }}
              className="href__beforeLine"
            >
              {titles[1]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 1);
              }}
              className="href__beforeLine"
            >
              {titles[2]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 2);
              }}
              className="href__beforeLine"
            >
              {titles[3]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 3);
              }}
              className="href__beforeLine"
            >
              {titles[4]}
            </span>
          </div>
        </div>
        <div className="container container__question">
          <h1 className="title__questions">{titles[1]}</h1>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__form">Izglītība</h4>
            </div>
            <div className="box__input">
              <label htmlFor="education">
                <select
                  name="education"
                  id="education"
                  value={formData.education}
                  onChange={(event) => setFormData({ ...formData, education: event.target.value })}
                >
                  <option value="empty"> </option>
                  <option value="pamatizglītība">Pamatizglītība</option>
                  <option value="vidējā">Vidējā</option>
                  <option value="arodizglītība">Arodizglītība</option>
                  <option value="augstākā">Augstākā</option>
                  <option value="koledžas">Koledžas</option>
                </select>
              </label>
            </div>
          </div>
        </div>
        <div className="navigation__underline navigation__underline--second">
          <button
            className="prev"
            onClick={() => { setActiveQuestion(activeQuestion - 1); }}
          >
            {'<< Atpakaļ'}
          </button>
          <button
            className="next"
            onClick={() => { setActiveQuestion(activeQuestion + 1); }}
          >
            {'Tālāk >>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 2 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">1</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 2); }}
              className="href__beforeLine"
            >
              {titles[0]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">2</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 1); }}
              className="href__beforeLine"
            >
              {titles[1]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">3</div>
            <span
              onClick={() => { }}
              className="href__beforeLine"
            >
              {titles[2]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <span
              onClick={() => {
                setActiveQuestion(activeQuestion + 1);
              }}
              className="href__beforeLine"
            >
              {titles[3]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion + 2); }}
              className="href__beforeLine"
            >
              {titles[4]}
            </span>
          </div>
        </div>
        <div className="container container__question">
          <h1 className="title__questions">{titles[2]}</h1>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__form">Ikmēneša ienākumi pēc nodokļiem </h4>
              <h4 className="title__form title__form--star">*</h4>
              <button className="button__question">?</button>
            </div>
            <div className="box__input">
              <input
                className="input"
                type="number"
                value={formData.salary}
                onChange={(event) => setFormData({ ...formData, salary: event.target.value })}
              />
            </div>
          </div>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__form">Ikmēneša ienākumi pēc nodokļiem</h4>
            </div>
            <div className="box__input">
              <label className="checkbox" htmlFor="stipend">
                <input
                  type="checkbox"
                  id="stipend"
                  name="stipend"
                  value="stipend"
                  checked={formData.stipend}
                  onChange={() => setFormData(
                    { ...formData, stipend: !formData.stipend },
                  )}
                />
                stipendija
              </label>
              <label className="checkbox" htmlFor="percent">
                <input
                  type="checkbox"
                  id="percent"
                  name="percent"
                  value="percent"
                  checked={formData.percent}
                  onChange={() => setFormData(
                    { ...formData, percent: !formData.percent },
                  )}
                />
                procenti
              </label>
              <label className="checkbox" htmlFor="pension">
                <input
                  type="checkbox"
                  id="pension"
                  name="pension"
                  value="pension"
                  checked={formData.pension}
                  onChange={() => setFormData(
                    { ...formData, pension: !formData.pension },
                  )}
                />
                pensija
              </label>
              <label className="checkbox" htmlFor="other">
                <input
                  type="checkbox"
                  id="other"
                  name="other"
                  value="other"
                  checked={formData.other}
                  onChange={() => setFormData(
                    { ...formData, other: !formData.other },
                  )}
                />
                cits
              </label>
            </div>
          </div>

        </div>
        <div className="navigation__underline navigation__underline--second">
          <button
            className="prev"
            onClick={() => { setActiveQuestion(activeQuestion - 1); }}
          >
            {'<< Atpakaļ'}
          </button>
          <button
            className="next"
            onClick={() => { setActiveQuestion(activeQuestion + 1); }}
          >
            {'Tālāk >>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 3 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">1</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 3); }}
              className="href__beforeLine"
            >
              {titles[0]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">2</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 2); }}
              className="href__beforeLine"
            >
              {titles[1]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">3</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 1); }}
              className="href__beforeLine"
            >
              {titles[2]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">4</div>
            <span
              onClick={() => {

              }}
              className="href__beforeLine"
            >
              {titles[3]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion + 1); }}
              className="href__beforeLine"
            >
              {titles[4]}
            </span>
          </div>
        </div>
        <div className="container container__question">
          <h1 className="title__questions">{titles[3]}</h1>
          <div className="box__form">
            <div className="box__title">
              <h4 className="title__formArea">Ikmēneša ienākumi pēc nodokļiem</h4>
            </div>
            <div className="box_textArea">
              <label htmlFor="textArea">
                <textarea
                  className="textArea"
                  id="textArea"
                  name="info"
                  value={formData.info}
                  maxLength={500}
                  onChange={(event) => setFormData({ ...formData, info: event.target.value })}
                />
              </label>
              <h4 className="comment__formArea">
                Var pievienot vēl
                {' '}
                {symbols}
                {' '}
                simbolus
              </h4>
            </div>
          </div>
        </div>
        <div className="navigation__underline navigation__underline--second">
          <button
            className="prev"
            onClick={() => { setActiveQuestion(activeQuestion - 1); }}
          >
            {'<< Atpakaļ'}
          </button>
          <button
            className="next"
            onClick={() => { setActiveQuestion(activeQuestion + 1); }}
          >
            {'Tālāk >>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 4 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">1</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 4); }}
              className="href__beforeLine"
            >
              {titles[0]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">2</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 3); }}
              className="href__beforeLine"
            >
              {titles[1]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">3</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 2); }}
              className="href__beforeLine"
            >
              {titles[2]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine done">4</div>
            <span
              onClick={() => { setActiveQuestion(activeQuestion - 1); }}
              className="href__beforeLine"
            >
              {titles[3]}
            </span>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">5</div>
            <span
              onClick={() => { }}
              className="href__beforeLine"
            >
              {titles[4]}
            </span>
          </div>
        </div>
        <div className="container container__question">
          <h1 className="title__questions">{titles[4]}</h1>
          <div className="summery__row">
            <h4 className="summery__comment">Transportlīdzekļa veids</h4>
            <div className="summery__result">
              <span>
                {formData.vehicleType}
              </span>
            </div>
          </div>
          <div className="summery__row">
            <h4 className="summery__comment">Transportlīdzekļa cena</h4>
            <div className="summery__result">
              <span>
                {formData.vehiclePrice}
                {' '}
                EUR
              </span>
            </div>
          </div>
          <div className="summery__row">
            <h4 className="summery__comment">Izglītība</h4>
            <div className="summery__result">
              <span>
                {formData.education}
              </span>
            </div>
          </div>
          <div className="summery__row">
            <h4 className="summery__comment">Ikmēneša ienākumi pēc nodokļu nomaksas</h4>
            <div className="summery__result">
              <span>
                {formData.salary}
                {' '}
                EUR
              </span>
            </div>
          </div>
          <div className="summery__row">
            <h4 className="summery__comment">Citi ienākumi</h4>
            <div className="summery__result">
              {formData.stipend && <span>stipendija</span>}
              {formData.percent && <span>procenti</span>}
              {formData.pension && <span>pensija</span>}
              {formData.other && <span>citi</span>}
            </div>
          </div>
          <div className="summery__row">
            <h4 className="summery__comment">Papildus informācija</h4>
            <div className="summery__result">
              <span>
                {formData.info}
              </span>
            </div>
          </div>
        </div>
        <div className="navigation__underline navigation__underline--second">
          <button
            className="prev"
            onClick={() => { setActiveQuestion(activeQuestion - 1); }}
          >
            {'<< Atpakaļ'}
          </button>
          <button
            className="next"
            onClick={() => { setActiveQuestion(activeQuestion + 1); }}
          >
            Nosūtīt pieteikumu
          </button>
        </div>
      </section>
      )}
      <div className="underLine" />
      <div className="footer">
        <div className="social">
          <a href="https://www.facebook.com/SwedbankLatvia" target="_blank" rel="noreferrer">
            <img src={Facebook} alt="Facebook" height={20} />
          </a>
          <a href="https://www.instagram.com/swedbanklatvia/" target="_blank" rel="noreferrer">
            <img src={Instagram} alt="Instagram" height={20} />
          </a>
          <a href="https://www.youtube.com/channel/UC4UO2MygD8EGObThXuLBbtw/videos" target="_blank" rel="noreferrer">
            <img src={Youtube} alt="Youtube" height={20} />
          </a>
          <a href="https://twitter.com/swedbanklatvia" target="_blank" rel="noreferrer">
            <img src={Twitter} alt="Twitter" height={20} />
          </a>
        </div>
        <p className="sign">
          {`Jūs atrodaties Swedbank internetbankā, kurā tiek piedāvāti "Swedbank" AS, "Swedbank Līzings" SIA, "Swedbank
        Atklātais Pensiju Fonds" AS, "Swedbank Ieguldījumu Pārvaldes Sabiedrība" AS, "Swedbank P&C Insurance" AS
        Latvijas filiāle, "Swedbank Life Insurance" SE Latvijas filiāle finanšu pakalpojumi. Lūdzam Jūs uzmanīgi
        iepazīties ar pakalpojumu noteikumiem pirms attiecīgā pakalpojuma izvēles un līguma noslēgšanas.`}
        </p>
      </div>
    </section>
  );
};

export default App;
