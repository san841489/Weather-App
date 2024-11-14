export default function Input({ location, setLocation }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search from location..."
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
}
