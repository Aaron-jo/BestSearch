import React, { useEffect } from "react";
import { useAppSelector } from "../app/hooks";
import * as echarts from 'echarts';
import { Box, Card } from "@mui/material";

type EChartsOption = echarts.EChartsOption;
interface ISearchResulthProps {

}
export default function SearchResult(props: ISearchResulthProps) {
  const {status, searchResult} = useAppSelector((state) => state.search);
  useEffect(() => {
    console.log('%c 🍢 searchResult: ', 'font-size:12px;background-color: #4b4b4b;color:#fff;', searchResult, status);
  }, [searchResult])
  return <Box sx={{height: '100%', width: '100%', display: 'flex', justifyContent: 'center'}}>
    {
      searchResult?.product_trends.map((item) => {
        return <Card key={item.name} variant="outlined" sx={{width: 80, height: 120}}></Card>
      })
    }
  </Box>
}