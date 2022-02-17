export interface ISearcResultDataType {
  data: {
    product_trends: Array<{
      name: string;
      search_msv: {date: string; sv: number}[];
      [key: string]: unknown;
    }>;
  };
  msg: string;
  status: "OK" | "FAILED";
}

const data: ISearcResultDataType = {
  data: {
    product_trends: [
      {
        ppc: 100,
        yoy: 33,
        two_year_exploding: 184,
        created_at: 1626066011,
        is_yearly_seasonal: false,
        search_msv: [
          {
            date: "2015-9",
            sv: 161700,
          },
          {
            date: "2015-10",
            sv: 169950,
          },
          {
            date: "2015-11",
            sv: 201000,
          },
          {
            date: "2015-12",
            sv: 196980,
          },
          {
            date: "2016-1",
            sv: 158400,
          },
          {
            date: "2016-2",
            sv: 160050,
          },
          {
            date: "2016-3",
            sv: 205020,
          },
          {
            date: "2016-4",
            sv: 194970,
          },
          {
            date: "2016-5",
            sv: 194970,
          },
          {
            date: "2016-6",
            sv: 192960,
          },
          {
            date: "2016-7",
            sv: 201000,
          },
          {
            date: "2016-8",
            sv: 209040,
          },
          {
            date: "2016-9",
            sv: 201000,
          },
          {
            date: "2016-10",
            sv: 205020,
          },
          {
            date: "2016-11",
            sv: 250920,
          },
          {
            date: "2016-12",
            sv: 243540,
          },
          {
            date: "2017-1",
            sv: 194970,
          },
          {
            date: "2017-2",
            sv: 192960,
          },
          {
            date: "2017-3",
            sv: 198990,
          },
          {
            date: "2017-4",
            sv: 205020,
          },
          {
            date: "2017-5",
            sv: 201000,
          },
          {
            date: "2017-6",
            sv: 90500,
          },
          {
            date: "2017-7",
            sv: 90500,
          },
          {
            date: "2017-8",
            sv: 85970,
          },
          {
            date: "2017-9",
            sv: 89590,
          },
          {
            date: "2017-10",
            sv: 112200,
          },
          {
            date: "2017-11",
            sv: 114400,
          },
          {
            date: "2017-12",
            sv: 250920,
          },
          {
            date: "2018-1",
            sv: 211050,
          },
          {
            date: "2018-2",
            sv: 85970,
          },
          {
            date: "2018-3",
            sv: 95020,
          },
          {
            date: "2018-4",
            sv: 201000,
          },
          {
            date: "2018-5",
            sv: 207030,
          },
          {
            date: "2018-6",
            sv: 201000,
          },
          {
            date: "2018-7",
            sv: 205020,
          },
          {
            date: "2018-8",
            sv: 169950,
          },
          {
            date: "2018-9",
            sv: 161700,
          },
          {
            date: "2018-10",
            sv: 196980,
          },
          {
            date: "2018-11",
            sv: 192960,
          },
          {
            date: "2018-12",
            sv: 238620,
          },
          {
            date: "2019-1",
            sv: 192960,
          },
          {
            date: "2019-2",
            sv: 165000,
          },
          {
            date: "2019-3",
            sv: 192960,
          },
          {
            date: "2019-4",
            sv: 203010,
          },
          {
            date: "2019-5",
            sv: 192960,
          },
          {
            date: "2019-6",
            sv: 196980,
          },
          {
            date: "2019-7",
            sv: 238620,
          },
          {
            date: "2019-8",
            sv: 236160,
          },
          {
            date: "2019-9",
            sv: 243540,
          },
          {
            date: "2019-10",
            sv: 246000,
          },
          {
            date: "2019-11",
            sv: 253380,
          },
          {
            date: "2019-12",
            sv: 288960,
          },
          {
            date: "2020-1",
            sv: 250920,
          },
          {
            date: "2020-2",
            sv: 248460,
          },
          {
            date: "2020-3",
            sv: 238620,
          },
          {
            date: "2020-4",
            sv: 304010,
          },
          {
            date: "2020-5",
            sv: 313040,
          },
          {
            date: "2020-6",
            sv: 285950,
          },
          {
            date: "2020-7",
            sv: 288960,
          },
          {
            date: "2020-8",
            sv: 288960,
          },
          {
            date: "2020-9",
            sv: 285950,
          },
          {
            date: "2020-10",
            sv: 368000,
          },
          {
            date: "2020-11",
            sv: 445500,
          },
          {
            date: "2020-12",
            sv: 468000,
          },
          {
            date: "2021-1",
            sv: 360640,
          },
          {
            date: "2021-2",
            sv: 294980,
          },
          {
            date: "2021-3",
            sv: 375360,
          },
          {
            date: "2021-4",
            sv: 364320,
          },
          {
            date: "2021-5",
            sv: 386400,
          },
          {
            date: "2021-6",
            sv: 353280,
          },
          {
            date: "2021-7",
            sv: 450000,
          },
        ],
        group: "accessory",
        growth: 142,
        name: "hat",
        qoq: 14,
        updated_at: 1626066011,
        seed: "hat",
        last_year_yoy: 41,
        cpc: 0.85,
        msv_len: 71,
        last_sv: 450000,
        three_year_exploding: 197,
        one_year_exploding: 139,
        forecast_search_msv: [
          {
            date: "2021-06-01",
            sv: 356985,
          },
          {
            date: "2021-07-01",
            sv: 362500,
          },
          {
            date: "2021-08-01",
            sv: 364504,
          },
          {
            date: "2021-09-01",
            sv: 368399,
          },
          {
            date: "2021-10-01",
            sv: 386785,
          },
          {
            date: "2021-11-01",
            sv: 427650,
          },
          {
            date: "2021-12-01",
            sv: 469241,
          },
          {
            date: "2022-01-01",
            sv: 417804,
          },
          {
            date: "2022-02-01",
            sv: 378185,
          },
          {
            date: "2022-03-01",
            sv: 415056,
          },
          {
            date: "2022-04-01",
            sv: 436520,
          },
          {
            date: "2022-05-01",
            sv: 438432,
          },
        ],
        seo: 45,
        update_dt: "2021-08-22",
        kwfinder_updated_at: 1629607178,
        match_score: 8.3653965,
      },
      {
        ppc: 100,
        yoy: -12,
        two_year_exploding: 139,
        created_at: 1626066011,
        is_yearly_seasonal: false,
        search_msv: [
          {
            date: "2017-1",
            sv: 1840,
          },
          {
            date: "2017-2",
            sv: 1800,
          },
          {
            date: "2017-3",
            sv: 2320,
          },
          {
            date: "2017-4",
            sv: 2520,
          },
          {
            date: "2017-5",
            sv: 2300,
          },
          {
            date: "2017-6",
            sv: 2750,
          },
          {
            date: "2017-7",
            sv: 2280,
          },
          {
            date: "2017-8",
            sv: 1900,
          },
          {
            date: "2017-9",
            sv: 1910,
          },
          {
            date: "2017-10",
            sv: 1820,
          },
          {
            date: "2017-11",
            sv: 2440,
          },
          {
            date: "2017-12",
            sv: 2900,
          },
          {
            date: "2018-1",
            sv: 1530,
          },
          {
            date: "2018-2",
            sv: 1970,
          },
          {
            date: "2018-3",
            sv: 1910,
          },
          {
            date: "2018-4",
            sv: 2440,
          },
          {
            date: "2018-5",
            sv: 2470,
          },
          {
            date: "2018-6",
            sv: 2300,
          },
          {
            date: "2018-7",
            sv: 2300,
          },
          {
            date: "2018-8",
            sv: 1970,
          },
          {
            date: "2018-9",
            sv: 1910,
          },
          {
            date: "2018-10",
            sv: 1840,
          },
          {
            date: "2018-11",
            sv: 1840,
          },
          {
            date: "2018-12",
            sv: 3010,
          },
          {
            date: "2019-1",
            sv: 1880,
          },
          {
            date: "2019-2",
            sv: 1840,
          },
          {
            date: "2019-3",
            sv: 1970,
          },
          {
            date: "2019-4",
            sv: 2400,
          },
          {
            date: "2019-5",
            sv: 2350,
          },
          {
            date: "2019-6",
            sv: 2300,
          },
          {
            date: "2019-7",
            sv: 2980,
          },
          {
            date: "2019-8",
            sv: 2420,
          },
          {
            date: "2019-9",
            sv: 1860,
          },
          {
            date: "2019-10",
            sv: 1860,
          },
          {
            date: "2019-11",
            sv: 2400,
          },
          {
            date: "2019-12",
            sv: 2920,
          },
          {
            date: "2020-1",
            sv: 1820,
          },
          {
            date: "2020-2",
            sv: 1880,
          },
          {
            date: "2020-3",
            sv: 2440,
          },
          {
            date: "2020-4",
            sv: 2780,
          },
          {
            date: "2020-5",
            sv: 3420,
          },
          {
            date: "2020-6",
            sv: 4480,
          },
          {
            date: "2020-7",
            sv: 3700,
          },
          {
            date: "2020-8",
            sv: 3450,
          },
          {
            date: "2020-9",
            sv: 3010,
          },
          {
            date: "2020-10",
            sv: 2870,
          },
          {
            date: "2020-11",
            sv: 2900,
          },
          {
            date: "2020-12",
            sv: 4220,
          },
          {
            date: "2021-1",
            sv: 2280,
          },
          {
            date: "2021-2",
            sv: 2300,
          },
          {
            date: "2021-3",
            sv: 2980,
          },
          {
            date: "2021-4",
            sv: 2900,
          },
          {
            date: "2021-5",
            sv: 2780,
          },
          {
            date: "2021-6",
            sv: 3700,
          },
        ],
        group: "accessory",
        growth: 51,
        name: "bmw hat",
        qoq: 24,
        updated_at: 1626066011,
        seed: "hat",
        last_year_yoy: 51,
        cpc: 0.43,
        msv_len: 54,
        last_sv: 3700,
        three_year_exploding: 135,
        one_year_exploding: 82,
        forecast_search_msv: [
          {
            date: "2021-06-01",
            sv: 3972,
          },
          {
            date: "2021-07-01",
            sv: 3683,
          },
          {
            date: "2021-08-01",
            sv: 3348,
          },
          {
            date: "2021-09-01",
            sv: 3075,
          },
          {
            date: "2021-10-01",
            sv: 3063,
          },
          {
            date: "2021-11-01",
            sv: 3339,
          },
          {
            date: "2021-12-01",
            sv: 4366,
          },
          {
            date: "2022-01-01",
            sv: 2942,
          },
          {
            date: "2022-02-01",
            sv: 3049,
          },
          {
            date: "2022-03-01",
            sv: 3399,
          },
          {
            date: "2022-04-01",
            sv: 3700,
          },
          {
            date: "2022-05-01",
            sv: 3864,
          },
        ],
        seo: null,
        update_dt: "2021-07-29",
        kwfinder_updated_at: 1627579324,
        match_score: 7.2562127,
      },
      {
        ppc: 100,
        yoy: 1,
        two_year_exploding: 125,
        created_at: 1626066011,
        is_yearly_seasonal: false,
        search_msv: [
          {
            date: "2016-12",
            sv: 23080,
          },
          {
            date: "2017-1",
            sv: 12220,
          },
          {
            date: "2017-2",
            sv: 11730,
          },
          {
            date: "2017-3",
            sv: 14500,
          },
          {
            date: "2017-4",
            sv: 18460,
          },
          {
            date: "2017-5",
            sv: 17550,
          },
          {
            date: "2017-6",
            sv: 19000,
          },
          {
            date: "2017-7",
            sv: 17910,
          },
          {
            date: "2017-8",
            sv: 15390,
          },
          {
            date: "2017-9",
            sv: 12700,
          },
          {
            date: "2017-10",
            sv: 12220,
          },
          {
            date: "2017-11",
            sv: 18820,
          },
          {
            date: "2017-12",
            sv: 22200,
          },
          {
            date: "2018-4",
            sv: 12460,
          },
          {
            date: "2018-5",
            sv: 14800,
          },
          {
            date: "2018-6",
            sv: 17730,
          },
          {
            date: "2018-7",
            sv: 18820,
          },
          {
            date: "2018-8",
            sv: 15090,
          },
          {
            date: "2018-9",
            sv: 12220,
          },
          {
            date: "2018-10",
            sv: 12100,
          },
          {
            date: "2018-11",
            sv: 23080,
          },
          {
            date: "2018-12",
            sv: 28180,
          },
          {
            date: "2019-1",
            sv: 11970,
          },
          {
            date: "2019-2",
            sv: 11610,
          },
          {
            date: "2019-3",
            sv: 12100,
          },
          {
            date: "2019-4",
            sv: 14650,
          },
          {
            date: "2019-5",
            sv: 15240,
          },
          {
            date: "2019-6",
            sv: 18640,
          },
          {
            date: "2019-7",
            sv: 17370,
          },
          {
            date: "2019-8",
            sv: 15390,
          },
          {
            date: "2019-9",
            sv: 11970,
          },
          {
            date: "2019-10",
            sv: 15390,
          },
          {
            date: "2019-11",
            sv: 23310,
          },
          {
            date: "2019-12",
            sv: 28180,
          },
          {
            date: "2020-1",
            sv: 12460,
          },
          {
            date: "2020-2",
            sv: 15540,
          },
          {
            date: "2020-3",
            sv: 11490,
          },
          {
            date: "2020-4",
            sv: 18460,
          },
          {
            date: "2020-5",
            sv: 21970,
          },
          {
            date: "2020-6",
            sv: 21530,
          },
          {
            date: "2020-7",
            sv: 22420,
          },
          {
            date: "2020-8",
            sv: 18100,
          },
          {
            date: "2020-9",
            sv: 15090,
          },
          {
            date: "2020-10",
            sv: 15540,
          },
          {
            date: "2020-11",
            sv: 22860,
          },
          {
            date: "2020-12",
            sv: 27100,
          },
          {
            date: "2021-1",
            sv: 14200,
          },
          {
            date: "2021-2",
            sv: 12220,
          },
          {
            date: "2021-3",
            sv: 14800,
          },
          {
            date: "2021-4",
            sv: 18820,
          },
          {
            date: "2021-5",
            sv: 18820,
          },
        ],
        group: "accessory",
        growth: 2,
        name: "columbia hat",
        qoq: -2,
        updated_at: 1626066011,
        seed: "hat",
        last_year_yoy: 23,
        cpc: 0.7,
        msv_len: 51,
        last_sv: 18820,
        three_year_exploding: 138,
        one_year_exploding: 93,
        forecast_search_msv: [
          {
            date: "2021-06-01",
            sv: 21095,
          },
          {
            date: "2021-07-01",
            sv: 21339,
          },
          {
            date: "2021-08-01",
            sv: 18160,
          },
          {
            date: "2021-09-01",
            sv: 15517,
          },
          {
            date: "2021-10-01",
            sv: 16161,
          },
          {
            date: "2021-11-01",
            sv: 24297,
          },
          {
            date: "2021-12-01",
            sv: 28261,
          },
          {
            date: "2022-01-01",
            sv: 15340,
          },
          {
            date: "2022-02-01",
            sv: 15034,
          },
          {
            date: "2022-03-01",
            sv: 16009,
          },
          {
            date: "2022-04-01",
            sv: 18915,
          },
          {
            date: "2022-05-01",
            sv: 20024,
          },
        ],
        seo: null,
        update_dt: "2021-07-26",
        match_score: 7.2562127,
      },
      {
        ppc: 100,
        yoy: 14,
        two_year_exploding: 0,
        created_at: 1626066011,
        is_yearly_seasonal: false,
        search_msv: [
          {
            date: "2020-4",
            sv: 740,
          },
          {
            date: "2020-5",
            sv: 850,
          },
          {
            date: "2020-6",
            sv: 710,
          },
          {
            date: "2020-7",
            sv: 880,
          },
          {
            date: "2020-8",
            sv: 1360,
          },
          {
            date: "2020-9",
            sv: 1280,
          },
          {
            date: "2020-10",
            sv: 3010,
          },
          {
            date: "2020-11",
            sv: 1040,
          },
          {
            date: "2020-12",
            sv: 1000,
          },
          {
            date: "2021-1",
            sv: 980,
          },
          {
            date: "2021-2",
            sv: 870,
          },
          {
            date: "2021-3",
            sv: 920,
          },
          {
            date: "2021-4",
            sv: 1040,
          },
          {
            date: "2021-5",
            sv: 950,
          },
        ],
        group: "accessory",
        growth: 25,
        forecast_updated_at: 1627613301,
        name: "blippi hat",
        qoq: 2,
        updated_at: 1626066011,
        seed: "cap",
        last_year_yoy: 0,
        cpc: 0.46,
        msv_len: 14,
        last_sv: 950,
        one_year_exploding: 125,
        three_year_exploding: 0,
        forecast_search_msv: [
          {
            date: "2021-06-01",
            sv: 1101,
          },
          {
            date: "2021-07-01",
            sv: 1103,
          },
          {
            date: "2021-08-01",
            sv: 1104,
          },
          {
            date: "2021-09-01",
            sv: 1105,
          },
          {
            date: "2021-10-01",
            sv: 1107,
          },
          {
            date: "2021-11-01",
            sv: 1108,
          },
          {
            date: "2021-12-01",
            sv: 1109,
          },
          {
            date: "2022-01-01",
            sv: 1111,
          },
          {
            date: "2022-02-01",
            sv: 1112,
          },
          {
            date: "2022-03-01",
            sv: 1113,
          },
          {
            date: "2022-04-01",
            sv: 1114,
          },
          {
            date: "2022-05-01",
            sv: 1116,
          },
        ],
        seo: null,
        update_dt: "2021-07-30",
        kwfinder_updated_at: 1627579324,
        match_score: 7.2562127,
      },
      {
        ppc: 100,
        yoy: -12,
        two_year_exploding: 75,
        created_at: 1626066011,
        is_yearly_seasonal: false,
        search_msv: [
          {
            date: "2015-11",
            sv: 1230,
          },
          {
            date: "2015-12",
            sv: 1610,
          },
          {
            date: "2016-1",
            sv: 970,
          },
          {
            date: "2016-2",
            sv: 1600,
          },
          {
            date: "2016-3",
            sv: 1950,
          },
          {
            date: "2016-4",
            sv: 1900,
          },
          {
            date: "2016-5",
            sv: 1970,
          },
          {
            date: "2016-6",
            sv: 1990,
          },
          {
            date: "2016-7",
            sv: 1970,
          },
          {
            date: "2016-8",
            sv: 1910,
          },
          {
            date: "2016-9",
            sv: 1640,
          },
          {
            date: "2016-10",
            sv: 1660,
          },
          {
            date: "2016-11",
            sv: 1800,
          },
          {
            date: "2016-12",
            sv: 2370,
          },
          {
            date: "2017-1",
            sv: 4400,
          },
          {
            date: "2017-2",
            sv: 3670,
          },
          {
            date: "2017-3",
            sv: 3670,
          },
          {
            date: "2017-4",
            sv: 3560,
          },
          {
            date: "2017-5",
            sv: 3600,
          },
          {
            date: "2017-6",
            sv: 3600,
          },
          {
            date: "2017-7",
            sv: 3670,
          },
          {
            date: "2017-8",
            sv: 3740,
          },
          {
            date: "2017-9",
            sv: 2810,
          },
          {
            date: "2017-10",
            sv: 3600,
          },
          {
            date: "2017-11",
            sv: 3600,
          },
          {
            date: "2017-12",
            sv: 4400,
          },
          {
            date: "2018-4",
            sv: 3780,
          },
          {
            date: "2018-5",
            sv: 5560,
          },
          {
            date: "2018-6",
            sv: 4220,
          },
          {
            date: "2018-7",
            sv: 3740,
          },
          {
            date: "2018-8",
            sv: 3600,
          },
          {
            date: "2018-9",
            sv: 2320,
          },
          {
            date: "2018-10",
            sv: 2300,
          },
          {
            date: "2018-11",
            sv: 2300,
          },
          {
            date: "2018-12",
            sv: 2810,
          },
          {
            date: "2019-1",
            sv: 1990,
          },
          {
            date: "2019-2",
            sv: 1910,
          },
          {
            date: "2019-3",
            sv: 2490,
          },
          {
            date: "2019-4",
            sv: 1820,
          },
          {
            date: "2019-5",
            sv: 2300,
          },
          {
            date: "2019-6",
            sv: 2520,
          },
          {
            date: "2019-7",
            sv: 2400,
          },
          {
            date: "2019-8",
            sv: 2320,
          },
          {
            date: "2019-9",
            sv: 1900,
          },
          {
            date: "2019-10",
            sv: 1990,
          },
          {
            date: "2019-11",
            sv: 1930,
          },
          {
            date: "2019-12",
            sv: 2420,
          },
          {
            date: "2020-1",
            sv: 1610,
          },
          {
            date: "2020-2",
            sv: 1900,
          },
          {
            date: "2020-3",
            sv: 1520,
          },
          {
            date: "2020-4",
            sv: 1950,
          },
          {
            date: "2020-5",
            sv: 1880,
          },
          {
            date: "2020-6",
            sv: 2320,
          },
          {
            date: "2020-7",
            sv: 2280,
          },
          {
            date: "2020-8",
            sv: 1860,
          },
          {
            date: "2020-9",
            sv: 1880,
          },
          {
            date: "2020-10",
            sv: 1520,
          },
          {
            date: "2020-11",
            sv: 1520,
          },
          {
            date: "2020-12",
            sv: 1600,
          },
          {
            date: "2021-1",
            sv: 1640,
          },
          {
            date: "2021-2",
            sv: 1010,
          },
          {
            date: "2021-3",
            sv: 1600,
          },
          {
            date: "2021-4",
            sv: 1560,
          },
          {
            date: "2021-5",
            sv: 1530,
          },
        ],
        group: "accessory",
        growth: -61,
        forecast_updated_at: 1627613301,
        name: "huf hat",
        qoq: 10,
        updated_at: 1626066011,
        seed: "cap",
        last_year_yoy: -19,
        cpc: 1.06,
        msv_len: 64,
        last_sv: 1530,
        one_year_exploding: 80,
        three_year_exploding: 33,
        forecast_search_msv: [
          {
            date: "2021-06-01",
            sv: 2511,
          },
          {
            date: "2021-07-01",
            sv: 2310,
          },
          {
            date: "2021-08-01",
            sv: 2169,
          },
          {
            date: "2021-09-01",
            sv: 1671,
          },
          {
            date: "2021-10-01",
            sv: 1702,
          },
          {
            date: "2021-11-01",
            sv: 1615,
          },
          {
            date: "2021-12-01",
            sv: 1957,
          },
          {
            date: "2022-01-01",
            sv: 1840,
          },
          {
            date: "2022-02-01",
            sv: 1589,
          },
          {
            date: "2022-03-01",
            sv: 2002,
          },
          {
            date: "2022-04-01",
            sv: 1949,
          },
          {
            date: "2022-05-01",
            sv: 2298,
          },
        ],
        seo: null,
        update_dt: "2021-07-30",
        kwfinder_updated_at: 1627579324,
        match_score: 7.2562127,
      },
    ],
  },
  msg: "keyword_search请求成功",
  status: "OK",
};

export default data
