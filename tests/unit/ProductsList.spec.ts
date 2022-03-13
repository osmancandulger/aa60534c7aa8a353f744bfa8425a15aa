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
