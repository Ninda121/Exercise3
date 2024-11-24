//memanggil baseURl menggunakan supertest library
const request = require("supertest")("https://dummyjson.com/products");
//memanggil expect function dari chai library
const expect = require("chai").expect;

describe("add product", function () {
    it("Success Add", async function () {
      //diisi dengan script request
      const response = await request
      .post("/add")
      .send({ title: "BMW Pencil"
      });
      expect(response.status).to.equal(201);
      console.log(response.status);
    });

    it("Failed Add", async function () {
      //diisi dengan field yang tidak ada
      const response = await request
      .post("/add")
      .send({ nama: "ninda"
      });
      expect(response.status).to.equal(201);
      console.log(response.status);
    });
    
   

});

