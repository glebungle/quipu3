import './Gallery.css';

function App() {
  const cards = [
    { imgSrc: process.env.PUBLIC_URL + '/후루룹.jpg', altText: '후루룹 농담곰', title: '후루룹 농담곰', description: '후루룹~' },
    { imgSrc: process.env.PUBLIC_URL + '/눈물.jpg', altText: '우는 농담곰', title: '우는 농담곰', description: '울지마' },
    { imgSrc: process.env.PUBLIC_URL + '/삐뚤.jpg', altText: '삐뚤어진 농담곰', title: '삐뚤어진 농담곰', description: '. . 3' },
    { imgSrc: process.env.PUBLIC_URL + '/선글라스.jpg', altText: '선글라스 농담곰', title: '선글라스 농담곰', description: '간zㅣ남' },
    { imgSrc: process.env.PUBLIC_URL + '/드러누워.jpg', altText: '드러누운 농담곰', title: '드러누운 농담곰', description: '힘드러' },
    { imgSrc: process.env.PUBLIC_URL + '/네다리.jpg', altText: '네다리 농담곰', title: '네다리 농담곰', description: '?' },
    { imgSrc: process.env.PUBLIC_URL + '/숨참아.jpeg', altText: '숨 참는 농담곰', title: '숨 참는 농담곰', description: '~할때까지 숨 참을게요' },
    { imgSrc: process.env.PUBLIC_URL + '/하트.png', altText: '하트 농담곰', title: '하트 농담곰', description: '❤️' }
  ];

  return (
    <div className="card-container">
      <div className="logo">
          <h1>&#128149;농담곰&#128149;</h1>
      </div>
          {cards.map((card, index) => (
            <Card
              key={index}
              imgSrc={card.imgSrc}
              altText={card.altText}
              title={card.title}
              description={card.description}
            />
          ))}
    </div>
  );
}

function Card({ imgSrc, altText, title, description }) {
  return (
    <div className="card">
      <img src={imgSrc} alt={altText} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default App;
