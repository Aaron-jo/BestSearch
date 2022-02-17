import React, { useEffect, useMemo, useRef } from "react";
import { useAppSelector } from "../app/hooks";
import * as echarts from 'echarts';
import { Skeleton, Container, Grid, Typography, Card, Box } from "@mui/material";
import { IProductTrends } from "./mockData";
import {debounce} from "lodash";

type EChartsOption = echarts.EChartsOption;
interface ISearchResultProps {

}


export default function SearchResult(props: ISearchResultProps) {
  const {status, searchResult} = useAppSelector((state) => state.search);
  const isLoading = status !== 'success';
  useEffect(() => {
    console.log('%c 🍢 searchResult: ', 'font-size:12px;background-color: #4b4b4b;color:#fff;', searchResult, status);
  }, [searchResult])
  return <Container sx={{height: '100%', width: '70%', pt: 5}}>
    <Typography variant="h6" sx={{mb: 5, textAlign: 'left'}}>
      Releated product trends
    </Typography>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
      {
        isLoading ? Array.from(Array(4)).map((_, index) => {
          return <Grid key={index} item xs={12} sm={3} md={3}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton variant="rectangular" width='100%' height={250} />
          </Grid>
        }) : searchResult?.product_trends.map((item) => {
          return <Grid key={item.name} item xs={12} sm={4} md={4} sx={{width: 80, minHeight: 120}}>
            <ResultCharts data={item} />
          </Grid>
        })
      }
    </Grid>
  </Container>
}

function ResultCharts({data}: {data: IProductTrends}) {
  const cardRef = useRef<null | HTMLDivElement >(null);
  const echartRef = useRef<null | echarts.ECharts>(null);
  const option = useMemo<EChartsOption>(
    () => ({
      xAxis: {
        type: "category",
        boundaryGap: false,
        show: false,
        data: data.search_msv.map((item) => item.date),
      },
      yAxis: {
        splitLine: {show: false},
        axisLabel: {show: false},
        type: "value",
      },
      series: [
        {
          data: data.search_msv.map((item) => item.sv),
          type: "line",
          areaStyle: {},
        },
      ],
      grid: {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
      }
    }),
    [data]
  );
  useEffect(() => {
    const resizeChart = debounce(() => {
      echartRef.current?.resize()
    }, 500)
    window.addEventListener("resize", resizeChart);
    return () => {
      window.removeEventListener("resize", resizeChart)
    }
  }, [])
  useEffect(() => {
    if (cardRef.current) {
      echartRef.current = echarts.init(cardRef.current);
      echartRef.current.setOption(option, true);
    }
  }, [cardRef.current])
  return <Card>
    <Typography align="left" variant="h5" sx={{p: 2}}>{data.name}</Typography>
    <Box ref={cardRef} height={200} />
    <Typography variant="subtitle1" sx={{p: 1}}>更新日期: {data.update_dt}</Typography>
  </Card>;
}