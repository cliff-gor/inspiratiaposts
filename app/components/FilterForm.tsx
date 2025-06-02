export default function FilterForm({ filter, setFilter }: { filter: string; setFilter: (value: string) => void }) {
  return (
    <div className="mb-4 flex gap-2">
      <input
        type="text"
        placeholder="Filter by title..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}