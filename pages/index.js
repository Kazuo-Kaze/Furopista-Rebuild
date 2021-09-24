import { HorizontalScrollProvider } from "../context/HorizontalScroll.context";

export default function Index() {
  return (
    <HorizontalScrollProvider
      options={{ smooth: true, direction: "horizontal" }}
    >
      <div data-scroll-container>
        <div></div>
      </div>
    </HorizontalScrollProvider>
  );
}
