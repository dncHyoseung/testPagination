import React, { useEffect, useState } from "react";
import "./App.css";
import Pagination from "./components/Pagination";
import Product from "./components/Product";
import { fetchData } from "./api/api";

export interface dataProps {
  idx: number;
  is_view: number;
  plan_max_count?: number;
  plan_min_count?: number;
  pr_original_price: number;
  pr_sale_type: number;
  pr_sale_value: number;
  title: string;
  type: number;
}

function App() {
  const [dataArray, setDataArray] = useState<dataProps[]>([]);
  const [totalList, setListPage] = useState(0);

  const [offset, setOffset] = useState(0);
  const limit = 5; //기본값 20이지만 페이지네이션 test로 5로 변수지정

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const data = await fetchData(offset, limit);
        const dataArray = data?.data?.data?.list;
        const totalCount = data?.data?.data.total_count;

        setListPage(totalCount);
        setDataArray(dataArray);
      } catch (error) {
        console.error(error);
      }
    };

    fetchDataAsync();
  }, [offset]);

  return (
    <>
      <div className="border-bottom">
        <h1>상품관리 | 구독요금제 상품등록</h1>
      </div>
      <div className="right">
        <button className="btn-black">추가</button>
      </div>
      <Product dataArray={dataArray} />
      <Pagination
        totalList={totalList}
        setOffset={setOffset}
        offset={offset}
        limit={limit}
      />
    </>
  );
}

export default App;
