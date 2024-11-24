//memanggil baseURl menggunakan supertest library
const request = require("supertest")("https://dummyjson.com");
//memanggil expect function dari chai library
const expect = require("chai").expect;

describe("delete product", function () {
    it("Success delete", async function () {
      //diisi dengan script request
      const response = await request
      .delete("/products")
      .send({ title: "BMW Pencil"
      });
      expect(response.status).to.equal(404);
      console.log(response.status);
    });

    it("Failed delete", async function () {
      //diisi dengan data yang tidak ada
      const response = await request
      .delete("/products")
      .send({ title: "ninda"
      });
      expect(response.status).to.equal(404);
      console.log(response.status);
    });
    
});




