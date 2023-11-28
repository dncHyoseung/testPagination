import React, { useEffect, useState } from "react";
import { fetchData } from "../api/api";
import { dataProps } from "../App";

interface ProductProps {
  dataArray: dataProps[];
}

const Product: React.FC<ProductProps> = ({ dataArray }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>상품 유형</th>
            <th>요금제명</th>
            <th>인원</th>
            <th>월 이용료</th>
            <th>노출</th>
            <th>기능</th>
          </tr>
        </thead>
        <tbody>
          {dataArray?.map((item) => (
            <tr key={item.idx}>
              <td>{item.type === 0 ? "일반" : "추가 테스트"}</td>
              <td>{item.title}</td>
              <td>
                {item.plan_min_count ? `${item.plan_min_count}~` : ""}
                {item.plan_max_count !== null ? item.plan_max_count : 0}명 까지
              </td>
              <td>{item.pr_original_price}원</td>
              <td>{item.is_view ? "O" : "X"}</td>
              <td>
                <button className="btn-white">수정</button>
                <button className="btn-gray">삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Product;
