export default function Posts() {
    const names = ['Ada Lovelace', 'Grace Hopper', 'Margaret Hamilton'];
  
    return (
      <div>
        <h1>Our posts</h1>
        <ul>
          {names.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
  
        <button>Like</button>
      </div>
    );
  }