import { shallowMount, mount } from "@vue/test-utils";
import Product from "@/components/Product.vue";
let wrapper: any;
let instance: any;
const object = {
  id: 7550805770459,
  title: "Aera",
  body_html:
    '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li><span style="line-height: 1.4;">Endura-Shell Construction</span></li>\n<li><span style="line-height: 1.4;">Active Ventilation</span></li>\n<li><span style="line-height: 1.4;">Goggle Ventilation Channel</span></li>\n<li><span style="line-height: 1.4;">Long-Haired Fleece on Liner and Ear Pads</span></li>\n<li><span style="line-height: 1.4;">Removable Goggle Clip</span></li>\n<li><span style="line-height: 1.4;">Simple Fit</span></li>\n<li><span style="line-height: 1.4;">Audio Accessory Compatible</span></li>\n</ul>\n<ul></ul>',
  vendor: "Anon",
  product_type: "Helmets",
  created_at: "2022-02-23T16:17:16+03:00",
  handle: "anon-aera-l-a-m-b-helmet-2016-womens",
  updated_at: "2022-02-23T16:28:13+03:00",
  published_at: "2022-02-23T16:17:15+03:00",
  template_suffix: null,
  status: "active",
  published_scope: "web",
  tags: "Helmets",
  admin_graphql_api_id: "gid://shopify/Product/7550805770459",
  variants: [
    {
      id: 42509627588827,
      product_id: 7550805770459,
      title: "Small / Black",
      price: "109.95",
      sku: "",
      position: 1,
      inventory_policy: "deny",
      compare_at_price: null,
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "Small",
      option2: "Black",
      option3: null,
      created_at: "2022-02-23T16:17:16+03:00",
      updated_at: "2022-02-23T16:17:16+03:00",
      taxable: true,
      barcode: "632059980417",
      grams: 1360,
      image_id: 36706917843163,
      weight: 2.9983,
      weight_unit: "lb",
      inventory_item_id: 44603789279451,
      inventory_quantity: 10,
      old_inventory_quantity: 10,
      requires_shipping: true,
      admin_graphql_api_id: "gid://shopify/ProductVariant/42509627588827",
    },
    {
      id: 42509627621595,
      product_id: 7550805770459,
      title: "Medium / Black",
      price: "109.95",
      sku: "",
      position: 2,
      inventory_policy: "deny",
      compare_at_price: null,
      fulfillment_service: "manual",
      inventory_management: "shopify",
      option1: "Medium",
      option2: "Black",
      option3: null,
      created_at: "2022-02-23T16:17:16+03:00",
      updated_at: "2022-02-23T16:17:16+03:00",
      taxable: true,
      barcode: "632059980400",
      grams: 1361,
      image_id: 36706917843163,
      weight: 3.0005,
      weight_unit: "lb",
      inventory_item_id: 44603789312219,
      inventory_quantity: 0,
      old_inventory_quantity: 0,
      requires_shipping: true,
      admin_graphql_api_id: "gid://shopify/ProductVariant/42509627621595",
    },
  ],
  options: [
    {
      id: 9606275662043,
      product_id: 7550805770459,
      name: "Size",
      position: 1,
      values: ["Small", "Medium"],
    },
    {
      id: 9606275694811,
      product_id: 7550805770459,
      name: "Color",
      position: 2,
      values: ["Black"],
    },
  ],
  images: [
    {
      id: 36706917843163,
      product_id: 7550805770459,
      position: 1,
      created_at: "2022-02-23T16:17:16+03:00",
      updated_at: "2022-02-23T16:17:16+03:00",
      alt: null,
      width: 679,
      height: 720,
      src: "https://cdn.shopify.com/s/files/1/0631/9122/0443/products/13301101178_1_679x720_72_RGB.jpg?v=1645622236",
      variant_ids: [42509627588827, 42509627621595],
      admin_graphql_api_id: "gid://shopify/ProductImage/36706917843163",
    },
  ],
  image: {
    id: 36706917843163,
    product_id: 7550805770459,
    position: 1,
    created_at: "2022-02-23T16:17:16+03:00",
    updated_at: "2022-02-23T16:17:16+03:00",
    alt: null,
    width: 679,
    height: 720,
    src: "https://cdn.shopify.com/s/files/1/0631/9122/0443/products/13301101178_1_679x720_72_RGB.jpg?v=1645622236",
    variant_ids: [42509627588827, 42509627621595],
    admin_graphql_api_id: "gid://shopify/ProductImage/36706917843163",
  },
};
beforeAll(async () => {
  wrapper = shallowMount(Product, {});
  instance = wrapper.vm;
});

describe("Product.vue", () => {
  it("Check prop", async () => {
    await wrapper.setProps({ data: object });
    expect(instance.data).toBe(object);
  });
  it("Check html texts & source by response object", async () => {
    const detailIcon = await wrapper.find(".detail-icon");
    await detailIcon.trigger("click");
    const productTitle = await wrapper.find(".product__title");
    const productImg = await wrapper.find(".product__img");
    const productPrice = await wrapper.find(".product__price");

    expect(productTitle.text()).toBe(object.title);
    expect(productImg.attributes("src")).toBe(object.image.src);
    expect(productPrice.text()).toBe(object.variants[0].price);
    const productShipping = await wrapper.find(".product__shipping");
    const productWeight = await wrapper.find(".product__weight");
    const productTaxable = await wrapper.find(".product__taxable");
    const productVendor = await wrapper.find(".product__vendor");

    expect(productShipping.text()).toBe(
      `Requires Shipping: ${object.variants[0].taxable ? "Yes" : "No"}`
    );
    expect(productTaxable.text()).toBe(
      `Taxable: ${object.variants[0].taxable ? "Yes" : "No"}`
    );
    expect(productWeight.text()).toBe(
      `Weight: ${object.variants[0].weight.toFixed(3)}${
        object.variants[0].weight_unit
      }`
    );
    expect(productVendor.text()).toBe(`Vendor: ${object.vendor}`);
  });
});
