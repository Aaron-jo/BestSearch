import React, { useEffect, useMemo, useRef } from "react";
import { useAppSelector } from "../app/hooks";
import * as echarts from 'echarts';
import { Skeleton, Container, Grid, Typography, Card, Box } from "@mui/material";
import { IProductTrends } from "./mockData";
import {debounce} from "lodash";

type EChartsOption = echarts.EChartsOption;
interface ISearchResultProps {

}

/**
 * 搜索结果展示组件
 * @param props 
 * @returns 
 */
export default function SearchResult(props: ISearchResultProps) {
  const {status, searchResult} = useAppSelector((state) => state.search);
  const isLoading = status !== 'success';

  return <Box sx={{height: '100%', p: '40px 0 0'}}>
    <Typography variant="h6" align="left" sx={{mb: 5}}>
      Releated product trends
    </Typography>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 6, md: 12 }}>
      {
        isLoading ? Array.from(Array(5)).map((_, index) => {
          return <Grid key={index} item xs={12} sm={3} md={3}>
            <Skeleton />
            <Skeleton width="60%" />
            <Skeleton variant="rectangular" width='100%' height={250} />
          </Grid>
        }) : searchResult?.product_trends.map((item) => {
          return <Grid key={item.name} item xs={12} sm={3} md={3}>
            <ResultCharts data={item} />
          </Grid>
        })
      }
    </Grid>
  </Box>
}

/**
 * 搜索结果图表卡片组件
 * @param props
 * @returns 
 */
function ResultCharts({data}: {data: IProductTrends}) {
  const cardRef = useRef<null | HTMLDivElement >(null);
  const echartRef = useRef<null | echarts.ECharts>(null);
  const option = useMemo<EChartsOption>(
    () => {
      let xData: string[] = [], yData: number[] = [];
      data.search_msv.forEach((item) => {
        xData.push(item.date);
        yData.push(item.sv);
      })
      return {
        xAxis: {
          type: "category",
          boundaryGap: false,
          show: false,
          data: xData,
        },
        yAxis: {
          splitLine: {show: false},
          axisLabel: {show: false},
          type: "value",
        },
        series: [
          {
            data: yData,
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
      }
    },
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
      echartRef.current.setOption(option);
    }
  }, [cardRef.current])
  return <Card>
    <Typography align="left" noWrap variant="h5" sx={{p: 2}}>{data.name}</Typography>
    <Box ref={cardRef} height={200} />
    <Typography variant="subtitle1" noWrap sx={{p: 1}}>更新日期: {data.update_dt}</Typography>
  </Card>;
}