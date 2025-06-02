export default function PostTable({ data }: { data: { id: number; title: string }[] }) {
  return (
    <table className="min-w-full table-auto border border-gray-200">
      <thead>
        <tr className="bg-gray-100">
          <th className="border px-4 py-2 text-left">ID</th>
          <th className="border px-4 py-2 text-left">Title</th>
        </tr>
      </thead>
      <tbody>
        {data.map((post) => (
          <tr key={post.id} className="hover:bg-gray-50">
            <td className="border px-4 py-2">{post.id}</td>
            <td className="border px-4 py-2">{post.title}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}