const supertest = require('supertest')
const app = require('../app')

describe('testing cart API',()=>{
    it('get all carts',async()=>{
        const response = await supertest(app).get('/carts')
        expect(response.status).toBe(200)
        console.log(response.body)
        expect(response.body).not.toEqual([]);
    })


    it('get a single cart',async ()=>{
        const response = await supertest(app).get('/carts/2')
        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).not.toEqual({});
        expect(response.body).toHaveProperty('userId');
        expect(response.body).not.toHaveProperty('_Id');
    })

    it("get carts in a date range and limit and sort", async () => {
        const response = await supertest(app).get("/carts?limit=2&sort=desc&startdate=2019-12-10&enddate=2020-10-10")
        expect(response.status).toBe(200)
        console.log('get with querystring', response.body)
        expect(response.body).not.toEqual([])
    })




    it("get carts in for user in date range", async () => {
        const response = await supertest(app).get("/carts/user/1?startdate=2019-12-10&enddate=2020-10-10")
        expect(response.status).toBe(200)
        console.log('get with date range', response.body)
        expect(response.body).not.toEqual([])
    })

    it("get carts in for user without start date", async () => {
        const response = await supertest(app).get("/carts/user/1?enddate=2020-10-10")
        expect(response.status).toBe(200)
        console.log('get user cart without start date', response.body)
        expect(response.body).not.toEqual([])
    })

    it("get carts in for user without end date", async () => {
        const response = await supertest(app).get("/carts/user/1?startdate=2019-12-10")
        expect(response.status).toBe(200)
        console.log('get user cart without end date', response.body)
        expect(response.body).not.toEqual([])
    })

    it("get carts in for user", async () => {
        const response = await supertest(app).get("/carts/user/1")
        expect(response.status).toBe(200)
        console.log('get with userid', response.body)
        expect(response.body).not.toEqual([])
    })


    it('add a new cart',async () => {
        const response = await supertest(app).post('/carts').send({
            userId:1,
            date:new Date('2020-10-10'),
            products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
        })
        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).toHaveProperty('id');
    })

    fields:
{
    id:20,
    email:String,
    username:String,
    password:String,
    name:{
        firstname:String,
        lastname:String
        },
    address:{
    city:String,
    street:String,
    number:Number,
    zipcode:String,
    geolocation:{
        lat:String,
        long:String
        }
    },
    phone:String
}


    it('edit a cart',async () => {
        const response = await supertest(app).put('/carts/2').send({
            userId:1,
            date:new Date('2020-10-10'),
            products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
        })
        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).toHaveProperty('id');
    })


    it('edit a cart',async () => {
        const response = await supertest(app).patch('/carts/2').send({
            userId:1,
            date:new Date('2020-10-10'),
            products:[{productId:2,quantity:4},{productId:1,quantity:10},{productId:5,quantity:2}]
        })
        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).toHaveProperty('id');
    })


    it('delete a cart',async () => {
        const response = await supertest(app).delete('/carts/2')
        expect(response.status).toBe(200);
        console.log(response.body)
        expect(response.body).toHaveProperty('id');
    })
   
})
const supertest = require("supertest")
const app = require("../app")

describe("Testing products API", () => {
    it("all product", async () => {
        const response = await supertest(app).get("/products")
        expect(response.status).toBe(200)
        console.log('get', response.body)
        expect(response.body).not.toStrictEqual([])
    })

    it("get a single product", async () => {
        const response = await supertest(app).get("/products/1")
        expect(response.status).toBe(200)
        console.log('get by id', response.body)
        expect(response.body).not.toStrictEqual({})
        expect(response.body).toHaveProperty('title')
    })


    it("get products in a category", async () => {
        const response = await supertest(app).get("/products/category/jewelery")
        expect(response.status).toBe(200)
        console.log('get by category', response.body)
        expect(response.body).not.toStrictEqual([])
    })


    it("get products in a limit and sort", async () => {
        const response = await supertest(app).get("/products?limit=3&sort=desc")
        expect(response.status).toBe(200)
        console.log('get with querystring', response.body)
        expect(response.body).not.toStrictEqual([])
        expect(response.body).toHaveLength(3);
    })

    it("post a product", async () => {
        const response = await supertest(app).post('/products').send({
            title: 'test',
            price: 13.5,
            description: 'test desc',
            image: 'test img',
            category: 'text cat'
        })
        expect(response.status).toBe(200)
        console.log('post', response.body)
        expect(response.body).toHaveProperty('id')
    })

    it("put a product", async () => {
        const response = await supertest(app).put('/products/1').send({
            title: 'test',
            price: 13.5,
            description: 'test desc',
            image: 'test img',
            category: 'text cat'
        })
        expect(response.status).toBe(200)
        console.log('put', response.body)
        expect(response.body).toHaveProperty('id')
    })


    it("patch a product", async () => {
        const response = await supertest(app).patch('/products/1').send({
            title: 'test',
            price: 13.5,
            description: 'test desc',
            image: 'test img',
            category: 'text cat'
        })
        expect(response.status).toBe(200)
        console.log('patch', response.body)
        expect(response.body).toHaveProperty('id')
    })


    it('delete a product', async () => {
        const response = await supertest(app).put('/products/1')
        expect(response.status).toBe(200)
        console.log('delete', response.body)
        expect(response.body).toHaveProperty('id')
    })

})

importar  {  defineConfig  }  desde  'vite'
importar  reaccionar  desde  '@vitejs/plugin-react'

// https://vitejs.dev/config/
exportar  defineConfig por defecto  ( {
  complementos : [ reaccionar ( ) ] ,
} )
