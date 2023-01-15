import type { Product } from "types";

import { fetchApi } from ".";
import { apiData } from "./data";

describe("fetchApi", () => {
  it("Load products", async () => {
    const { products } = apiData;
    expect.assertions(1 + products.length * 2);

    return fetchApi("products")
      .then(async (res) => res.json())
      .then((data: Product[]) => {
        expect(data.length).toBe(products.length);
        data.forEach((el, index) => {
          expect(products[index].id).toBe(el.id);
          expect(products[index].name).toBe(el.name);
        });
      })
      .catch((err) => {
        console.error(err);
      });
  });
});
