import "./App.css";
import { Article } from "./components/Article";
import { SongsList } from "./components/SongsList/SongsList";

function App() {
  const songs = [
    {
      id: 1,
      url: "https://m.media-amazon.com/images/M/MV5BMDU3ZDQ4NzctYTJmMC00OGMyLTgxNGMtODVmNGM5MzE3MjZlXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      title: "Take Me To Church",
      author: "Hozier",
      release: 2013,
      info: "Дебютний хіт ірландського музиканта Hozier, який використовує релігійну метафору для критики нетерпимості та оспівування кохання як чогось священного. Пісня стала світовим феноменом завдяки потужному посланню про свободу почуттів та право любити без осуду",
    },
    {
      id: 2,
      url: "https://upload.wikimedia.org/wikipedia/ru/thumb/6/68/Smellsliketeenspiritdsingle.jpg/250px-Smellsliketeenspiritdsingle.jpg",
      title: "Smells Like Teen Spirit",
      author: "Nirvana",
      release: 1991,
      info: "Пісня передає почуття нудьги, відчуження та бунту підлітків проти фальшивого дорослого світу – це крик покоління, якому набридло притворятися та грати за чужими правилами.",
    },
    {
      id: 3,
      url: "https://upload.wikimedia.org/wikipedia/ru/0/06/ComeAsYouAre.jpg",
      title: "Come as You Are",
      author: "Nirvana",
      release: 1992,
      info: "Пісня про прийняття людини такою, якою вона є, без масок і претензій. Трек закликає бути справжнім, приходити зі своїми недоліками, минулим і проблемами – головне послання про те, що тебе приймуть і полюблять саме таким, без необхідності щось доводити чи змінювати себе.",
    },
    {
      id: 4,
      url: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da845d060d47fdae94b6c67dd93c",
      title: "Gladiator",
      author: "Jann",
      release: 2022,
      info: "Трек розповідає про внутрішню боротьбу та силу духу – про те, як людина стає воїном у власному житті, долаючи болі, страхи та виклики, щоб вистояти попри все.",
    },
    {
      id: 5,
      url: "https://images.genius.com/08512233daea8ba17dbfc41de948e994.1000x1000x1.png",
      title: "Zitti e Buoni",
      author: "Måneskin",
      release: 2021,
      info: "Пісня про бунт проти суспільних норм та право бути собою всупереч осуду. Трек закликає ігнорувати тих, хто намагається тебе змінити чи засудити – це гімн про свободу самовираження, де головне послання: мовчіть і будьте слухняними ви, а ми будемо жити так, як хочемо.",
    },
  ];
  return (
    <div className="App">
      <h1>HELLO</h1>
      <Article />
      <SongsList songsListData={songs} test="це пропс" />
    </div>
  );
}

export default App;
