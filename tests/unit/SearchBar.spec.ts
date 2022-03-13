import { shallowMount } from "@vue/test-utils";
import SearchBar from "@/components/SearchBar.vue";
let wrapper: any;
let instance: any;

beforeAll(async () => {
  wrapper = shallowMount(SearchBar, {});
  instance = wrapper.vm;
});

describe("SearchBar.vue", () => {
  it("Checks Search Bar Input & emit value to parent component", async () => {
    instance.searchKey = "Ski";
    expect(instance.searchKey).toBe("Ski");
    const input = await wrapper.find("#search");
    input.trigger("input");

    expect(wrapper.emitted().searchKeyChange[0].at(0)).toBe(instance.searchKey);
  });
});
