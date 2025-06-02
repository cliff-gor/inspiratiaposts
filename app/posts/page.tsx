"use client";

import { useEffect, useState } from "react";
import FilterForm from "../components/FilterForm";
import PostTable from "../components/Table";
import Pagination from "../components/Pagination";
import { Post, fetchPosts } from "../../utils/api"; 


export default function Home() {
  const [data, setData] = useState<Post[]>([]);
  const [filteredData, setFilteredData] = useState<Post[]>([]);
  const [filter, setFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    const fetchData = async () => {
       const posts = await fetchPosts();
      setData(posts);
      setFilteredData(posts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(filter.toLowerCase())
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [filter, data]);

  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Posts Table</h1>
      <FilterForm filter={filter} setFilter={setFilter} />
      <PostTable data={paginatedData} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}
