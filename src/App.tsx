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

  console.log(formData);

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
            <a href="-" className="href__beforeLine">{titles[0]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <a href="-" className="href__beforeLine">{titles[1]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <a href="-" className="href__beforeLine">{titles[2]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <a href="-" className="href__beforeLine">{titles[3]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <a href="-" className="href__beforeLine">{titles[4]}</a>
          </div>
        </div>
        <div className="container container__question">
          <div className="box">
            <h1 className="title">{titles[0]}</h1>
            <h4>Transportlīdzekļa veids</h4>
            <div className="input">
              <label htmlFor="car">
                <input
                  id="car"
                  name="vehicle"
                  type="radio"
                  value="car"
                  onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                />
                automašīna
              </label>
              <label htmlFor="bike">
                <input
                  id="bike"
                  name="vehicle"
                  type="radio"
                  value="bike"
                  onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                />
                motocikls
              </label>
              <label htmlFor="other">
                <input
                  id="other"
                  name="vehicle"
                  type="radio"
                  value="other"
                  onChange={(event) => setFormData({ ...formData, vehicleType: event.target.value })}
                />
                cits
              </label>
            </div>
            <div className="box">
              <h4>Transportlīdzekļa veids</h4>
              <input
                className="input"
                type="number"
                value={formData.vehiclePrice}
                onChange={(event) => setFormData({ ...formData, vehiclePrice: event.target.value })}
              />
            </div>
          </div>
          <div className="navigation__underline">
            <button onClick={() => {
              setActiveQuestion(activeQuestion + 1);
            }}
            >
              {'Tālāk>>'}
            </button>
          </div>
        </div>
      </section>
      )}
      {activeQuestion === 1 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">1</div>
            <a href="-" className="href__beforeLine">{titles[0]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <a href="-" className="href__beforeLine">{titles[1]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <a href="-" className="href__beforeLine">{titles[2]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <a href="-" className="href__beforeLine">{titles[3]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <a href="-" className="href__beforeLine">{titles[4]}</a>
          </div>
        </div>
        <div>
          <h1 className="title">{titles[1]}</h1>
          <label htmlFor="education">
            <select name="education" id="education" onChange={(event) => setFormData({ ...formData, education: event.target.value })}>
              <option value="empty"> </option>
              <option value="basic">Pamatizglītība</option>
              <option value="secondary">Vidējā</option>
              <option value="vocational">Arodizglītība</option>
              <option value="higher">Augstākā</option>
              <option value="college">Koledžas</option>
            </select>
          </label>
        </div>
        <div>
          <button onClick={() => {
            setActiveQuestion(activeQuestion - 1);
          }}
          >
            {'<<Atpakaļ'}
          </button>
          <button onClick={() => {
            setActiveQuestion(activeQuestion + 1);
          }}
          >
            {'Tālāk>>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 2 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">1</div>
            <a href="-" className="href__beforeLine">{titles[0]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <a href="-" className="href__beforeLine">{titles[1]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <a href="-" className="href__beforeLine">{titles[2]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <a href="-" className="href__beforeLine">{titles[3]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <a href="-" className="href__beforeLine">{titles[4]}</a>
          </div>
        </div>
        <div>
          <h1 className="title">{titles[2]}</h1>
          <input
            className="input"
            type="number"
            value={formData.salary}
            onChange={(event) => setFormData({ ...formData, salary: event.target.value })}
          />
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
        <div>
          <button onClick={() => {
            setActiveQuestion(activeQuestion - 1);
          }}
          >
            {'<<Atpakaļ'}
          </button>
          <button onClick={() => {
            setActiveQuestion(activeQuestion + 1);
          }}
          >
            {'Tālāk>>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 3 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">1</div>
            <a href="-" className="href__beforeLine">{titles[0]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <a href="-" className="href__beforeLine">{titles[1]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <a href="-" className="href__beforeLine">{titles[2]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <a href="-" className="href__beforeLine">{titles[3]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <a href="-" className="href__beforeLine">{titles[4]}</a>
          </div>
        </div>
        <div>
          <h1 className="title">{titles[3]}</h1>
          <form action="">
            <label htmlFor="w3review">
              Review of W3Schools:
              <textarea id="w3review" name="w3review" />
            </label>
          </form>
        </div>
        <div>
          <button onClick={() => {
            setActiveQuestion(activeQuestion - 1);
          }}
          >
            {'<<Atpakaļ'}
          </button>
          <button onClick={() => {
            setActiveQuestion(activeQuestion + 1);
          }}
          >
            {'Tālāk>>'}
          </button>
        </div>
      </section>
      )}
      {activeQuestion === 4 && (
      <section className="section section__question">
        <div className="navigation__beforeLine">
          <div className="column__beforeLine">
            <div className="circle__beforeLine active">1</div>
            <a href="-" className="href__beforeLine">{titles[0]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">2</div>
            <a href="-" className="href__beforeLine">{titles[1]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">3</div>
            <a href="-" className="href__beforeLine">{titles[2]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">4</div>
            <a href="-" className="href__beforeLine">{titles[3]}</a>
          </div>
          <div className="column__beforeLine">
            <div className="circle__beforeLine">5</div>
            <a href="-" className="href__beforeLine">{titles[4]}</a>
          </div>
        </div>
        <div>
          <h1 className="title">{titles[4]}</h1>
          <span>Kopsavilkums</span>
          <span>Transportlīdzekļa veids</span>
          <span>
            {formData.vehicleType}
          </span>
          <span>Transportlīdzekļa cena</span>
          <span>
            {formData.vehiclePrice}
            {' '}
            EUR
          </span>
          <span>Transportlīdzekļa izglītība</span>
          <span>
            {formData.education}
          </span>
          <span>Ikmēneša ienākumi pēc nodokļiem</span>
          <span>
            {formData.salary}
            {' '}
            EUR
          </span>
          <span>Citi ienākumi</span>
          {formData.stipend === true && <span>stipendija</span>}
          {formData.percent === true && <span>procenti</span>}
          {formData.pension === true && <span>pensija</span>}
          {formData.other === true && <span>citi</span>}
          <span>Papildus informācija</span>
        </div>
        <div>
          <button onClick={() => {
            setActiveQuestion(activeQuestion - 1);
          }}
          >
            {'<<Atpakaļ'}
          </button>
          <button onClick={() => {
            setActiveQuestion(activeQuestion + 1);
          }}
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
