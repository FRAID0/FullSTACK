const selectOrders = `SELECT * FROM ORDERS`

const selectOrder =(id:number):string=> { return `SELECT * FROM ORDERS WHERE o_orderkey=${id};` }

const selectTotalRevenue = `SELECT SUM(O_TOTALPRICE) as totalRevenue FROM ORDERS `

const selectMonthRevenue = (month:string):string=>{
    if(month== "last"){
        return `
        SELECT SUM(O_TOTALPRICE) as revenue ${month}Month
        FROM ORDERS 
        WHERE DATE_PART('month',O_ORDERDATE) = (DATE_PART('month',CURRENT_DATE)-1) 
        `
    }
    const intMonth = parseInt(month);

    return `
        SELECT  SUM(O_TOTALPRICE) as revenue${month}Month
        FROM ORDERS
        WHERE DATE_PART('month',O_ORDERDATE) = ${intMonth}
    `
}

const selectYearRevenue = (year:string):string=>{
    if(year == "last"){
        return `
            SELECT  SUM(O_TOTALPRICE) as revenue${year}Year
            FROM ORDERS
            WHERE DATE_PART('year',O_ORDERDATE) = (DATE_PART('year',CURRENT_DATE)-1)
        `
    }
    const intMonth = parseInt(year);

    return `
        SELECT  SUM(O_TOTALPRICE) as revenue${year}Month
        FROM ORDERS
        WHERE DATE_PART('year',O_ORDERDATE) = ${intMonth}
    `
}

const actualYearRevenue = `
SELECT SUM(O_TOTALPRICE) as actualYearRevenue
FROM ORDERS
WHERE DATE_PART('year',O_ORDERDATE) = (DATE_PART('year',CURRENT_DATE))
`

const lastYearRevenue = `
    SELECT SUM(O_TOTALPRICE) as lastYearRevenue
    FROM ORDERS
    WHERE DATE_PART('year',O_ORDERDATE) = (DATE_PART('year',CURRENT_DATE)-1)
` 

export const sqlOrder = {
    selectOrder,
    selectOrders,
    selectTotalRevenue,
    selectMonthRevenue,
    selectYearRevenue,
    actualYearRevenue,
    lastYearRevenue,
};