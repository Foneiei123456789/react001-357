import { useState } from "react";

export default function App() {
  const [Level, setLevel] = useState(0);
  const ajo = () => {
    if (Level >= 150) {
      return "https://f.ptcdn.info/980/000/000/1357556425-tumblrmbfy-o.gif";
    }else if (Level >= 100) {
      return "https://api3.csmju.com/images/personnels/profile-1662144873.png";
    }else if (Level >= 50) {
      return " https://medias.thansettakij.com/uploads/images/contents/w1024/2024/09/ZSKOw1rn7VWwiOhcWccI.webp?x-image-process=style/lg-webp"
    }
    return "https://news.thaipbs.or.th/media/TSNBg3wSBdng7ijMhT0ud4HrQYofJjJy8QCa8JSD8VY.jpg";
  };
  const reset = () => {setLevel(0);
  }; 

  return (
    <>
      <div style={{ color: "chocolate", textAlign: "center" }}>
        <h1>ให้อาหารหมูเด้ง</h1>
      </div>
      <div style={{ color: "lightsalmon", textAlign: "center" }}>
        <h1>Level {Level}</h1>
      </div>
      <div style={{ justifyContent: "center", display: "flex" }}>
        <img src={ajo()} alt="หมูเด้ง" width={100 + Level} />
      </div>

      <br />
      <img
        src="https://png.pngtree.com/png-vector/20240630/ourmid/pngtree-cartoon-watermelon-smilling-png-image_12932231.png"
        alt="แตงโม"
        height={100}
        onClick={() => setLevel(() => Level + 5)}
      />
      <img
        src="https://png.pngtree.com/png-clipart/20231001/original/pngtree-fruit-cartoon-character-pumpkin-png-image_13030110.png"
        alt="ฟักทอง"
        height={100}
        onClick={() => setLevel(() => Level + 10)}
      />
      <img
        src="https://png.pngtree.com/png-clipart/20230914/original/pngtree-cartoon-grass-vector-png-image_12158657.png"
        alt="หญ้า"
        height={125}
        onClick={() => setLevel(() => Level + 20)}
      />
      <img
        src="https://i.pinimg.com/originals/66/a1/9e/66a19ef601263db7d08a914bd72d3377.png"
        alt="หมูทะ"
        height={125}
        onClick={() => setLevel(() => Level + 50)}
      />
      <div style={{ color: "lightpink", textAlign: "center" }}>
        <h3>แตงโม 5 แต้ม , ฟักทอง 10 แต้ม</h3>
        <h3>หญ้า 20 แต้ม , หมูทะ 50 แต้ม</h3>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
