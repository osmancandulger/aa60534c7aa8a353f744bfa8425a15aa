import { shallowMount, mount } from "@vue/test-utils";
import Paginator from "@/components/Paginator.vue";
let wrapper: any;
let instance: any;

beforeAll(async () => {
  wrapper = mount(Paginator, {
    propsData: {
      paginationSize: 5,
    },
  });
  instance = wrapper.vm;
});

describe("Paginator.vue", () => {
  it("Check prop", async () => {
    expect(instance.paginationSize).toBe(5);
  });
  it("Check pagination size & emitted value", async () => {
    instance.handlePagination("next-last");
    expect(instance.activeIndex).toEqual(instance.paginationSize - 1);
    instance.handlePagination("prev");
    expect(instance.activeIndex).toEqual(instance.paginationSize - 2);
    instance.handlePagination("prev-first");
    expect(instance.activeIndex).toEqual(0);
    expect(
      wrapper
        .emitted()
        .paginationChange[wrapper.emitted().paginationChange.length - 1].at(0)
    ).toBe(0);
    instance.handlePagination("next-last");
    expect(instance.activeIndex).toEqual(instance.paginationSize - 1);
    expect(
      wrapper
        .emitted()
        .paginationChange[wrapper.emitted().paginationChange.length - 1].at(0)
    ).toBe(instance.activeIndex);
  });
});
