//memanggil baseURl menggunakan supertest library
const request = require("supertest")("https://dummyjson.com");
//memanggil expect function dari chai library
const expect = require("chai").expect;

describe("Search Product", function () {
    it("Success Search", async function () {
      //diisi dengan script request
      const response = await request.get("/products/search?q=phone").send();
      expect(response.status).to.equal(200);
      console.log(response.status);
    });

    it("failed search", async function (){
      //diisi dengan script request
      const response = await request.get("/products/search?q=bunga").send();
      expect(response.status).to.equal(200);
      console.log(response.status);
    });

});
