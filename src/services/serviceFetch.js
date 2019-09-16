function serviceFetch() {
    const url = 'https://rickandmortyapi.com/api/character/';
    return (
      fetch(url).then(response => response.json())
    )
  }
  
  export default serviceFetch;