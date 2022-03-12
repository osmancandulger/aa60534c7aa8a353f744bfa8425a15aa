import { shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", async () => {
    const wrapper = shallowMount(HelloWorld);
    // console.warn(wrapper.element).toContain("hello");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    await wrapper.vm.start();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    expect(wrapper.vm.number).toEqual(48);
    // expect(wrapper.element.style.color).toContain("red");
  });
});
