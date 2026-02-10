export const SongsList = ({ songsListData, test }) => {
  console.log(test);
  return (
    <ul>
      {songsListData.map((song) => {
        return (
          <li key={song.id}>
            <img src={song.url} alt={song.title} />
            <h2>{song.title}</h2>
            <p>{song.author}</p>
            <p>{song.release}</p>
            <p>{song.info}</p>
          </li>
        );
      })}
    </ul>
  );
};
