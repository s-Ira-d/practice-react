export const MoviesList = ({ MoviesListData, test }) => {
  console.log(test);
  return (
    <ul>
      {MoviesListData.map((movie) => {
        return (
          <li>
            <h2>{movie.title}</h2>
            <img src={movie.url} alt={movie.title} />
            <p>{movie.info}</p>
          </li>
        );
      })}
    </ul>
  );
};
