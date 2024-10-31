'use client';
import { ResponsiveChoropleth } from '@nivo/geo';
import worldCountries from '../../lib/world_countries.json';
const data = [
  {
    id: 'AFG',
    value: 201526,
  },
  {
    id: 'AGO',
    value: 783870,
  },
  {
    id: 'ALB',
    value: 8348,
  },
  {
    id: 'ARE',
    value: 485115,
  },
  {
    id: 'ARG',
    value: 328571,
  },
  {
    id: 'ARM',
    value: 681806,
  },
  {
    id: 'ATA',
    value: 771186,
  },
  {
    id: 'ATF',
    value: 851512,
  },
  {
    id: 'AUT',
    value: 546720,
  },
  {
    id: 'AZE',
    value: 425877,
  },
  {
    id: 'BDI',
    value: 594248,
  },
  {
    id: 'BEL',
    value: 812672,
  },
  {
    id: 'BEN',
    value: 866331,
  },
  {
    id: 'BFA',
    value: 938141,
  },
  {
    id: 'BGD',
    value: 730569,
  },
  {
    id: 'BGR',
    value: 380069,
  },
  {
    id: 'BHS',
    value: 994436,
  },
  {
    id: 'BIH',
    value: 929884,
  },
  {
    id: 'BLR',
    value: 412683,
  },
  {
    id: 'BLZ',
    value: 258238,
  },
  {
    id: 'BOL',
    value: 262894,
  },
  {
    id: 'BRN',
    value: 636260,
  },
  {
    id: 'BTN',
    value: 310071,
  },
  {
    id: 'BWA',
    value: 772263,
  },
  {
    id: 'CAF',
    value: 94736,
  },
  {
    id: 'CAN',
    value: 534921,
  },
  {
    id: 'CHE',
    value: 422954,
  },
  {
    id: 'CHL',
    value: 370592,
  },
  {
    id: 'CHN',
    value: 570307,
  },
  {
    id: 'CIV',
    value: 11080,
  },
  {
    id: 'CMR',
    value: 896716,
  },
  {
    id: 'COG',
    value: 160851,
  },
  {
    id: 'COL',
    value: 364338,
  },
  {
    id: 'CRI',
    value: 834049,
  },
  {
    id: 'CUB',
    value: 716120,
  },
  {
    id: '-99',
    value: 181043,
  },
  {
    id: 'CYP',
    value: 585649,
  },
  {
    id: 'CZE',
    value: 2903,
  },
  {
    id: 'DEU',
    value: 332408,
  },
  {
    id: 'DJI',
    value: 879128,
  },
  {
    id: 'DNK',
    value: 965163,
  },
  {
    id: 'DOM',
    value: 905054,
  },
  {
    id: 'DZA',
    value: 852355,
  },
  {
    id: 'ECU',
    value: 48117,
  },
  {
    id: 'EGY',
    value: 826342,
  },
  {
    id: 'ERI',
    value: 256761,
  },
  {
    id: 'ESP',
    value: 592383,
  },
  {
    id: 'EST',
    value: 957145,
  },
  {
    id: 'ETH',
    value: 720631,
  },
  {
    id: 'FIN',
    value: 207053,
  },
  {
    id: 'FJI',
    value: 855767,
  },
  {
    id: 'FLK',
    value: 395060,
  },
  {
    id: 'FRA',
    value: 177425,
  },
  {
    id: 'GAB',
    value: 888935,
  },
  {
    id: 'GBR',
    value: 851236,
  },
  {
    id: 'GEO',
    value: 556748,
  },
  {
    id: 'GHA',
    value: 234755,
  },
  {
    id: 'GIN',
    value: 713467,
  },
  {
    id: 'GMB',
    value: 446752,
  },
  {
    id: 'GNB',
    value: 118388,
  },
  {
    id: 'GNQ',
    value: 505289,
  },
  {
    id: 'GRC',
    value: 183623,
  },
  {
    id: 'GTM',
    value: 566890,
  },
  {
    id: 'GUY',
    value: 65790,
  },
  {
    id: 'HND',
    value: 506103,
  },
  {
    id: 'HRV',
    value: 554050,
  },
  {
    id: 'HTI',
    value: 148328,
  },
  {
    id: 'HUN',
    value: 344090,
  },
  {
    id: 'IDN',
    value: 595261,
  },
  {
    id: 'IND',
    value: 727060,
  },
  {
    id: 'IRL',
    value: 141801,
  },
  {
    id: 'IRN',
    value: 285277,
  },
  {
    id: 'IRQ',
    value: 418622,
  },
  {
    id: 'ISL',
    value: 518708,
  },
  {
    id: 'ISR',
    value: 260416,
  },
  {
    id: 'ITA',
    value: 806448,
  },
  {
    id: 'JAM',
    value: 547490,
  },
  {
    id: 'JOR',
    value: 488108,
  },
  {
    id: 'JPN',
    value: 196727,
  },
  {
    id: 'KAZ',
    value: 786896,
  },
  {
    id: 'KEN',
    value: 619667,
  },
  {
    id: 'KGZ',
    value: 443287,
  },
  {
    id: 'KHM',
    value: 220297,
  },
  {
    id: 'OSA',
    value: 296807,
  },
  {
    id: 'KWT',
    value: 827563,
  },
  {
    id: 'LAO',
    value: 673140,
  },
  {
    id: 'LBN',
    value: 959052,
  },
  {
    id: 'LBR',
    value: 788385,
  },
  {
    id: 'LBY',
    value: 24025,
  },
  {
    id: 'LKA',
    value: 633824,
  },
  {
    id: 'LSO',
    value: 377771,
  },
  {
    id: 'LTU',
    value: 382610,
  },
  {
    id: 'LUX',
    value: 136563,
  },
  {
    id: 'LVA',
    value: 932554,
  },
  {
    id: 'MAR',
    value: 732849,
  },
  {
    id: 'MDA',
    value: 17522,
  },
  {
    id: 'MDG',
    value: 88606,
  },
  {
    id: 'MEX',
    value: 697985,
  },
  {
    id: 'MKD',
    value: 334763,
  },
  {
    id: 'MLI',
    value: 869303,
  },
  {
    id: 'MMR',
    value: 847743,
  },
  {
    id: 'MNE',
    value: 150810,
  },
  {
    id: 'MNG',
    value: 804220,
  },
  {
    id: 'MOZ',
    value: 85269,
  },
  {
    id: 'MRT',
    value: 519352,
  },
  {
    id: 'MWI',
    value: 921708,
  },
  {
    id: 'MYS',
    value: 535735,
  },
  {
    id: 'NAM',
    value: 883042,
  },
  {
    id: 'NCL',
    value: 548037,
  },
  {
    id: 'NER',
    value: 655667,
  },
  {
    id: 'NGA',
    value: 169052,
  },
  {
    id: 'NIC',
    value: 343010,
  },
  {
    id: 'NLD',
    value: 129248,
  },
  {
    id: 'NOR',
    value: 114878,
  },
  {
    id: 'NPL',
    value: 643395,
  },
  {
    id: 'NZL',
    value: 609193,
  },
  {
    id: 'OMN',
    value: 490184,
  },
  {
    id: 'PAK',
    value: 410900,
  },
  {
    id: 'PAN',
    value: 779898,
  },
  {
    id: 'PER',
    value: 25701,
  },
  {
    id: 'PHL',
    value: 695209,
  },
  {
    id: 'PNG',
    value: 923514,
  },
  {
    id: 'POL',
    value: 852684,
  },
  {
    id: 'PRI',
    value: 346745,
  },
  {
    id: 'PRT',
    value: 420996,
  },
  {
    id: 'PRY',
    value: 983865,
  },
  {
    id: 'QAT',
    value: 333186,
  },
  {
    id: 'ROU',
    value: 558342,
  },
  {
    id: 'RUS',
    value: 561901,
  },
  {
    id: 'RWA',
    value: 232065,
  },
  {
    id: 'ESH',
    value: 525428,
  },
  {
    id: 'SAU',
    value: 451242,
  },
  {
    id: 'SDN',
    value: 648994,
  },
  {
    id: 'SDS',
    value: 93078,
  },
  {
    id: 'SEN',
    value: 864074,
  },
  {
    id: 'SLB',
    value: 160074,
  },
  {
    id: 'SLE',
    value: 987222,
  },
  {
    id: 'SLV',
    value: 590758,
  },
  {
    id: 'ABV',
    value: 762992,
  },
  {
    id: 'SOM',
    value: 646562,
  },
  {
    id: 'SRB',
    value: 812203,
  },
  {
    id: 'SUR',
    value: 366907,
  },
  {
    id: 'SVK',
    value: 290350,
  },
  {
    id: 'SVN',
    value: 735616,
  },
  {
    id: 'SWZ',
    value: 824261,
  },
  {
    id: 'SYR',
    value: 716055,
  },
  {
    id: 'TCD',
    value: 243993,
  },
  {
    id: 'TGO',
    value: 360222,
  },
  {
    id: 'THA',
    value: 50420,
  },
  {
    id: 'TJK',
    value: 792796,
  },
  {
    id: 'TKM',
    value: 301731,
  },
  {
    id: 'TLS',
    value: 290294,
  },
  {
    id: 'TTO',
    value: 873336,
  },
  {
    id: 'TUN',
    value: 747950,
  },
  {
    id: 'TUR',
    value: 372792,
  },
  {
    id: 'TWN',
    value: 334750,
  },
  {
    id: 'TZA',
    value: 843559,
  },
  {
    id: 'UGA',
    value: 321930,
  },
  {
    id: 'UKR',
    value: 595272,
  },
  {
    id: 'URY',
    value: 432273,
  },
  {
    id: 'USA',
    value: 531867,
  },
  {
    id: 'UZB',
    value: 516981,
  },
  {
    id: 'VEN',
    value: 528539,
  },
  {
    id: 'VNM',
    value: 718644,
  },
  {
    id: 'VUT',
    value: 682214,
  },
  {
    id: 'PSE',
    value: 826298,
  },
  {
    id: 'YEM',
    value: 415236,
  },
  {
    id: 'ZAF',
    value: 353942,
  },
  {
    id: 'ZMB',
    value: 861890,
  },
  {
    id: 'ZWE',
    value: 740016,
  },
  {
    id: 'KOR',
    value: 643814,
  },
];

function Choropleth() {
  return (
    <ResponsiveChoropleth
      data={data}
      features={worldCountries.features}
      margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
      colors="nivo"
      domain={[0, 1000000]}
      unknownColor="#666666"
      label="properties.name"
      valueFormat=".2s"
      projectionTranslation={[0.5, 0.5]}
      projectionRotation={[0, 0, 0]}
      enableGraticule={true}
      graticuleLineColor="#dddddd"
      borderWidth={0.5}
      borderColor="#152538"
      legends={[
        {
          anchor: 'bottom-left',
          direction: 'column',
          justify: true,
          translateX: 20,
          translateY: -100,
          itemsSpacing: 0,
          itemWidth: 94,
          itemHeight: 18,
          itemDirection: 'left-to-right',
          itemTextColor: '#444444',
          itemOpacity: 0.85,
          symbolSize: 18,
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000000',
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
}

export default Choropleth;
