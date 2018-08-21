export const filterData = [
  {
    type: 'category',
    name: 'Category',
    list: [
      {
        name: 'Field completeness',
        num: 30,
      },
      {
        name: 'Timeliness',
        num: 25,
      },
      {
        name: 'Over-reporting',
        num: 30,
      },
      {
        name: 'Under-reporting',
        num: 30,
      },
      {
        name: 'Value accuracy',
        num: 30,
      },
    ],
  },
  {
    type: 'regulatory',
    name: 'Regulatory requirement',
    list: [
      {
        name: 'CFTC.',
        num: 10,
        sub: [
          {
            name: 'Part 43',
            num: 0,
          },
          {
            name: 'Part 45',
            num: 10,
          },
        ],
      },
    ],
  },
  {
    type: 'asset',
    name: 'Asset class',
    list: [
      {
        name: 'Credit',
        num: 15,
      },
      {
        name: 'Rates',
        num: 10,
      },
      {
        name: 'Equities',
        num: 10,
      },
      {
        name: 'Fx',
        num: 10,
      },
      {
        name: 'Commodities',
        num: 10,
      },
    ],
  },
  {
    type: 'activity',
    name: 'Activity',
    list: [
      {
        name: 'Review required',
        num: 30,
      },
      {
        name: 'Issue confirmed',
        num: 25,
      },
      {
        name: 'No issue',
        num: 65,
      },
    ],
  },
  {
    type: 'impact',
    name: 'Impacted records',
    list: [
      {
        name: '0 - 5,000',
      },
      {
        name: '5,001 - 10,000',
      },
      {
        name: '10,001 - 15,000',
      },
      {
        name: '20,001 - 25,000',
      },
      {
        name: '25,001 - 30,000',
      },
      {
        name: '30,001 - 35,000',
      },
    ],
  },
];
