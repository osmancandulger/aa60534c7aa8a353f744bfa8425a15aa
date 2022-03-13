import { shallowMount } from "@vue/test-utils";
import ProductsList from "@/components/ProductsList.vue";
let wrapper: any;
let instance: any;
const dataList = [
  {
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
  },
  {
    id: 7550809571547,
    title: "Ambush",
    body_html:
      '<p><em>This is a demonstration store. You can purchase products like this from <a href="//skiandscuba.com" target="_blank">The Ski Chalet &amp; Treasure Cove Scuba</a>.</em></p><ul>\n<li>LACING: Speed Zone™ Lacing System featuring NEW Components for 2016 and Powered by NEW Burton Exclusive New England Ropes with a Lifetime Warranty</li>\n<li>LINER: Imprint™ 3 Liner with Focus Cuff and Rad Pad</li>\n<li>CUSHIONING: NEW DynoBITE EST® Optimized Outsole with Strategically Placed Rubber Traction Pads and NEW ReBounce Cushioning with Sleeping Bag Reflective Foil</li>\n<li>FLEX AND RESPONSE: Wishbone Upper Cuff, Oversized Flex Notches, NEW 1:1 Medium Flex PowerUP Tongue, and GripLITE Backstay</li>\n<li>COMFORT: Total Comfort Construction, Shrinkage™ Footprint Reduction Technology, Snow-Proof Internal Gusset, and Level 2 Molded EVA Footbed with ESS Support Shank and Aegis™ Antimicrobial Coating</li>\n</ul>',
    vendor: "Burton",
    product_type: "Snowboard Boots",
    created_at: "2022-02-23T16:20:07+03:00",
    handle: "burton-support-local-amb-boot-2016",
    updated_at: "2022-02-23T16:28:22+03:00",
    published_at: "2022-02-23T16:20:06+03:00",
    template_suffix: null,
    status: "active",
    published_scope: "web",
    tags: "Snowboard Boots",
    admin_graphql_api_id: "gid://shopify/Product/7550809571547",
    variants: [
      {
        id: 42509640138971,
        product_id: 7550809571547,
        title: "9.5 / Bandanner",
        price: "279.95",
        sku: "",
        position: 1,
        inventory_policy: "deny",
        compare_at_price: null,
        fulfillment_service: "manual",
        inventory_management: "shopify",
        option1: "9.5",
        option2: "Bandanner",
        option3: null,
        created_at: "2022-02-23T16:20:07+03:00",
        updated_at: "2022-02-23T16:20:07+03:00",
        taxable: true,
        barcode: "632059936605",
        grams: 6350,
        image_id: 36706932523227,
        weight: 13.9994,
        weight_unit: "lb",
        inventory_item_id: 44603801829595,
        inventory_quantity: 1,
        old_inventory_quantity: 1,
        requires_shipping: true,
        admin_graphql_api_id: "gid://shopify/ProductVariant/42509640138971",
      },
      {
        id: 42509640171739,
        product_id: 7550809571547,
        title: "10.5 / Bandanner",
        price: "279.95",
        sku: "",
        position: 2,
        inventory_policy: "deny",
        compare_at_price: null,
        fulfillment_service: "manual",
        inventory_management: "shopify",
        option1: "10.5",
        option2: "Bandanner",
        option3: null,
        created_at: "2022-02-23T16:20:07+03:00",
        updated_at: "2022-02-23T16:20:07+03:00",
        taxable: true,
        barcode: "632059936483",
        grams: 6350,
        image_id: 36706932523227,
        weight: 13.9994,
        weight_unit: "lb",
        inventory_item_id: 44603801862363,
        inventory_quantity: 1,
        old_inventory_quantity: 1,
        requires_shipping: true,
        admin_graphql_api_id: "gid://shopify/ProductVariant/42509640171739",
      },
      {
        id: 42509640204507,
        product_id: 7550809571547,
        title: "11.5 / Bandanner",
        price: "279.95",
        sku: "",
        position: 3,
        inventory_policy: "deny",
        compare_at_price: null,
        fulfillment_service: "manual",
        inventory_management: "shopify",
        option1: "11.5",
        option2: "Bandanner",
        option3: null,
        created_at: "2022-02-23T16:20:07+03:00",
        updated_at: "2022-02-23T16:20:07+03:00",
        taxable: true,
        barcode: "632059936506",
        grams: 6350,
        image_id: 36706932523227,
        weight: 13.9994,
        weight_unit: "lb",
        inventory_item_id: 44603801895131,
        inventory_quantity: 1,
        old_inventory_quantity: 1,
        requires_shipping: true,
        admin_graphql_api_id: "gid://shopify/ProductVariant/42509640204507",
      },
    ],
    options: [
      {
        id: 9606281101531,
        product_id: 7550809571547,
        name: "Size",
        position: 1,
        values: ["9.5", "10.5", "11.5"],
      },
      {
        id: 9606281134299,
        product_id: 7550809571547,
        name: "Color",
        position: 2,
        values: ["Bandanner"],
      },
    ],
    images: [
      {
        id: 36706932523227,
        product_id: 7550809571547,
        position: 1,
        created_at: "2022-02-23T16:20:07+03:00",
        updated_at: "2022-02-23T16:20:07+03:00",
        alt: null,
        width: 598,
        height: 720,
        src: "https://cdn.shopify.com/s/files/1/0631/9122/0443/products/10623102986_1_598x720_72_RGB.jpg?v=1645622407",
        variant_ids: [42509640138971, 42509640171739, 42509640204507],
        admin_graphql_api_id: "gid://shopify/ProductImage/36706932523227",
      },
    ],
    image: {
      id: 36706932523227,
      product_id: 7550809571547,
      position: 1,
      created_at: "2022-02-23T16:20:07+03:00",
      updated_at: "2022-02-23T16:20:07+03:00",
      alt: null,
      width: 598,
      height: 720,
      src: "https://cdn.shopify.com/s/files/1/0631/9122/0443/products/10623102986_1_598x720_72_RGB.jpg?v=1645622407",
      variant_ids: [42509640138971, 42509640171739, 42509640204507],
      admin_graphql_api_id: "gid://shopify/ProductImage/36706932523227",
    },
  },
];
beforeAll(async () => {
  wrapper = shallowMount(ProductsList);
  instance = wrapper.vm;
});

describe("ProductsList.vue", () => {
  it("Sets pagination props and data when clicked", async () => {
    instance.updateValue(0);
    expect(instance.activeIndex).toEqual(0);
    instance.handlePagination("next");
    expect(instance.activeIndex).toEqual(1);
    instance.handlePagination("next");
    instance.handlePagination("next-last");
    expect(instance.activeIndex).toEqual(instance.paginationSize - 1);
  });
  it("Sets body scrollTop to 0 on page changes", async () => {
    expect(instance.scrollTop()).toBe(0);
  });
  it("Filters products list by product type filter", async () => {
    instance.filterByType("Helmets");
    instance.productsData = dataList;
    expect(instance.productsData).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ product_type: "Helmets" }),
      ])
    );
  });
  it("Filters products list by search filter", async () => {
    instance.searchIt("Aera");
    instance.productsData = dataList;
    expect(instance.productsData).toEqual(
      expect.arrayContaining([expect.objectContaining({ title: "Aera" })])
    );
    instance.searchIt("A");
    expect(instance.isFlush).toBe(true);
  });
});
