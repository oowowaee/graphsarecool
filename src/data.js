const data1 = {
  date: '2022-02-22',
  data: [
    { 'Country': "Australia DFAT", 'Value': 0 },
    { 'Country': "Canada SEMA", 'Value': 0 },
    { 'Country': "EU Sanctions", 'Value': 5 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 },
    { 'Country': "Switzerland SECO", 'Value': 0 },
    { 'Country': "UK HMT OFSI", 'Value': 8 },
    { 'Country': "US OFAC Non-SDN", 'Value': 4 },
    { 'Country': "US OFAC SDN", 'Value': 52 }
  ]
}

const data2 = {
  date: '2022-02-23',
  data: [
    { 'Country': "Australia DFAT", 'Value': 0 },
    { 'Country': "Canada SEMA", 'Value': 0 },
    { 'Country': "EU Sanctions", 'Value': 5 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 },
    { 'Country': "Switzerland SECO", 'Value': 0 },
    { 'Country': "UK HMT OFSI", 'Value': 8 },
    { 'Country': "US OFAC Non-SDN", 'Value': 4 },
    { 'Country': "US OFAC SDN", 'Value': 54 }
  ]
}

const data3 = {
  date: '2022-02-24',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 },
    { 'Country': "Canada SEMA", 'Value': 416 },
    { 'Country': "EU Sanctions", 'Value': 368 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 },
    { 'Country': "Switzerland SECO", 'Value': 0 },
    { 'Country': "UK HMT OFSI", 'Value': 19 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 121 }
  ]
}

const data4 = {
  date: '2022-02-25',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 },
    { 'Country': "Canada SEMA", 'Value': 416 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 },
    { 'Country': "Switzerland SECO", 'Value': 368 },
    { 'Country': "UK HMT OFSI", 'Value': 21 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 }
  ]
}

const data5 = {
  date: '2022-02-26',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 },
    { 'Country': "Canada SEMA", 'Value': 416 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 },
    { 'Country': "Switzerland SECO", 'Value': 368 },
    { 'Country': "UK HMT OFSI", 'Value': 21 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 }
  ]
}

const data6 = {
  date: '2022-02-27',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 },
    { 'Country': "Canada SEMA", 'Value': 416 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 },
    { 'Country': "Switzerland SECO", 'Value': 368 },
    { 'Country': "UK HMT OFSI", 'Value': 21 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 }
  ]
}

const data7 = {
  date: '2022-02-28',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5},
    { 'Country': "Canada SEMA", 'Value': 416 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4}
  ]
}

const data8 = {
  date: '2022-03-01',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5},
    { 'Country': "Canada SEMA", 'Value': 416 + 18 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9},
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4}
  ]
}

const data9 = {
  date: '2022-03-02',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7},
    { 'Country': "Canada SEMA", 'Value': 416 + 18 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4}
  ]
}

const data10 = {
  date: '2022-03-03',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7},
    { 'Country': "Canada SEMA", 'Value': 416 + 18 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 }
  ]
}

const data11 = {
  date: '2022-03-04',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7},
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 }
  ]
}

const data12 = {
  date: '2022-03-07',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 }
  ]
}

const data13 = {
  date: '2022-03-10',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 }
  ]
}

const data14 = {
  date: '2022-03-11',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 + 37 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 + 159 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 + 386 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 + 35 }
  ]
}

const data15 = {
  date: '2022-03-13',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 + 34 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 + 37 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 + 159 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 + 386 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 + 35 }
  ]
}

const data16 = {
  date: '2022-03-14',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 + 34 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 + 37 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 + 1 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 + 159 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 + 386 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 + 35 }
  ]
}

const data17 = {
  date: '2022-03-15',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 + 34 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 + 37 + 15 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 + 1 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 + 159 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 + 386 + 373 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 + 35 + 15 }
  ]
}

const data18 = {
  date: '2022-03-16',
  data: [
    { 'Country': "Australia DFAT", 'Value': 37 + 347 + 17 + 5 + 7 + 17 + 34 },
    { 'Country': "Canada SEMA", 'Value': 416 + 18 + 20 + 20 + 37 + 15 },
    { 'Country': "EU Sanctions", 'Value': 368 + 99 + 27 + 24 + 160 + 1 + 24 },
    { 'Country': "France Tresor Registre Des Gels", 'Value': 5 + 361 + 97 + 27 + 22 + 1 + 159 + 24 },
    { 'Country': "Switzerland SECO", 'Value': 368 + 3 + 197 + 206 },
    { 'Country': "UK HMT OFSI", 'Value': 21 + 3 + 9 + 2 + 7 + 386 + 373 },
    { 'Country': "US OFAC Non-SDN", 'Value': 22 },
    { 'Country': "US OFAC SDN", 'Value': 125 + 4 + 92 + 35 + 15 }
  ]
}

export const dataPoints = [data1, data2, data3, data4, data5, data6, data7, data8, data9, data10, data11, data12, data13, data14, data15, data16, data17, data18]

export const dataTotals = [
  { 'Country': "Australia DFAT", 'Value': 478 },
  { 'Country': "Canada SEMA", 'Value': 526 },
  { 'Country': "EU Sanctions", 'Value': 705 },
  { 'Country': "France Tresor Registre Des Gels", 'Value': 696 },
  { 'Country': "Switzerland SECO", 'Value': 774 },
  { 'Country': "UK HMT OFSI", 'Value': 801 },
  { 'Country': "US OFAC Non-SDN", 'Value': 22 },
  { 'Country': "US OFAC SDN", 'Value': 271 }
]
