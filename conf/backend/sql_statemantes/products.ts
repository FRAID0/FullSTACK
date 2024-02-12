const selectProducts = `SELECT * FROM PART`

const selectProduct =(id:number):string=>{ return `SELECT * FROM PART WHERE p_partkey=${id}` }

export const sqlProducts = {
    selectProduct,
    selectProducts
};